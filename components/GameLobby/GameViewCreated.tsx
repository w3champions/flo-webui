import { GameInfo, Slot, SlotClientStatus } from "../../types/lobby";
import MapDetail, { GameMapDetail } from "./MapDetail";
import { IconNames } from "@blueprintjs/icons";
import { Layout } from "../Layout";
import {
  Icon,
  Card,
  Elevation,
  Callout,
  Intent,
  Classes,
  Divider,
  Button,
  Position,
  Toaster,
  IToaster,
} from "@blueprintjs/core";
import { Spinner } from "../Spinner";
import { useSelector } from "react-redux";
import {
  selectCurrentGamePlayers,
  selectCurrentNodePingMap,
  selectCurrentGame,
  selectCurrentNode,
} from "../../redux/modules/game";
import { createSelector } from "@reduxjs/toolkit";
import PlayerColorPicker from "./PlayerColorPicker";
import PingValue from "../PingValue";
import { load } from "grpc";
import { FlagIcon } from "../FlagIcon";
import { useWs } from "../../providers/ws";
import { useCallback, useState, useRef } from "react";
import { LeaveGameRequestBody } from "../../types/game";
import { useApiClient } from "../../helpers/api-client";

export interface GameViewCreatedProps {
  game: GameInfo;
  mapDetail: GameMapDetail;
}

interface LoadingPlayer {
  slot: Slot;
  ping?: number;
}

const selectLoadingPlayers = createSelector(
  selectCurrentGame,
  selectCurrentNodePingMap,
  (game, pingMap) => {
    return game.slots
      .filter((slot) => !!slot.player)
      .map((slot) => {
        const ping = pingMap ? pingMap[String(slot.player.id)] : null;
        return { slot, ping } as LoadingPlayer;
      });
  }
);

export default function GameViewCreated({
  game,
  mapDetail,
}: GameViewCreatedProps) {
  const loadingPlayers = useSelector(selectLoadingPlayers);
  const node = useSelector(selectCurrentNode);
  const apiClient = useApiClient();
  const [leaving, setLeaving] = useState(false);
  const toaster = useRef(null as IToaster);

  const leave = useCallback(async () => {
    setLeaving(true);
    try {
      await apiClient.put("/api/leave-game", {
        game_id: game.id * 11,
      } as LeaveGameRequestBody);
    } catch (e) {
      setLeaving(false);
      toaster.current.show({
        icon: IconNames.WARNING_SIGN,
        message: "Leave game failed: " + e.message,
        intent: Intent.DANGER,
      });
    }
  }, []);

  return (
    <Layout
      flex
      navContent={
        <div className="flex content-center items-center space-x-2">
          <Icon
            icon={IconNames.RECORD}
            className="fill-current text-red-500 animate-pulse"
          />
          <h1 className="flex-initial font-bold text-lg">GAME#{game.id}</h1>
        </div>
      }
    >
      <div className="flex flex-col w-full space-y-8">
        <div className="flex-auto flex space-x-16">
          <div className="flex-initial">
            <MapDetail detail={mapDetail} vertical />
          </div>
          <div className="flex-auto space-y-4">
            <div className="space-y-4">
              <h3 className={`flex items-center ${Classes.HEADING}`}>
                <span className="flex-initial mr-4">Game created on</span>
                <FlagIcon className="flex-initial mr-2" id={node.country_id} />
                <span className="flex-initial font-bold flo-text-info">
                  {node.name}
                </span>
              </h3>

              <div>Please join the LAN game.</div>

              <Button intent={Intent.DANGER} loading={leaving} onClick={leave}>
                Force Leave
              </Button>
            </div>

            <Divider />

            <h3 className={Classes.HEADING}>Players</h3>

            {loadingPlayers.map(({ slot, ping }, idx) => {
              return (
                <div
                  key={idx}
                  className="flex space-x-4 border border-gray-800 rounded px-4 py-4 items-center shadow"
                >
                  <div className="flex-initial">
                    <PlayerColorPicker readonly value={slot.settings.color} />
                  </div>
                  <div className="flex-initial">
                    <PingValue value={ping} />
                  </div>
                  <div className="flex-auto font-bold flo-text-info">
                    {slot.player.name}
                  </div>
                  <div className="flex-initial">
                    {SlotClientStatus[slot.client_status]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Toaster position={Position.TOP} ref={(v) => (toaster.current = v)} />
    </Layout>
  );
}
