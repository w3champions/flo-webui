import {
  GameInfo,
  Slot,
  SlotClientStatus,
  GameStatus,
} from "../../types/lobby";
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
  Tag,
  NonIdealState,
} from "@blueprintjs/core";
import { Spinner } from "../Spinner";
import { useSelector } from "react-redux";
import {
  selectCurrentGamePlayers,
  selectCurrentNodePingMap,
  selectCurrentGame,
  selectCurrentNode,
  selectLanGameName,
  selectStartGameError,
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
import { useAuth } from "../../providers/auth";
import { PingStats } from "../../types/ping";

export interface GameViewCreatedProps {
  game: GameInfo;
  mapDetail: GameMapDetail;
}

interface LoadingPlayer {
  slot: Slot;
  ping?: PingStats;
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
  const lanGameName = useSelector(selectLanGameName);
  const startGameError = useSelector(selectStartGameError);
  const apiClient = useApiClient();
  const { player: me } = useAuth();
  const [leaving, setLeaving] = useState(false);
  const toaster = useRef(null as IToaster);

  const leave = useCallback(async () => {
    setLeaving(true);
    try {
      await apiClient.put("/api/leave-game", {
        game_id: game.id,
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
      <div className="flex flex-col w-full space-y-4">
        <div className="flex-initial flex">
          <div className="flex-auto flex space-x-16">
            <div className="flex-initial">
              <MapDetail detail={mapDetail} vertical />
            </div>
            <div className="flex-auto space-y-4">
              {startGameError ? (
                <Callout intent={Intent.DANGER} title="Create LAN game failed">
                  {startGameError.message}
                </Callout>
              ) : (
                <>
                  <h3 className="mb-1">LAN game name</h3>
                  {lanGameName ? (
                    <span className="flo-text-info text-3xl font-bold">
                      {lanGameName}
                    </span>
                  ) : (
                    <Spinner />
                  )}

                  <h3 title={game.status} className={`${Classes.HEADING}`}>
                    {getStatusText(game.status)}
                  </h3>
                </>
              )}

              <div>
                <div className="flex">
                  <FlagIcon
                    className="flex-initial mr-2"
                    id={node.country_id}
                  />
                  <span className="flex-initial font-bold flo-text-info">
                    {node.name}
                  </span>
                </div>
              </div>

              <Button intent={Intent.DANGER} loading={leaving} onClick={leave}>
                Force Leave
              </Button>
            </div>
          </div>
        </div>
        <Divider className="flex-initial" />
        <div className="flex-auto space-y-4">
          {loadingPlayers.map(({ slot, ping }, idx) => {
            const intent = getClientStatusTagIntent(slot.client_status);
            const pulse =
              intent === Intent.PRIMARY || intent === Intent.SUCCESS;
            return (
              <div
                key={idx}
                className={`flex space-x-4 border border-gray-800 rounded px-4 py-4 items-center shadow ${
                  slot.player.id === me.id ? "bg-blue-900" : ""
                }`}
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
                  <Tag
                    minimal={slot.client_status === SlotClientStatus.Pending}
                    intent={intent}
                    round
                    className={pulse ? "animate-pulse" : ""}
                  >
                    {SlotClientStatus[slot.client_status]}
                  </Tag>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Toaster position={Position.TOP} ref={(v) => (toaster.current = v)} />
    </Layout>
  );
}

function getClientStatusTagIntent(status: SlotClientStatus): Intent {
  switch (status) {
    case SlotClientStatus.Pending:
      return Intent.WARNING;
    case SlotClientStatus.Connected:
      return Intent.PRIMARY;
    case SlotClientStatus.Joined:
    case SlotClientStatus.Loading:
    case SlotClientStatus.Loaded:
      return Intent.SUCCESS;
    case SlotClientStatus.Disconnected:
      return Intent.DANGER;
    case SlotClientStatus.Left:
      return Intent.NONE;
  }
  return Intent.NONE;
}

function getStatusText(status: GameStatus) {
  switch (status) {
    case GameStatus.Created:
      return "Waiting for players";
    case GameStatus.Running:
      return "Game Started";
  }
}
