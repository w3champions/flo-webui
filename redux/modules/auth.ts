import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ApiClient } from "../../helpers/api-client";
import { PlayerRef } from "../../types/player";
import { FLO_ACCESS_TOKEN_STORAGE_KEY } from "../../const";

export interface AuthState {
  authToken: string;
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
  async (arg: FetchPlayerInfoArg, { dispatch }) => {
    return arg.client
      .post("/api/get-player-info-by-token", {
        token: arg.accessToken,
      })
      .then((res) => {
        dispatch(setAuthToken(arg.accessToken));
        return res.data;
      });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: null,
    playerInfoLoading: false,
    playerInfoError: null,
    playerInfo: null,
  } as AuthState,
  reducers: {
    setPlayerInfo(state, action) {
      const { payload } = action;
      state.playerInfo = payload;
    },
    signOut(state) {
      state.playerInfo = null;
      state.authToken = null;
      localStorage.removeItem(FLO_ACCESS_TOKEN_STORAGE_KEY);
    },
    setAuthToken(state, { payload }: PayloadAction<string>) {
      state.authToken = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerInfo.pending, (state, action) => {
        state.playerInfoLoading = true;
        state.playerInfoError = undefined;
      })
      .addCase(fetchPlayerInfo.rejected, (state, action) => {
        state.playerInfoLoading = false;
        state.playerInfoError = action.error;
        state.authToken = null;
        localStorage.removeItem(FLO_ACCESS_TOKEN_STORAGE_KEY);
      })
      .addCase(fetchPlayerInfo.fulfilled, (state, action) => {
        state.playerInfoLoading = false;
        state.playerInfo = action.payload;
      });
  },
});

export const { setPlayerInfo, signOut, setAuthToken } = authSlice.actions;

export default authSlice.reducer;
