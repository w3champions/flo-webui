import {
  createSlice,
  SerializedError,
  PayloadAction,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { GetMapDetailMessage, WsMessageTypeId } from "../../types/ws";
import { CreateGame } from "../../types/game";
import { ApiClient } from "../../helpers/api-client";
import { AppState } from "../store";

interface CreateGameArg {
  client: ApiClient;
  detail: GetMapDetailMessage;
  checksum?: number;
}

export const createGame = createAsyncThunk(
  "game/createGame",
  async (arg: CreateGameArg, thunkAPI) => {
    return arg.client
      .post("/api/create-game", getCreateGamePayload(arg.detail, arg.checksum))
      .then((res) => res.data);
  }
);

export interface GameState {
  createGameLoading: boolean;
  createGameError: SerializedError;
}

const gameSlice = createSlice({
  name: "map",
  initialState: {
    createGameLoading: false,
    createGameError: null,
  } as GameState,
  reducers: {
    clearGameCreateError(state) {
      state.createGameError = null;
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
      })
      .addCase(createGame.fulfilled, (state, action) => {
        state.createGameLoading = false;
      });
  },
});

export function getCreateGamePayload(
  detail: GetMapDetailMessage,
  checksum?: number
): CreateGame {
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

export const { clearGameCreateError } = gameSlice.actions;

export default gameSlice.reducer;
