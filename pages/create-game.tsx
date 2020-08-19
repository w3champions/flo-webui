import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WsMessageTypeId, GetMapDetailMessage } from "../types/ws";
import { AppState } from "../redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { MapList, MapEntry } from "../types/map";
import {
  ITreeNode,
  Tree,
  Classes,
  InputGroup,
  Card,
  Callout,
  Intent,
  NonIdealState,
  Button,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import {
  selectMapListSorted,
  selectMapFilter,
  updateMapFilter,
  setMapSelectedId,
  selectMapSelectedId,
  loadMapList,
  loadMapDetail,
  selectMapState,
  selectMapDetailLoading,
  selectMapDetail,
  selectMapDetailLoadError,
  selectMapListLoading,
  selectMapListLoadError,
} from "../redux/modules/map";
import { useDebounceCallback } from "@react-hook/debounce";
import { Spinner } from "../components/Spinner";
import { MapIcon } from "../components/MapIcon";
import {
  selectGameCreating,
  createGame,
  selectGameCreateError,
  clearGameCreateError,
} from "../redux/modules/game";
import { useApiClient } from "../helpers/api-client";
import { Scrollbar } from "react-scrollbars-custom";
import { useWs, withConnected } from "../providers/ws";

export default withConnected(function CreateGame() {
  const dispatch = useDispatch();
  const ws = useWs();
  const initialFilterValue = useSelector(selectMapFilter);
  const [filterValue, setFilterValue] = useState(initialFilterValue);
  const commitFilterValue = useDebounceCallback(
    (value: string) => {
      dispatch(updateMapFilter(value));
    },
    200,
    true
  );

  useEffect(() => {
    dispatch(loadMapList(ws));

    return () => {
      dispatch(updateMapFilter(""));
      dispatch(setMapSelectedId(null));
    };
  }, []);

  const selectedId = useSelector(selectMapSelectedId);
  useEffect(() => {
    if (selectedId) {
      dispatch(
        loadMapDetail({
          ws,
          id: selectedId,
        })
      );
    }
  }, [selectedId]);

  const listLoading = useSelector(selectMapListLoading);
  const listError = useSelector(selectMapListLoadError);
  const createError = useSelector(selectGameCreateError);
  const [creating, setCreating] = useState(false);
  const apiClient = useApiClient();

  useEffect(() => {
    if (createError) {
      if (creating) {
        setCreating(false);
      }
    }
  }, [createError]);

  if (creating) {
    return (
      <Layout flex>
        <NonIdealState title="Creating game...">
          <Spinner />
        </NonIdealState>
      </Layout>
    );
  }

  return (
    <Layout flex>
      <div className="flex flex-col w-full space-y-1">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col flex-1 space-y-2 sm:flex-row w-full sm:space-y-0 sm:space-x-4">
            <div
              className={creating ? "hidden" : "flex-1 flex flex-col space-y-2"}
            >
              <div className="flex-initial">
                <InputGroup
                  leftIcon="filter"
                  placeholder="Filter map..."
                  value={filterValue}
                  onChange={({
                    currentTarget: { value },
                  }: React.FormEvent<HTMLInputElement>) => {
                    setFilterValue(value);
                    commitFilterValue(value);
                  }}
                />
              </div>
              <div className="flex-1 relative">
                <Card className="absolute top-0 left-0 right-0 bottom-0 p-1">
                  {listLoading ? (
                    <NonIdealState>
                      <Spinner />
                    </NonIdealState>
                  ) : listError ? (
                    <Callout
                      intent={Intent.DANGER}
                      title="Load map list failed"
                    >
                      {listError.message}
                    </Callout>
                  ) : (
                    <Scrollbar>
                      <MapSelector />
                    </Scrollbar>
                  )}
                </Card>
              </div>
            </div>

            <div
              className={
                creating
                  ? "flex-auto flex flex-col space-y-4"
                  : "flex-initial flex flex-col sm:w-3/5 space-y-4"
              }
            >
              <MapPreview
                onCreate={(detail) => {
                  setCreating(true);
                  dispatch(
                    createGame({
                      client: apiClient,
                      detail,
                    })
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});

const selectTreeNodes = createSelector(
  selectMapSelectedId,
  selectMapListSorted,
  (id, data) => (data ? getMapTreeNodes(id, data.children) : null)
);

const isFolderName = (name: string) => !name || !/\.w3(x|m)$/.test(name);

function getMapTreeNodes(selectedId: string, entries: MapEntry[]): ITreeNode[] {
  function mapEntry(depth: number, prefix: string, entry: MapEntry): ITreeNode {
    const id = `${prefix}\\${entry.name}`;
    const isFolder = isFolderName(entry.name);

    return {
      id,
      label: entry.name,
      childNodes: entry.children.map((e) => mapEntry(depth + 1, id, e)),
      hasCaret: isFolder,
      isExpanded: isFolder,
      icon: isFolder
        ? entry.children.length > 0
          ? IconNames.FOLDER_OPEN
          : IconNames.FOLDER_CLOSE
        : IconNames.DOCUMENT,
      isSelected: id === selectedId,
      nodeData: id,
    } as ITreeNode;
  }
  return entries.map((e) => mapEntry(0, "", e));
}

function MapSelector() {
  const dispatch = useDispatch();
  const contents = useSelector(selectTreeNodes);
  const disableSelection = useSelector(selectMapDetailLoading);

  return (
    <Tree
      contents={contents}
      onNodeClick={(node) => {
        if (node.hasCaret) {
          return;
        }
        if (!disableSelection) {
          dispatch(setMapSelectedId(node.nodeData as string));
        }
      }}
    />
  );
}

function MapPreview(props: {
  onCreate: (detail: GetMapDetailMessage) => void;
}) {
  const dispatch = useDispatch();
  const loading = useSelector(selectMapDetailLoading);
  const creating = useSelector(selectGameCreating);
  const createError = useSelector(selectGameCreateError);
  const error = useSelector(selectMapDetailLoadError);
  const detail = useSelector(selectMapDetail);

  useEffect(() => {
    if (loading) {
      dispatch(clearGameCreateError());
    }
  }, [loading]);

  if (loading) {
    return (
      <NonIdealState>
        <Spinner />
      </NonIdealState>
    );
  }

  if (error) {
    return (
      <Callout intent={Intent.DANGER} title="Load map detail failed">
        {error.message}
      </Callout>
    );
  }

  if (!detail) {
    return <NonIdealState title="Select a map" />;
  }

  return (
    <>
      {createError ? (
        <Callout title="Create game failed" intent={Intent.DANGER}>
          {createError.message}
        </Callout>
      ) : null}
      <div className="flex-1 flex flex-col space-y-4 content-center items-center justify-center">
        <div className="flex-initial">
          <h5 className="font-extrabold flex justify-center items-center content-center">
            <MapIcon className="flex-initial" num_player={detail.num_players} />
            <span className="flex-initial text-xl ml-2 flo-text-info">
              {detail.name}
            </span>
          </h5>
          <div className="text-center text-xs">Author: {detail.author}</div>
        </div>
        <div className="flex-initial text-center">
          <img
            className="shadow border rounded border-black inline-block"
            src={`data:image/jpeg;base64,${detail.preview_jpeg_base64}`}
          />
        </div>
        <Card className="flex-initial" style={{ width: 256 }}>
          <div className="relative overflow-hidden">
            <div className="flo-text-info float-left">Suggested Players:</div>
            <div className="float-right">{detail.suggested_players}</div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flo-text-info float-left">Map Size:</div>
            <div className="float-right">
              {detail.width} x {detail.height}
            </div>
          </div>
          <p className="text-xs mt-2">{detail.description}</p>
        </Card>

        <Button
          className="flex-initial"
          intent={Intent.PRIMARY}
          large
          loading={creating}
          onClick={() => {
            if (props.onCreate) {
              props.onCreate(detail);
            }
          }}
        >
          Create Game
        </Button>
      </div>
    </>
  );
}
