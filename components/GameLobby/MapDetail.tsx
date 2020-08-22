import { GetMapDetailMessage } from "../../types/ws";
import { SerializedError } from "@reduxjs/toolkit";
import {
  Callout,
  Intent,
  NonIdealState,
  Spinner,
  Card,
} from "@blueprintjs/core";
import Scrollbar from "react-scrollbars-custom";
import { MapIcon } from "../MapIcon";

export interface GameMapDetail {
  map: GetMapDetailMessage;
  loading: boolean;
  error: SerializedError;
}

export default function MapDetail({
  detail: { map, loading, error },
  vertical,
}: {
  detail: GameMapDetail;
  vertical?: boolean;
}) {
  if (error) {
    return (
      <Callout intent={Intent.DANGER} title="Load map failed">
        {error.message}
      </Callout>
    );
  }

  if (loading) {
    return (
      <NonIdealState>
        <Spinner></Spinner>
      </NonIdealState>
    );
  }

  if (!map) {
    return null;
  }

  if (vertical) {
    return (
      <div className="flex space-y-4 flex-col">
        <div className="flex-initial" style={{ width: 256, height: 256 }}>
          <img
            className="shadow border rounded border-black inline-block"
            src={`data:image/jpeg;base64,${map.preview_jpeg_base64}`}
          />
        </div>
        <div className="flex-initial flex items-center content-center justify-center">
          <MapIcon className="flex-initial" num_player={map.num_players} />
          <div className="flex-initial text-xl ml-2 flo-text-info">
            <div className="font-extrabold ">{map.name}</div>
            <div className="text-xs">Author: {map.author}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={`flex space-x-4`}>
        <div className="flex-initial" style={{ width: 256, height: 256 }}>
          <img
            className="shadow border rounded border-black inline-block"
            src={`data:image/jpeg;base64,${map.preview_jpeg_base64}`}
          />
        </div>
        <Card className="flex-1">
          <Scrollbar>
            <div className="space-y-4">
              <div className="flex items-center content-start">
                <MapIcon
                  className="flex-initial"
                  num_player={map.num_players}
                />
                <div className="flex-initial text-xl ml-2 flo-text-info">
                  <div className="font-extrabold ">{map.name}</div>
                  <div className="text-xs">Author: {map.author}</div>
                </div>
              </div>
              <p className="text-xs">{map.description}</p>
              <div className="text-xs">
                <div className="relative overflow-hidden">
                  <div className="flo-text-info float-left">Players</div>
                  <div className="float-right">{map.num_players}</div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="flo-text-info float-left">
                    Suggested Players:
                  </div>
                  <div className="float-right">{map.suggested_players}</div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="flo-text-info float-left">Map Size:</div>
                  <div className="float-right">
                    {map.width} x {map.height}
                  </div>
                </div>
              </div>
            </div>
          </Scrollbar>
        </Card>
      </div>
    </div>
  );
}
