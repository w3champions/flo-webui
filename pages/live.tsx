import { AnchorButton, Callout, Classes, H1, H2, Icon, Intent, NonIdealState, Tab, Tabs } from "@blueprintjs/core";

import { IconNames } from "@blueprintjs/icons";
import { FlagIcon } from "../components/FlagIcon";
import { Layout } from "../components/Layout";
import { SubscriptionHandler, useClient, useSubscription } from 'urql'
import { GameListUpdateSubSubscription, GameListUpdateSubDocument, GameSnapshotFieldsFragment } from "../generated/graphql";
import produce from 'immer'
import format from 'date-fns/format'
import { useMemo, useState } from "react";
import { Spinner } from "../components/Spinner";

type Game = GameSnapshotFieldsFragment

interface State {
  games: Game[]
}

const initialState: State = {
  games: []
}

const enum GameMode {
  Mode1v1 = '1 vs 1',
  Mode2v2 = '2 vs 2',
  Mode4v4 = '4 vs 4',
  ModeFFA = 'FFA',
  ModeOtherMelee = 'Other Melee',
  ModeNonMelee = 'Non-melee',
}

function getGameMode(game: Game): GameMode {
  if (game.mapPath.includes('Custom')) {
    return GameMode.ModeNonMelee
  }

  const teams = new Set(game.players.map(p => p.team))

  if (game.players.length === 2 && teams.size === 2) {
    return GameMode.Mode1v1
  }

  if (game.players.length === 4 && teams.size == 2) {
    return GameMode.Mode2v2
  }

  if (game.players.length === 8 && teams.size == 2) {
    return GameMode.Mode4v4
  }

  if (teams.size == game.players.length) {
    return GameMode.ModeFFA
  }

  return GameMode.ModeOtherMelee
}

function update(state: State, message: GameListUpdateSubSubscription) {
  const item = message.gameListUpdateEvents
  switch (item.__typename) {
    case 'GameListUpdateEventItemInitial': {
      state.games = item.snapshots
      return
    }
    case 'GameListUpdateEventItemEvent': {
      switch (item.event.__typename) {
        case 'GameListUpdateEventAdded': {
          state.games.push(item.event.snapshot)
          return
        }
        case 'GameListUpdateEventEnded': {
          const { gameId, endedAt } = item.event;
          const game = state.games.find(g => g.id === gameId)
          if (game) {
            game.endedAt = endedAt
          }
          return
        }
        case 'GameListUpdateEventRemoved': {
          const { gameId } = item.event
          state.games = state.games.filter(g => g.id !== gameId)
          return
        }
      }
    }
  }
}

const handleSubscription: SubscriptionHandler<GameListUpdateSubSubscription, State> = (state = initialState, message) => {
  if (!message) {
    return initialState
  }
  const nextState = produce(state, draft => update(draft, message))
  return nextState;
};

interface GameGroup {
  mode: GameMode
  games: Game[]
}

function groupdGames(games?: Game[]): GameGroup[] {
  if (!games) {
    return []
  }

  const map = new Map<GameMode, Game[]>();
  for (let game of games) {
    const mode = getGameMode(game)
    let list = map.get(mode)
    if (list) {
      list.push(game)
    } else {
      list = [game]
      map.set(mode, list)
    }
  }

  const modes = [
    GameMode.Mode1v1,
    GameMode.Mode2v2,
    GameMode.Mode4v4,
    GameMode.ModeFFA,
    GameMode.ModeOtherMelee,
    GameMode.ModeNonMelee
  ]
  return modes.map(mode => {
    const games = map.get(mode) || []
    return {
      mode,
      games: games.sort((a, b) => {
        if (a.endedAt && !b.endedAt) {
          return 1
        }

        if (!a.endedAt && b.endedAt) {
          return -1
        }

        if (a.id > b.id) {
          return -1
        } else if (a.id < b.id) {
          return 1
        } else {
          return 0
        }
      })
    }
  })
}

function GameTable({ games }: { mode: GameMode, games: Game[] }) {
  return <table className="bp3-html-table bp3-html-table-condensed bp3-html-table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Players</th>
        <th>Map</th>
        <th>Server</th>
        <th>Start time</th>
        <th>End time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {games.map(game => {
        return (<tr key={game.id}>
          <td title={`${game.id}`}>{game.gameName}</td>
          <td>
            <ul>
              {game.players.map(p => {
                return <li key={p.name}>
                  T{p.team} {p.name}
                </li>
              })}
            </ul>
          </td>
          <td title={game.mapPath}>{game.mapName}</td>
          <td>{game.nodeName}</td>
          <td>{format(new Date(game.startedAt), 'yyyy-MM-dd HH:mm')}</td>
          <td>{game.endedAt && format(new Date(game.endedAt), 'yyyy-MM-dd HH:mm')}</td>
          <td>
            <AnchorButton href={`/live/${game.id}`} small>Open</AnchorButton>
          </td>
        </tr>)
      })}
    </tbody>
  </table>
}

export default function Live() {
  const [res] = useSubscription({ query: GameListUpdateSubDocument }, handleSubscription)
  const groups = useMemo(() => {
    return groupdGames(res.data?.games)
  }, [res.data])
  const [activeTab, setActiveTab] = useState(GameMode.Mode1v1);

  return (
    <>
      <main className={`${Classes.DARK}`}>
        {res.fetching && <Spinner />}
        {res.error && <NonIdealState
          description={
            <Callout intent={Intent.DANGER} title="Disconnected">
              {JSON.stringify(res.error)}
            </Callout>
          }
        ></NonIdealState>}
        {groups.length > 0 &&
          <Tabs selectedTabId={activeTab} onChange={(e) => { setActiveTab(e as GameMode) }}>
            {groups.map(g => <Tab key={g.mode} id={g.mode} title={`${g.mode} (${g.games.length})`} panel={<GameTable mode={g.mode} games={g.games} />} />)}
          </Tabs>
        }
      </main>
      <style jsx global>{`
        body { padding: 16px; }
      `}</style>
    </>
  );
}
