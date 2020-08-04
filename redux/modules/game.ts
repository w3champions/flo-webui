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
} from "../../types/ws";
import { CreateGameRequestBody } from "../../types/game";
import { ApiClient } from "../../helpers/api-client";
import { AppState } from "../store";
import { GameInfo, SlotStatus } from "../../types/lobby";
import { player } from "../../server/service";

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
}

const gameSlice = createSlice({
  name: "map",
  initialState: {
    createGameLoading: false,
    createGameError: null,
    currentGame: null,
  } as GameState,
  reducers: {
    clearGameCreateError(state) {
      state.createGameError = null;
    },
    updateCurrentGame(state, action: PayloadAction<GameInfo>) {
      state.currentGame = action.payload;
      state.createGameLoading = false;
      state.createGameError = null;
    },
    updateSlot(state, action: PayloadAction<GameSlotUpdateMessage>) {
      const { game_id, slot_index, slot_settings } = action.payload;
      if (state.currentGame && state.currentGame.id === game_id) {
        state.currentGame.slots[slot_index].settings = slot_settings;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGame.pending, (state, action) => {
        state.createGameLoading = true;
        state.createGameError = null;
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

export const {
  clearGameCreateError,
  updateCurrentGame,
  updateSlot,
  updatePlayerEnter,
  updatePlayerLeave,
} = gameSlice.actions;

export default gameSlice.reducer;
