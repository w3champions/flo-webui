import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import { ApiClient } from "../../helpers/api-client";
import { PlayerRef } from "../../types/player";
import { FLO_ACCESS_TOKEN_STORAGE_KEY } from "../../const";

export interface AuthState {
  playerInfoLoading: boolean;
  playerInfoError?: SerializedError;
  playerInfo?: PlayerRef;
}

interface FetchPlayerInfoArg {
  client: ApiClient;
  accessToken: string;
}

export const fetchPlayerInfo = createAsyncThunk(
  "auth/fetchPlayerInfo",
  async (arg: FetchPlayerInfoArg, thunkAPI) => {
    return arg.client
      .post("/api/get-player-info-by-token", {
        token: arg.accessToken,
      })
      .then((res) => res.data);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    playerInfoLoading: false,
  } as AuthState,
  reducers: {
    setPlayerInfo(state, action) {
      const { payload } = action;
      state.playerInfo = payload;
    },
    signOut(state) {
      state.playerInfo = null;
      localStorage.removeItem(FLO_ACCESS_TOKEN_STORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerInfo.pending, (state, action) => {
        state.playerInfoLoading = true;
        state.playerInfoError = undefined;
      })
      .addCase(fetchPlayerInfo.rejected, (state, action) => {
        console.log(action.error);
        state.playerInfoLoading = false;
        state.playerInfoError = action.error;
      })
      .addCase(fetchPlayerInfo.fulfilled, (state, action) => {
        state.playerInfoLoading = false;
        state.playerInfo = action.payload;
      });
  },
});

export const { setPlayerInfo, signOut } = authSlice.actions;

export default authSlice.reducer;
