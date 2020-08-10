import { Layout } from "../components/Layout";
import { withConnected, useWs, Ws } from "../providers/ws";
import {
  Button,
  Intent,
  Toaster,
  Position,
  IToaster,
  NonIdealState,
  Card,
  Classes,
  Callout,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useApiClient } from "../helpers/api-client";
import { selectSessionGameId } from "../redux/store";
import { LeaveGameRequestBody } from "../types/game";
import {
  selectCurrentGame,
  selectCurrentGamePlayers,
  selectCurrentNodeId,
  startUpdateNode,
  selectCurrentNodeLoading,
} from "../redux/modules/game";
import { Spinner } from "../components/Spinner";
import { GameSlot, SlotUpdate } from "../components/GameLobby/GameSlot";
import { Scrollbar } from "react-scrollbars-custom";
import { createSelector, SerializedError } from "@reduxjs/toolkit";
import {
  selectMapDetail,
  selectMapState,
  loadMapDetail,
  loadMapDetailByPath,
} from "../redux/modules/map";
import {
  GetMapDetailMessage,
  WsMessageTypeId,
  GameSlotUpdateMessage,
  GameSlotUpdateRequestMessage,
  GameSelectNodeMessage,
  GameSelectNodeRequestMessage,
} from "../types/ws";
import { MapIcon } from "../components/MapIcon";
import { useRouter } from "next/router";
import { useAuth } from "../providers/auth";
import { Slot } from "../types/lobby";
import { createAbsoluteUrl } from "../helpers/url";
import { copyToClipboard } from "../helpers/clipboard";
import { ServerSelector } from "../components/ServerSelector";

const selectSlotGroups = createSelector(selectCurrentGame, (game) => {
  const groups = {
    players: [] as Slot[],
    referees: [] as Slot[],
  };

  if (!game) {
    return groups;
  }

  for (let s of game.slots) {
    if (s.settings.team === 24) {
      groups.referees.push(s);
    } else {
      groups.players.push(s);
    }
  }

  groups.referees = groups.referees.slice(0, 12);

  return groups;
});

interface GameMapDetail {
  map: GetMapDetailMessage;
  loading: boolean;
  error: SerializedError;
}

const selectGameMapDetail = createSelector(
  selectCurrentGame,
  selectMapState,
  (game, map) => {
    if (!game) {
      return null;
    }

    if (map.detail && map.detail.path === game.map.path) {
      return {
        map: map.detail,
        loading: false,
        error: null,
      } as GameMapDetail;
    } else {
      return {
        map: null,
        loading: map.detailLoading,
        error: map.detailLoadError,
      } as GameMapDetail;
    }
  }
);

export default withConnected(function GameLobby() {
  const apiClient = useApiClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const { player } = useAuth();
  const [starting, setStarting] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const toaster = useRef(null as IToaster);
  const currentGameId = useSelector(selectSessionGameId);
  const currentGame = useSelector(selectCurrentGame);
  const currentNodeId = useSelector(selectCurrentNodeId);
  const currentNodeLoading = useSelector(selectCurrentNodeLoading);
  const currentGamePlayers = useSelector(selectCurrentGamePlayers);
  const mapDetail = useSelector(selectGameMapDetail);
  const { players, referees } = useSelector(selectSlotGroups);
  const ws = useWs();
  const teams = players.length;
  const canSelectServer =
    currentGame &&
    currentGame.created_by &&
    currentGame.created_by.id === player.id;

  const handleSlotSettingChange = useMemo(() => {
    return (update: SlotUpdate) => {
      const { id, ...partial } = update;
      const newSettings = {
        ...players[id].settings,
        ...partial,
      };
      ws.send({
        type: WsMessageTypeId.GameSlotUpdateRequest,
        game_id: currentGameId,
        slot_settings: newSettings,
      } as GameSlotUpdateRequestMessage);
    };
  }, [ws, players]);
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

  useEffect(() => {
    if (!currentGameId) {
      router.replace("/");
    }
  }, [currentGameId]);

  useEffect(() => {
    if (currentGame) {
      if (mapDetail.map && mapDetail.map.path === currentGame.map.path) {
        return;
      }
      dispatch(
        loadMapDetailByPath({
          ws,
          path: currentGame.map.path,
        })
      );
    }
  }, [currentGame]);

  if (!currentGame) {
    return (
      <Layout flex>
        <NonIdealState>
          <Spinner />
        </NonIdealState>
      </Layout>
    );
  }

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
        <div className="flex content-center space-x-2">
          <Button intent={Intent.PRIMARY} loading={starting}>
            Start Game
          </Button>
          <Button intent={Intent.DANGER} loading={leaving} onClick={leave}>
            Leave Game
          </Button>
          {currentGame.created_by && currentGame.created_by.id === player.id ? (
            <Button loading={joinLinkLoading} onClick={createJoinLink}>
              Invite Player
            </Button>
          ) : null}
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
                <h5 className={Classes.HEADING}>Server</h5>
                <ServerSelector
                  game_id={currentGameId}
                  players={currentGamePlayers}
                  value={currentNodeId}
                  loading={currentNodeLoading}
                  readonly={!canSelectServer}
                  onChange={handleNodeChange}
                />
              </div>
            </div>
          </div>
        </div>
        <Card className="flex-auto">
          <Scrollbar>
            <div className="flex space-x-4">
              <div className="flex-auto w-1/2">
                <h5 className={Classes.HEADING}>Players</h5>
                <div>
                  {players.map((s, idx) => {
                    return (
                      <GameSlot
                        key={idx}
                        id={idx}
                        slot={s}
                        teams={teams}
                        host={
                          s.player && s.player.id === currentGame.created_by.id
                        }
                        me={s.player && s.player.id === player.id}
                        onSettingsChange={handleSlotSettingChange}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex-auto w-1/2">
                <h5 className={Classes.HEADING}>Referees</h5>
                <div>
                  {referees.map((s, idx) => {
                    return (
                      <GameSlot id={idx} key={idx} slot={s} teams={teams} />
                    );
                  })}
                </div>
              </div>
            </div>
          </Scrollbar>
        </Card>
      </div>
      <Toaster position={Position.TOP} ref={(v) => (toaster.current = v)} />
    </Layout>
  );
});

function MapDetail({
  detail: { map, loading, error },
}: {
  detail: GameMapDetail;
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

  return (
    <div>
      <div className="flex space-x-4">
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
