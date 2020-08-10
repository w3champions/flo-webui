import {
  createSlice,
  SerializedError,
  createSelector,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  GetMapDetailMessage,
  WsMessageTypeId,
  GameSlotUpdateMessage,
  GamePlayerEnterMessage,
  GamePlayerLeaveMessage,
  GamePlayerPingMapSnapshotMessage,
  GamePlayerPingMapSnapshotRequestMessage,
  GameSelectNodeMessage,
} from "../../types/ws";
import { CreateGameRequestBody } from "../../types/game";
import { ApiClient } from "../../helpers/api-client";
import { AppState } from "../store";
import { GameInfo, SlotStatus } from "../../types/lobby";
import { GamePlayerPingSnapshot } from "../../types/node";
import { Ws } from "../../providers/ws";
import { PlayerRef } from "../../types/player";
import { selectNodes } from "./node";

interface CreateGameArg {
  client: ApiClient;
  detail: GetMapDetailMessage;
  checksum?: number;
}

export const createGame = createAsyncThunk(
  "game/createGame",
  async (arg: CreateGameArg) => {
    return arg.client
      .post("/api/create-game", getCreateGamePayload(arg.detail, arg.checksum))
      .then((res) => res.data);
  }
);

export interface GameState {
  createGameLoading: boolean;
  createGameError: SerializedError;
  currentGame: GameInfo;
  currentNodeId: number | null;
  currentNodeLoading: boolean;
  pingSnapshotLoading: boolean;
  pingSnapshot: GamePlayerPingSnapshot;
}

const gameSlice = createSlice({
  name: "map",
  initialState: {
    createGameLoading: false,
    createGameError: null,
    currentGame: null,
    currentNodeId: null,
    currentNodeLoading: false,
    pingSnapshotLoading: false,
    pingSnapshot: null,
  } as GameState,
  reducers: {
    clearGameCreateError(state) {
      state.createGameError = null;
    },
    updateCurrentGame(state, action: PayloadAction<GameInfo>) {
      state.currentGame = action.payload;
      state.currentNodeId =
        action.payload && action.payload.node ? action.payload.node.id : null;
      state.createGameLoading = false;
      state.currentNodeLoading = false;
      state.createGameError = null;
    },
    updateSlot(state, action: PayloadAction<GameSlotUpdateMessage>) {
      const { game_id, slot_index, slot_settings } = action.payload;
      if (state.currentGame && state.currentGame.id === game_id) {
        state.currentGame.slots[slot_index].settings = slot_settings;
      }
    },
    startUpdateNode(state) {
      state.currentNodeId = null;
      state.currentNodeLoading = true;
    },
    updateNode(
      state,
      { payload: { game_id, node_id } }: PayloadAction<GameSelectNodeMessage>
    ) {
      if (state.currentGame && state.currentGame.id === game_id) {
        state.currentNodeId = node_id;
        state.currentNodeLoading = false;
      }
    },
    updatePlayerEnter(
      state,
      { payload }: PayloadAction<GamePlayerEnterMessage>
    ) {
      if (state.currentGame && state.currentGame.id === payload.game_id) {
        state.currentGame.slots[payload.slot_index] = payload.slot;
      }
    },
    updatePlayerLeave(
      state,
      { payload }: PayloadAction<GamePlayerLeaveMessage>
    ) {
      if (state.currentGame && state.currentGame.id === payload.game_id) {
        const slot = state.currentGame.slots.find(
          (s) => s.player && s.player.id === payload.player_id
        );
        if (slot) {
          slot.player = null;
          slot.settings.status = SlotStatus.Open;
        } else {
          console.error(
            `player slot not found: game = ${payload.game_id}, player = ${payload.player_id}`
          );
        }
      }
    },
    startLoadPingSnapshot(state) {
      state.pingSnapshotLoading = true;
      state.pingSnapshot = null;
    },
    setPingSnapshot(
      state,
      { payload }: PayloadAction<GamePlayerPingMapSnapshotMessage>
    ) {
      state.pingSnapshotLoading = false;
      state.pingSnapshot = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGame.pending, (state, action) => {
        state.createGameLoading = true;
        state.createGameError = null;
        state.currentNodeId = null;
      })
      .addCase(createGame.rejected, (state, action) => {
        state.createGameLoading = false;
        state.createGameError = action.error;
      });
    // should redirect
    // .addCase(createGame.fulfilled, (state, action) => {
    //   state.createGameLoading = false;
    // });
  },
});

export const loadPingSnapshot = createAsyncThunk(
  "game/loadPingSnapshot",
  async ({ ws, game_id }: { ws: Ws; game_id: number }, { dispatch }) => {
    ws.send({
      type: WsMessageTypeId.GamePlayerPingMapSnapshotRequest,
      game_id,
    } as GamePlayerPingMapSnapshotRequestMessage);
    dispatch(gameSlice.actions.startLoadPingSnapshot());
  }
);

export function getCreateGamePayload(
  detail: GetMapDetailMessage,
  checksum?: number
): CreateGameRequestBody {
  const {
    sha1,
    name,
    description,
    author,
    path,
    width,
    height,
    players,
    forces,
  } = detail;
  return {
    name: detail.name,
    map: {
      sha1,
      name,
      description,
      author,
      path,
      width,
      height,
      players,
      forces,
      checksum,
    },
    is_private: true,
    is_live: true,
  };
}

export const selectGameState = (state: AppState) => state.game;

export const selectGameCreating = createSelector(
  selectGameState,
  (s) => s.createGameLoading
);

export const selectGameCreateError = createSelector(
  selectGameState,
  (s) => s.createGameError
);

export const selectCurrentGame = createSelector(
  selectGameState,
  (s) => s.currentGame
);

export const selectCurrentGamePlayers = createSelector(
  selectCurrentGame,
  (s) => {
    const players = [] as PlayerRef[];
    if (!s) {
      return players;
    }
    for (let slot of s.slots) {
      if (slot.player) {
        players.push(slot.player);
      }
    }
    return players;
  }
);

export const selectGamePingSnapshotLoading = createSelector(
  selectGameState,
  (state) => state.pingSnapshotLoading
);

export const selectGamePingSnapshot = createSelector(
  selectGameState,
  (state) => state.pingSnapshot
);

export const selectCurrentNodeId = createSelector(
  selectGameState,
  (state) => state.currentNodeId
);

export const selectCurrentNodeLoading = createSelector(
  selectGameState,
  (state) => state.currentNodeLoading
);

export const selectCurrentNode = createSelector(
  selectCurrentNodeId,
  selectNodes,
  (id, nodes) => {
    if (!id || !nodes.length) {
      return null;
    }
    return nodes.find((node) => node.id === id);
  }
);

export const {
  clearGameCreateError,
  updateCurrentGame,
  updateSlot,
  updatePlayerEnter,
  updatePlayerLeave,
  setPingSnapshot,
  startUpdateNode,
  updateNode,
} = gameSlice.actions;

export default gameSlice.reducer;
