import {
  Button,
  Callout,
  Classes,
  Divider,
  H1,
  H2,
  Icon,
  Intent,
  IToaster,
  NonIdealState,
  Position,
  Tab,
  Tabs,
  Tag,
  Toaster,
} from "@blueprintjs/core";

import { SubscriptionHandler, useSubscription } from "urql";
import {
  GameUpdateSubSubscription,
  GameUpdateSubDocument,
  GameSnapshotFieldsFragment,
  GameStatsSnapshotFieldsFragment,
  PingFieldsFragment,
  ActionFieldsFragment,
  PlayerLeaveReason,
  useCreateObserverTokenMutation,
} from "../../generated/graphql";
import produce from "immer";
import { useEffect, useMemo, useRef, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { useRouter } from "next/router";
import Link from "next/link";
import { Line } from "../../helpers/chart";
import { PLAYER_COLORS } from "../../const";
import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Alert } from "../../components/Alert";
import { IconNames } from "@blueprintjs/icons";
import { copyToClipboard } from "../../helpers/clipboard";

type Game = GameSnapshotFieldsFragment;
type Stats = GameStatsSnapshotFieldsFragment;

interface State {
  game?: Game;
  stats?: Stats;
  gone: boolean;
  durationMillis?: number;
}

const initialState: State = {
  gone: false,
};

function getColor(idx: number) {
  const { r, g, b } = PLAYER_COLORS[idx];
  return `rgba(${r}, ${g}, ${b}, 1)`;
}

function update(state: State, message: GameUpdateSubSubscription) {
  if (!message) {
    state.gone = true;
    return;
  }

  const item = message.gameUpdateEvents;
  switch (item.__typename) {
    case "GameSnapshotWithStats": {
      state.game = item.game;
      state.stats = item.stats;
      return;
    }
    case "GameUpdateEvent": {
      switch (item.data.__typename) {
        case "GameUpdateEventDataRemoved": {
          state.gone = true;
          return;
        }
        case "GameUpdateEventDataEnded": {
          const { durationMillis, endedAt } = item.data;
          state.game.endedAt = endedAt;
          state.durationMillis = durationMillis;
          return;
        }
        case "PingStats": {
          state.stats?.ping.push(item.data);
          return;
        }
        case "ActionStats": {
          state.stats?.action.push(item.data);
          return;
        }
        case "GameUpdateEventDataPlayerLeft": {
          const { playerId, time, reason } = item.data;
          const player = state.game.players.find((p) => p.id === playerId);
          if (player) {
            player.leftAt = time;
            player.leaveReason = reason;
          }
          return;
        }
      }
    }
  }
}

const handleSubscription: SubscriptionHandler<
  GameUpdateSubSubscription,
  State
> = (state = initialState, message) => {
  if (!message) {
    return initialState;
  }
  const nextState = produce(state, (draft) => update(draft, message));
  return nextState;
};

export default function LiveGame() {
  const router = useRouter();
  const [res] = useSubscription(
    {
      query: GameUpdateSubDocument,
      variables: { id: Number(router.query.id) },
    },
    handleSubscription
  );

  return (
    <>
      <main className={`${Classes.DARK}`}>
        {res.fetching && <Spinner />}
        {res.error && (
          <NonIdealState
            action={
              <Link href="/live">
                <Button>Back</Button>
              </Link>
            }
            description={
              <Callout intent={Intent.DANGER} title="Disconnected">
                {res.error.message || JSON.stringify(res.error)}
              </Callout>
            }
          ></NonIdealState>
        )}
        {res.data?.game && res.data?.stats && (
          <Game game={res.data.game} stats={res.data.stats} />
        )}
      </main>
      <style jsx global>{`
        body {
          padding: 16px;
        }
      `}</style>
    </>
  );
}

enum ChartTabs {
  Ping,
  APM,
}

function Game({ game, stats }: { game: Game; stats: Stats }) {
  const playerStats = useMemo(() => {
    const ping =
      stats.ping.length > 0 ? stats.ping[stats.ping.length - 1] : null;
    const action =
      stats.action.length > 0 ? stats.action[stats.action.length - 1] : null;
    const entries = game.players.map((player) => {
      return [
        player.id,
        {
          ping: ping?.data.find((i) => i.playerId === player.id),
          action: action?.data.find((i) => i.playerId === player.id),
        },
      ] as [
        number,
        {
          ping: PingFieldsFragment;
          action: ActionFieldsFragment;
        }
      ];
    });
    return new Map(entries);
  }, [game, stats]);

  const [pingDataSets, actionDataSets] = useMemo(() => {
    const pingDataSets = game.players.map((p, idx) => ({
      id: p.id,
      label: p.name,
      borderColor: getColor(idx),
      data: stats.ping.map((v) => {
        return {
          x: v.time / 1000,
          y: v.data.find((i) => i.playerId === p.id)?.avg || 0,
        };
      }),
    }));

    const actionDataSets = game.players.map((p, idx) => ({
      id: p.id,
      label: p.name,
      borderColor: getColor(idx),
      data: stats.action.map((v) => {
        return {
          x: v.time / 1000,
          y: v.data.find((i) => i.playerId === p.id)?.apm || 0,
        };
      }),
    }));

    return [pingDataSets, actionDataSets];
  }, [stats]);
  const finishedApmMap = useMemo(() => {
    if (!game.endedAt) {
      return null;
    }

    let apm_collect_time = stats.action.length
      ? stats.action[stats.action.length - 1].time
      : null;
    let actions = new Map<number, number>();
    for (let { data } of stats.action) {
      for (let item of data) {
        const n = actions.get(item.playerId) || 0;
        actions.set(item.playerId, n + item.total);
      }
    }
    return new Map(
      game.players.map((p) => {
        const time = p.leftAt || apm_collect_time;
        const total = actions.get(p.id);
        return [p.id, total && time ? (total / time) * 60_000 : 0];
      })
    );
  }, [game.endedAt, game.players, stats]);
  const [activaTab, setActiveTab] = useState(ChartTabs.Ping);
  const [running, setRunning] = useState("");
  const [time, setTime] = useState(0);
  const toaster = useRef(null as IToaster);

  useEffect(() => {
    const t = new Date(game.startedAt);
    const timer = setInterval(() => {
      setRunning(formatDistanceToNow(t, { includeSeconds: true }));
      setTime(Date.now() - t.getTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [createObserverTokenResult, createObserverToken] =
    useCreateObserverTokenMutation();
  const generateWatchToken = async () => {
    const res = await createObserverToken({
      gameId: game.id,
    });
    if (res.data) {
      toaster.current.show({
        icon: IconNames.INFO_SIGN,
        message:
          "Token has been copied.",
        intent: Intent.SUCCESS,
      });
      copyToClipboard(res.data.createObserverToken.token)
    }
  };

  let delay = 3 * 60 * 1000
  if (game.maskPlayerNames) {
    delay = 15 * 60 * 1000;
  }
  if (game.mapName.includes('Legion TD')) {
    delay = 10 * 60 * 1000;
  }
  if (game.isLive) {
    delay = 0
  }

  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex-initial flex">
        <div className="flex-auto flex space-x-16">
          <div className="flex-auto space-y-4">
            <h3 className={`${Classes.HEADING} flex flex-row space-x-2`}>
              <span>{game.gameName}</span>
              <Tag className={game.endedAt ? "" : "animate-pulse"}>
                {game.endedAt
                  ? `Ended at ${format(
                      new Date(game.endedAt),
                      "yyyy-MM-dd HH:mm"
                    )}`
                  : running || "Running"}
              </Tag>
            </h3>

            <div className="space-y-2">
              <div className="flex">
                <span className="flex-initial">
                  Started at{" "}
                  {format(new Date(game.startedAt), "yyyy-MM-dd HH:mm")}
                </span>
              </div>
              <div>
                {createObserverTokenResult.error && (
                  <Alert message={createObserverTokenResult.error.message} />
                )}
                {game.isPrivate ? <Button disabled>Private Game</Button> : <>
                  {time < delay ? (
                  <Button intent={Intent.PRIMARY} disabled>
                    Wait {Math.round((delay - time) / 1000.0)} seconds to
                    watch.
                  </Button>
                ) : (
                  <Button
                    intent={Intent.PRIMARY}
                    loading={createObserverTokenResult.fetching}
                    onClick={() => generateWatchToken()}
                  >
                    Generate Token ({delay}s delay)
                  </Button>
                )}
                </>}
                
              </div>
              <div className="flex">
                <span className="flex-initial">
                  {game.mapName}
                  <br />
                  <small>{game.mapPath}</small>
                </span>
              </div>
              <div className="flex">
                <span className="flex-initial">{game.nodeName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className="flex-initial" />
      <div className="flex-auto space-y-1">
        {game.players.map(
          ({ id, name, race, team, leftAt, leaveReason }, idx) => {
            const stats = playerStats.get(id);
            const tickOffset = 15;
            return (
              <div
                key={id}
                className={`flex space-x-4 border border-gray-800 rounded px-2 py-2 items-center shadow}`}
              >
                <div className="w-4">{team !== 24 ? `T${team}` : 'OB'}</div>
                <div className="w-16">{race}</div>
                <div className="flex-auto font-bold flo-text-info">{name}</div>
                {leaveReason && (
                  <div className="w-36">
                    <Tag
                      intent={
                        leaveReason == PlayerLeaveReason.LeaveWon
                          ? Intent.SUCCESS
                          : Intent.WARNING
                      }
                      title={`${(leftAt / 1000).toFixed(2)}s`}
                    >
                      {leaveReason}
                    </Tag>
                  </div>
                )}
                <div className="w-36">
                  {stats?.ping && (
                    <span
                      title={`${stats.ping.min + tickOffset} ~ ${
                        stats.ping.max + tickOffset
                      }`}
                    >
                      {(stats.ping.avg + tickOffset).toFixed(1)}ms
                    </span>
                  )}
                </div>
                {game.endedAt ? (
                  <div className="w-36">
                    {<span>{finishedApmMap.get(id)?.toFixed(1)} APM</span>}
                  </div>
                ) : (
                  <div className="w-36">
                    {stats?.action && (
                      <span>{stats.action.apm.toFixed(1)} APM</span>
                    )}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
      <Divider className="flex-initial" />
      <Tabs
        selectedTabId={activaTab}
        onChange={(e) => {
          setActiveTab(e as ChartTabs);
        }}
      >
        <Tab
          id={ChartTabs.Ping}
          title="Ping"
          panel={
            <div className="chart">
              <Line
                height={111}
                datasetIdKey="id"
                data={{
                  datasets: pingDataSets,
                }}
                options={{
                  plugins: {
                    tooltip: {
                      callbacks: {
                        title: (items) => {
                          if (!items.length) {
                            return "";
                          }
                          return `Ping at ${items[0].label}s`;
                        },
                      },
                    },
                  },
                  scales: {
                    x: {
                      type: "linear",
                      ticks: {
                        callback: function (value: number) {
                          return `${value}s`;
                        },
                      },
                    },
                  },
                  interaction: {
                    mode: "x",
                    intersect: false,
                  },
                  animation: false,
                }}
              />
            </div>
          }
        />
        <Tab
          id={ChartTabs.APM}
          title="APM"
          panel={
            <div className="chart">
              <Line
                datasetIdKey="id"
                data={{
                  datasets: actionDataSets,
                }}
                options={{
                  plugins: {
                    tooltip: {
                      callbacks: {
                        title: (items) => {
                          if (!items.length) {
                            return "";
                          }
                          return `APM at ${items[0].label}s`;
                        },
                      },
                    },
                  },
                  scales: {
                    x: {
                      type: "linear",
                      ticks: {
                        callback: function (value: number) {
                          return `${value}s`;
                        },
                      },
                    },
                  },
                  interaction: {
                    mode: "x",
                    intersect: false,
                  },
                  animation: false,
                }}
              />
            </div>
          }
        />
      </Tabs>
      <Toaster position={Position.TOP} ref={(v) => (toaster.current = v)} />
      <style jsx>{`
        .chart {
          width: 1000px;
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}
