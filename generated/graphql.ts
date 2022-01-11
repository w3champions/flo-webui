import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: any;
};

export type Action = {
  __typename?: 'Action';
  apm: Scalars['Float'];
  playerId: Scalars['Int'];
  total: Scalars['Int'];
};

export type ActionStats = {
  __typename?: 'ActionStats';
  data: Array<Action>;
  time: Scalars['Int'];
};

export type GameListUpdateEvent = GameListUpdateEventAdded | GameListUpdateEventEnded | GameListUpdateEventRemoved;

export type GameListUpdateEventAdded = {
  __typename?: 'GameListUpdateEventAdded';
  snapshot: GameSnapshot;
};

export type GameListUpdateEventEnded = {
  __typename?: 'GameListUpdateEventEnded';
  endedAt: Scalars['DateTime'];
  gameId: Scalars['Int'];
};

export type GameListUpdateEventItem = GameListUpdateEventItemEvent | GameListUpdateEventItemInitial;

export type GameListUpdateEventItemEvent = {
  __typename?: 'GameListUpdateEventItemEvent';
  event: GameListUpdateEvent;
};

export type GameListUpdateEventItemInitial = {
  __typename?: 'GameListUpdateEventItemInitial';
  snapshots: Array<GameSnapshot>;
};

export type GameListUpdateEventRemoved = {
  __typename?: 'GameListUpdateEventRemoved';
  gameId: Scalars['Int'];
};

export type GameSnapshot = {
  __typename?: 'GameSnapshot';
  endedAt?: Maybe<Scalars['DateTime']>;
  gameName: Scalars['String'];
  id: Scalars['Int'];
  mapName: Scalars['String'];
  mapPath: Scalars['String'];
  nodeId: Scalars['Int'];
  nodeName: Scalars['String'];
  players: Array<Player>;
  startedAt: Scalars['DateTime'];
};

export type GameSnapshotWithStats = {
  __typename?: 'GameSnapshotWithStats';
  game: GameSnapshot;
  stats: GameStatsSnapshot;
};

export type GameStatsSnapshot = {
  __typename?: 'GameStatsSnapshot';
  action: Array<ActionStats>;
  ping: Array<PingStats>;
};

export type GameUpdateEvent = {
  __typename?: 'GameUpdateEvent';
  data: GameUpdateEventData;
  gameId: Scalars['Int'];
};

export type GameUpdateEventData = ActionStats | GameUpdateEventDataEnded | GameUpdateEventDataPlayerLeft | GameUpdateEventDataRemoved | PingStats;

export type GameUpdateEventDataEnded = {
  __typename?: 'GameUpdateEventDataEnded';
  durationMillis: Scalars['Int'];
  endedAt: Scalars['DateTime'];
};

export type GameUpdateEventDataPlayerLeft = {
  __typename?: 'GameUpdateEventDataPlayerLeft';
  playerId: Scalars['Int'];
  reason: PlayerLeaveReason;
  time: Scalars['Int'];
};

export type GameUpdateEventDataRemoved = {
  __typename?: 'GameUpdateEventDataRemoved';
  snapshot: GameSnapshot;
};

export type GameUpdateEventItem = GameSnapshotWithStats | GameUpdateEvent;

export type MutationRoot = {
  __typename?: 'MutationRoot';
  noop: Scalars['Boolean'];
};

export type Ping = {
  __typename?: 'Ping';
  avg: Scalars['Float'];
  max: Scalars['Int'];
  min: Scalars['Int'];
  playerId: Scalars['Int'];
  ticks: Scalars['Int'];
};

export type PingStats = {
  __typename?: 'PingStats';
  data: Array<Ping>;
  time: Scalars['Int'];
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['Int'];
  leaveReason?: Maybe<PlayerLeaveReason>;
  leftAt?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  race: Race;
  team: Scalars['Int'];
};

export enum PlayerLeaveReason {
  LeaveDisconnect = 'LEAVE_DISCONNECT',
  LeaveDraw = 'LEAVE_DRAW',
  LeaveLost = 'LEAVE_LOST',
  LeaveLostBuildings = 'LEAVE_LOST_BUILDINGS',
  LeaveObserver = 'LEAVE_OBSERVER',
  LeaveUnknown = 'LEAVE_UNKNOWN',
  LeaveWon = 'LEAVE_WON'
}

export type QueryRoot = {
  __typename?: 'QueryRoot';
  games: Array<GameSnapshot>;
};

export enum Race {
  Human = 'HUMAN',
  NightElf = 'NIGHT_ELF',
  Orc = 'ORC',
  Random = 'RANDOM',
  Undead = 'UNDEAD'
}

export type SubscriptionRoot = {
  __typename?: 'SubscriptionRoot';
  gameListUpdateEvents: GameListUpdateEventItem;
  gameUpdateEvents: GameUpdateEventItem;
};


export type SubscriptionRootGameUpdateEventsArgs = {
  id: Scalars['Int'];
};

export type GameListUpdateSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GameListUpdateSubSubscription = { __typename?: 'SubscriptionRoot', gameListUpdateEvents: { __typename: 'GameListUpdateEventItemEvent', event: { __typename: 'GameListUpdateEventAdded', snapshot: { __typename?: 'GameSnapshot', id: number, gameName: string, mapName: string, mapPath: string, nodeId: number, nodeName: string, startedAt: any, endedAt?: any | null | undefined, players: Array<{ __typename?: 'Player', id: number, name: string, race: Race, team: number, leftAt?: number | null | undefined, leaveReason?: PlayerLeaveReason | null | undefined }> } } | { __typename: 'GameListUpdateEventEnded', gameId: number, endedAt: any } | { __typename: 'GameListUpdateEventRemoved', gameId: number } } | { __typename: 'GameListUpdateEventItemInitial', snapshots: Array<{ __typename?: 'GameSnapshot', id: number, gameName: string, mapName: string, mapPath: string, nodeId: number, nodeName: string, startedAt: any, endedAt?: any | null | undefined, players: Array<{ __typename?: 'Player', id: number, name: string, race: Race, team: number, leftAt?: number | null | undefined, leaveReason?: PlayerLeaveReason | null | undefined }> }> } };

export type GameUpdateSubSubscriptionVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GameUpdateSubSubscription = { __typename?: 'SubscriptionRoot', gameUpdateEvents: { __typename: 'GameSnapshotWithStats', game: { __typename?: 'GameSnapshot', id: number, gameName: string, mapName: string, mapPath: string, nodeId: number, nodeName: string, startedAt: any, endedAt?: any | null | undefined, players: Array<{ __typename?: 'Player', id: number, name: string, race: Race, team: number, leftAt?: number | null | undefined, leaveReason?: PlayerLeaveReason | null | undefined }> }, stats: { __typename?: 'GameStatsSnapshot', ping: Array<{ __typename?: 'PingStats', time: number, data: Array<{ __typename?: 'Ping', playerId: number, min: number, max: number, avg: number, ticks: number }> }>, action: Array<{ __typename?: 'ActionStats', time: number, data: Array<{ __typename?: 'Action', playerId: number, apm: number, total: number }> }> } } | { __typename: 'GameUpdateEvent', gameId: number, data: { __typename: 'ActionStats', time: number, data: Array<{ __typename?: 'Action', playerId: number, apm: number, total: number }> } | { __typename: 'GameUpdateEventDataEnded', endedAt: any, durationMillis: number } | { __typename: 'GameUpdateEventDataPlayerLeft', time: number, playerId: number, reason: PlayerLeaveReason } | { __typename: 'GameUpdateEventDataRemoved', snapshot: { __typename?: 'GameSnapshot', id: number } } | { __typename: 'PingStats', time: number, data: Array<{ __typename?: 'Ping', playerId: number, min: number, max: number, avg: number, ticks: number }> } } };

export type GameSnapshotFieldsFragment = { __typename?: 'GameSnapshot', id: number, gameName: string, mapName: string, mapPath: string, nodeId: number, nodeName: string, startedAt: any, endedAt?: any | null | undefined, players: Array<{ __typename?: 'Player', id: number, name: string, race: Race, team: number, leftAt?: number | null | undefined, leaveReason?: PlayerLeaveReason | null | undefined }> };

export type PlayerFieldsFragment = { __typename?: 'Player', id: number, name: string, race: Race, team: number, leftAt?: number | null | undefined, leaveReason?: PlayerLeaveReason | null | undefined };

export type GameStatsSnapshotFieldsFragment = { __typename?: 'GameStatsSnapshot', ping: Array<{ __typename?: 'PingStats', time: number, data: Array<{ __typename?: 'Ping', playerId: number, min: number, max: number, avg: number, ticks: number }> }>, action: Array<{ __typename?: 'ActionStats', time: number, data: Array<{ __typename?: 'Action', playerId: number, apm: number, total: number }> }> };

export type PingFieldsFragment = { __typename?: 'Ping', playerId: number, min: number, max: number, avg: number, ticks: number };

export type ActionFieldsFragment = { __typename?: 'Action', playerId: number, apm: number, total: number };

export const PlayerFieldsFragmentDoc = gql`
    fragment PlayerFields on Player {
  id
  name
  race
  team
  leftAt
  leaveReason
}
    `;
export const GameSnapshotFieldsFragmentDoc = gql`
    fragment GameSnapshotFields on GameSnapshot {
  id
  gameName
  mapName
  mapPath
  nodeId
  nodeName
  startedAt
  endedAt
  players {
    ...PlayerFields
  }
}
    ${PlayerFieldsFragmentDoc}`;
export const PingFieldsFragmentDoc = gql`
    fragment PingFields on Ping {
  playerId
  min
  max
  avg
  ticks
}
    `;
export const ActionFieldsFragmentDoc = gql`
    fragment ActionFields on Action {
  playerId
  apm
  total
}
    `;
export const GameStatsSnapshotFieldsFragmentDoc = gql`
    fragment GameStatsSnapshotFields on GameStatsSnapshot {
  ping {
    time
    data {
      ...PingFields
    }
  }
  action {
    time
    data {
      ...ActionFields
    }
  }
}
    ${PingFieldsFragmentDoc}
${ActionFieldsFragmentDoc}`;
export const GameListUpdateSubDocument = gql`
    subscription GameListUpdateSub {
  gameListUpdateEvents {
    __typename
    ... on GameListUpdateEventItemInitial {
      snapshots {
        ...GameSnapshotFields
      }
    }
    ... on GameListUpdateEventItemEvent {
      event {
        __typename
        ... on GameListUpdateEventAdded {
          snapshot {
            ...GameSnapshotFields
          }
        }
        ... on GameListUpdateEventEnded {
          gameId
          endedAt
        }
        ... on GameListUpdateEventRemoved {
          gameId
        }
      }
    }
  }
}
    ${GameSnapshotFieldsFragmentDoc}`;

export function useGameListUpdateSubSubscription<TData = GameListUpdateSubSubscription>(options: Omit<Urql.UseSubscriptionArgs<GameListUpdateSubSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<GameListUpdateSubSubscription, TData>) {
  return Urql.useSubscription<GameListUpdateSubSubscription, TData, GameListUpdateSubSubscriptionVariables>({ query: GameListUpdateSubDocument, ...options }, handler);
};
export const GameUpdateSubDocument = gql`
    subscription GameUpdateSub($id: Int!) {
  gameUpdateEvents(id: $id) {
    __typename
    ... on GameSnapshotWithStats {
      game {
        ...GameSnapshotFields
      }
      stats {
        ...GameStatsSnapshotFields
      }
    }
    ... on GameUpdateEvent {
      gameId
      data {
        __typename
        ... on GameUpdateEventDataEnded {
          endedAt
          durationMillis
        }
        ... on GameUpdateEventDataRemoved {
          snapshot {
            id
          }
        }
        ... on PingStats {
          time
          data {
            ...PingFields
          }
        }
        ... on ActionStats {
          time
          data {
            ...ActionFields
          }
        }
        ... on GameUpdateEventDataPlayerLeft {
          time
          playerId
          reason
        }
      }
    }
  }
}
    ${GameSnapshotFieldsFragmentDoc}
${GameStatsSnapshotFieldsFragmentDoc}
${PingFieldsFragmentDoc}
${ActionFieldsFragmentDoc}`;

export function useGameUpdateSubSubscription<TData = GameUpdateSubSubscription>(options: Omit<Urql.UseSubscriptionArgs<GameUpdateSubSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<GameUpdateSubSubscription, TData>) {
  return Urql.useSubscription<GameUpdateSubSubscription, TData, GameUpdateSubSubscriptionVariables>({ query: GameUpdateSubDocument, ...options }, handler);
};