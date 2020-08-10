import {
  Drawer,
  Classes,
  Button,
  NonIdealState,
  Icon,
  Position,
  Popover,
  Menu,
  MenuItem,
} from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  loadPingSnapshot,
  selectGamePingSnapshotLoading,
  selectGamePingSnapshot,
} from "../redux/modules/game";
import { useWs } from "../providers/ws";
import { Spinner } from "./Spinner";
import { selectNodes, selectNodeMap } from "../redux/modules/node";
import { PlayerRef } from "../types/player";
import { FlagIcon } from "./FlagIcon";
import { IconNames } from "@blueprintjs/icons";
import { createSelector } from "@reduxjs/toolkit";
import Link from "next/link";
import { signOut } from "../redux/modules/auth";
import PingValue from "./PingValue";

export interface ServerSelectorProps {
  game_id: number;
  players: PlayerRef[];
  readonly?: boolean;
  loading?: boolean;
  value?: number | null;
  onChange?: (nodeId: number) => void;
}

export function ServerSelector({
  game_id,
  players,
  readonly,
  loading,
  value,
  onChange,
}: ServerSelectorProps) {
  const dispatch = useDispatch();
  const ws = useWs();
  const [open, setOpen] = useState(false);
  const dataLoading = useSelector(selectGamePingSnapshotLoading);
  const data = useSelector(selectGamePingSnapshot);
  const nodes = useSelector(selectNodes);
  const nodeMap = useSelector(selectNodeMap);

  const selected = value ? nodeMap.get(value) : null;

  const load = () => {
    dispatch(
      loadPingSnapshot({
        ws,
        game_id,
      })
    );
  };

  useEffect(() => {
    if (open) {
      load();
    }
  }, [open]);

  let dialogContent;
  if (dataLoading || !data) {
    dialogContent = (
      <NonIdealState title="Loading">
        <Spinner />
      </NonIdealState>
    );
  } else {
    dialogContent = (
      <div>
        <table
          className={`${Classes.HTML_TABLE} ${Classes.HTML_TABLE_STRIPED} ${
            readonly ? "" : Classes.INTERACTIVE
          } w-full`}
        >
          <thead>
            <tr>
              <th>Server</th>
              {players.map((p) => {
                return (
                  <th key={p.id} className="text-xs">
                    {p.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {nodes.map((node) => {
              return (
                <tr
                  key={node.id}
                  onClick={() => {
                    if (readonly) {
                      return;
                    }
                    if (onChange) {
                      onChange(node.id);
                    }
                    setOpen(false);
                  }}
                >
                  <td>
                    <div className="flex justify-start items-center content-center">
                      <FlagIcon
                        className="flex-initial mr-2"
                        id={node.country_id}
                      />
                      <span className="flex-auto font-semibold">
                        {node.name}
                      </span>
                    </div>
                  </td>
                  {players.map((p) => {
                    const ping =
                      data.node_ping_map[node.id] &&
                      data.node_ping_map[node.id].player_ping_map[p.id];
                    return (
                      <td key={p.id}>
                        <PingValue value={ping} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Button onClick={() => setOpen(true)} large loading={loading}>
        {selected ? (
          <span className="inline-flex items-center">
            <FlagIcon className="flex-initial mr-2" id={selected.country_id} />
            <span className="flex-initial">
              {selected.name}
              <small className="ml-1">
                <PingValue value={selected.ping} />
              </small>
            </span>
          </span>
        ) : (
          <span className={Classes.TEXT_MUTED}>Not Selected</span>
        )}
      </Button>
      <Drawer
        className={Classes.DARK}
        isOpen={open}
        position={Position.RIGHT}
        title={readonly ? "Ping Details" : "Change Server"}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className={Classes.DRAWER_BODY}>
          <div className={Classes.DIALOG_BODY}>{dialogContent}</div>
        </div>
      </Drawer>
    </div>
  );
}
