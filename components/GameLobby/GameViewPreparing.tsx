import { GameInfo } from "../../types/lobby";
import { useWs, Ws } from "../../providers/ws";
import {
  Button,
  Intent,
  Toaster,
  Position,
  IToaster,
  NonIdealState,
  Card,
  Classes,
  Icon,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useApiClient } from "../../helpers/api-client";
import { selectSessionGameId } from "../../redux/store";
import { LeaveGameRequestBody } from "../../types/game";
import {
  selectCurrentGame,
  selectCurrentGamePlayers,
  selectCurrentNodeId,
  startUpdateNode,
  selectCurrentNodeLoading,
  selectCurrentNodePingMap,
  selectGameStarting,
  updateStartGameLoadingLocal,
} from "../../redux/modules/game";
import { Spinner } from "../../components/Spinner";
import { GameSlot, SlotUpdate } from "../../components/GameLobby/GameSlot";
import { Scrollbar } from "react-scrollbars-custom";
import { createSelector, SerializedError } from "@reduxjs/toolkit";
import { loadMapDetailByPath } from "../../redux/modules/map";
import {
  GetMapDetailMessage,
  WsMessageTypeId,
  GameSlotUpdateMessage,
  GameSlotUpdateRequestMessage,
  GameSelectNodeMessage,
  GameSelectNodeRequestMessage,
} from "../../types/ws";
import { MapIcon } from "../../components/MapIcon";
import { useRouter } from "next/router";
import { useAuth } from "../../providers/auth";
import { Slot, GameStatus } from "../../types/lobby";
import { createAbsoluteUrl } from "../../helpers/url";
import { copyToClipboard } from "../../helpers/clipboard";
import { ServerSelector } from "../../components/ServerSelector";
import MapDetail, { GameMapDetail } from "./MapDetail";
import { Layout } from "../Layout";
import GameStartFailedAlert from "./GameStartFailedAlert";

export interface GameViewPreparingProps {
  game: GameInfo;
  mapDetail: GameMapDetail;
}

interface SlotRef {
  id: number;
  slot: Slot;
  player_id?: number;
}

const selectSlotGroups = createSelector(selectCurrentGame, (game) => {
  const groups = {
    players: [] as SlotRef[],
    referees: [] as SlotRef[],
  };

  if (!game) {
    return groups;
  }

  for (let id = 0; id < game.slots.length; id++) {
    const slot = game.slots[id];
    if (slot.settings.team === 24) {
      groups.referees.push({
        id,
        slot,
        player_id: slot.player && slot.player.id,
      });
    } else {
      groups.players.push({
        id,
        slot,
        player_id: slot.player && slot.player.id,
      });
    }
  }

  // groups.referees = groups.referees.slice(0, 12);

  return groups;
});

export default function GameViewPreparing({
  game,
  mapDetail,
}: GameViewPreparingProps) {
  const apiClient = useApiClient();
  const dispatch = useDispatch();
  const { player } = useAuth();
  const [leaving, setLeaving] = useState(false);
  const toaster = useRef(null as IToaster);
  const currentGameId = game.id;
  const currentNodeId = useSelector(selectCurrentNodeId);
  const currentNodeLoading = useSelector(selectCurrentNodeLoading);
  const currentGamePlayers = useSelector(selectCurrentGamePlayers);
  const currentNodePingMap = useSelector(selectCurrentNodePingMap);
  const starting = useSelector(selectGameStarting);
  const { players, referees } = useSelector(selectSlotGroups);
  const ws = useWs();
  const teams = players.length;
  const canSelectServer =
    game && game.created_by && game.created_by.id === player.id;

  const setStartingLocal = () => {
    dispatch(updateStartGameLoadingLocal(true));
  };

  const handleSlotSettingChange = useMemo(() => {
    return (update: SlotUpdate) => {
      const { id, ...partial } = update;
      const newSettings = {
        ...game.slots[id].settings,
        ...partial,
      };
      ws.send({
        type: WsMessageTypeId.GameSlotUpdateRequest,
        game_id: currentGameId,
        slot_index: id,
        slot_settings: newSettings,
      } as GameSlotUpdateRequestMessage);
    };
  }, [ws, game]);
  const [joinLinkLoading, setJoinLinkLoading] = useState(false);
  const createJoinLink = async () => {
    setJoinLinkLoading(true);
    try {
      const res = await apiClient.post("/api/create-join-game-token", {
        game_id: currentGameId,
      });
      const url = createAbsoluteUrl("/join", {
        token: res.data.token,
      });
      copyToClipboard(url);
      toaster.current.show({
        icon: IconNames.INFO_SIGN,
        message:
          "Join link has been copied. The link is only valid for 15 minutes.",
        intent: Intent.SUCCESS,
      });
    } catch (e) {
      toaster.current.show({
        icon: IconNames.WARNING_SIGN,
        message: "Create join link failed: " + e.message,
        intent: Intent.DANGER,
      });
    } finally {
      setJoinLinkLoading(false);
    }
  };

  const leave = useCallback(async () => {
    setLeaving(true);
    try {
      await apiClient.put("/api/leave-game", {
        game_id: currentGameId,
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

  const handleNodeChange = useCallback(
    (nodeId: number) => {
      dispatch(startUpdateNode());
      ws.send({
        type: WsMessageTypeId.GameSelectNodeRequest,
        game_id: currentGameId,
        node_id: nodeId,
      } as GameSelectNodeRequestMessage);
    },
    [currentGameId]
  );

  const changeTeam = (team: number) => {
    if (!game) {
      return;
    }
    const id = game.slots.findIndex(
      (s) => s.player && s.player.id === player.id
    );
    if (id !== -1) {
      handleSlotSettingChange({
        id,
        team,
      });
    }
  };

  const handleStartGame = async () => {
    ws.send({
      type: WsMessageTypeId.GameStartRequest,
      game_id: game.id,
    });
    setStartingLocal();
  };

  if (leaving) {
    return (
      <Layout flex>
        <NonIdealState title="Leaving...">
          <Spinner />
        </NonIdealState>
      </Layout>
    );
  }

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
      <div className="flex flex-col space-y-4 w-full">
        <div className="flex-initial flex space-x-4">
          <div className="flex-initial w-1/2">
            <MapDetail detail={mapDetail} />
          </div>
          <div className="flex-auto flex flex-col">
            <div className="flex-auto flex">
              <div className="flex-auto">
                <h5 className={Classes.HEADING}>Host Player</h5>
                <div className="mb-4">
                  {game && game.created_by && game.created_by.name}
                </div>
                <h5 className={Classes.HEADING}>Server</h5>
                <ServerSelector
                  game_id={currentGameId}
                  players={currentGamePlayers}
                  value={currentNodeId}
                  loading={currentNodeLoading}
                  readonly={!canSelectServer}
                  disabled={starting}
                  onChange={handleNodeChange}
                />
              </div>
            </div>
            <div>
              <div className="flex-auto space-x-2">
                {game.created_by.id === player.id && (
                  <Button
                    intent={Intent.PRIMARY}
                    loading={starting}
                    onClick={handleStartGame}
                    disabled={!currentNodeId}
                  >
                    Start Game
                  </Button>
                )}
                <Button
                  intent={Intent.DANGER}
                  loading={leaving}
                  onClick={leave}
                  disabled={starting}
                >
                  Leave Game
                </Button>
                {game.created_by && game.created_by.id === player.id ? (
                  <Button
                    loading={joinLinkLoading}
                    disabled={starting}
                    onClick={createJoinLink}
                  >
                    Invite Player
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Card className="flex-auto">
          <Scrollbar>
            <div className="flex space-x-4">
              <div className="flex-auto w-1/2">
                <h5 className={`${Classes.HEADING}`}>
                  <span
                    className="cursor-pointer hover:text-gray-500"
                    onClick={() => {
                      changeTeam(0);
                    }}
                  >
                    Players
                  </span>
                </h5>
                <div>
                  {players.map((s, idx) => {
                    const playerId = s.player_id;
                    return (
                      <GameSlot
                        key={idx}
                        id={s.id}
                        slot={s.slot}
                        teams={teams}
                        host={playerId === game.created_by.id}
                        me={playerId === player.id}
                        onSettingsChange={handleSlotSettingChange}
                        ping={
                          playerId &&
                          currentNodePingMap &&
                          currentNodePingMap[playerId]
                        }
                        disabled={starting}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex-auto w-1/2">
                <h5 className={`${Classes.HEADING}`}>
                  <span
                    className="cursor-pointer hover:text-gray-500"
                    onClick={() => {
                      changeTeam(24);
                    }}
                  >
                    Referees
                  </span>
                </h5>
                <div>
                  {referees.map((s, idx) => {
                    const playerId = s.player_id;
                    return (
                      <GameSlot
                        id={s.id}
                        key={idx}
                        slot={s.slot}
                        teams={teams}
                        host={playerId === game.created_by.id}
                        me={playerId === player.id}
                        ping={
                          playerId &&
                          currentNodePingMap &&
                          currentNodePingMap[playerId]
                        }
                        disabled={starting}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Scrollbar>
        </Card>
        <Toaster position={Position.TOP} ref={(v) => (toaster.current = v)} />
        <GameStartFailedAlert />
      </div>
    </Layout>
  );
}
