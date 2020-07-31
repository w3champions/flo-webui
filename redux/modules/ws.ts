import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { AppDispatch, AppState } from "../store";
import {
  WsStatus,
  ClientInfoMessage,
  WsMessage,
  WsMessageTypeId,
  ErrorMessage,
  PlayerSessionMessage,
  ConnectMessage,
  DisconnectMessage,
  ListMapsMessage,
  GetMapDetailMessage,
} from "../../types/ws";
import React, { useContext } from "react";
import {
  setMapListLoaded,
  setMapDetailLoaded,
  setMapListLoadError,
  setMapLoadDetailLoadError,
} from "./map";
import { Ws } from "../../providers/ws";

export interface WsState {
  status: WsStatus;
  error?: SerializedError;
  clientInfo: ClientInfoMessage;
  clientInfoReloading: boolean;
  clientInfoReloadError: SerializedError;
  playerSession: PlayerSessionMessage;
  playerSessionLoading: boolean;
  playerSessionError: SerializedError;
  port: number;
}

export const reloadClientInfo = createAsyncThunk(
  "ws/reloadClientInfo",
  async (arg: Ws, { dispatch }) => {
    dispatch(wsSlice.actions.updateClientInfoReloading(true));
    return arg.send({
      type: WsMessageTypeId.ReloadClientInfo,
    });
  }
);

export const connect = createAsyncThunk(
  "ws/connect",
  async (
    arg: {
      ws: Ws;
      token: string;
    },
    { dispatch }
  ) => {
    dispatch(wsSlice.actions.updatePlayerSessionLoading(true));
    return arg.ws.send({
      type: WsMessageTypeId.Connect,
      token: arg.token,
    } as ConnectMessage);
  }
);

const wsSlice = createSlice({
  name: "auth",
  initialState: {
    status: WsStatus.Idle,
    clientInfo: null,
    port: 3551,
    clientInfoReloading: false,
  } as WsState,
  reducers: {
    updateStatus(state, action: PayloadAction<WsStatus>) {
      state.status = action.payload;
    },
    updateError(state, action: PayloadAction<SerializedError>) {
      state.error = action.payload;
      if (action.payload) {
        state.status = WsStatus.Disconnected;
      }
    },
    updatePort(state, action: PayloadAction<number>) {
      state.port = action.payload;
    },
    updateClientInfo(state, action: PayloadAction<ClientInfoMessage>) {
      state.clientInfo = action.payload;
    },
    updateReloadClientInfoError(state, action: PayloadAction<ErrorMessage>) {
      state.clientInfoReloading = false;
      state.clientInfoReloadError = action.payload;
    },
    updateClientInfoReloading(state, action: PayloadAction<boolean>) {
      state.clientInfoReloading = action.payload;
    },
    updatePlayerSession(state, action: PayloadAction<PlayerSessionMessage>) {
      state.playerSessionLoading = false;
      state.playerSession = action.payload;
    },
    updatePlayerSessionLoading(state, action: PayloadAction<boolean>) {
      state.playerSessionLoading = action.payload;
      state.playerSessionError = null;
    },
    updatePlayerSessionError(state, action: PayloadAction<SerializedError>) {
      state.playerSessionLoading = false;
      state.playerSession = null;
      state.playerSessionError = action.payload;
    },
    setWsDisconnected(state) {
      state.status = WsStatus.Disconnected;
      if (state.clientInfoReloading) {
        state.clientInfoReloading = false;
      }
      state.clientInfo = null;
      if (state.playerSessionLoading) {
        state.playerSessionLoading = false;
      }
      state.playerSession = null;
    },
  },
  extraReducers: (builder) => {},
});

export function dispatchMessage(dispatch: AppDispatch, msg: WsMessage) {
  switch (msg.type) {
    case WsMessageTypeId.ClientInfo: {
      return dispatch(
        wsSlice.actions.updateClientInfo(msg as ClientInfoMessage)
      );
    }
    case WsMessageTypeId.ReloadClientInfoError: {
      return dispatch(
        wsSlice.actions.updateReloadClientInfoError(msg as ErrorMessage)
      );
    }
    case WsMessageTypeId.PlayerSession: {
      return dispatch(
        wsSlice.actions.updatePlayerSession(msg as PlayerSessionMessage)
      );
    }
    case WsMessageTypeId.ConnectRejected: {
      return dispatch(
        wsSlice.actions.updatePlayerSessionError({
          message: (msg as ErrorMessage).message,
        })
      );
    }
    case WsMessageTypeId.Disconnect: {
      return dispatch(
        wsSlice.actions.updatePlayerSessionError({
          message: (msg as DisconnectMessage).reason,
        })
      );
    }
    case WsMessageTypeId.ListMaps: {
      return dispatch(setMapListLoaded((msg as ListMapsMessage).data));
    }
    case WsMessageTypeId.ListMapsError: {
      return dispatch(setMapListLoadError(msg as SerializedError));
    }
    case WsMessageTypeId.GetMapDetail: {
      return dispatch(setMapDetailLoaded(msg as GetMapDetailMessage));
    }
    case WsMessageTypeId.GetMapDetailError: {
      return dispatch(setMapLoadDetailLoadError(msg as SerializedError));
    }
  }
}

export const {
  updateStatus,
  updateError,
  updateClientInfo,
  updatePort,
  setWsDisconnected,
} = wsSlice.actions;

export const selectWsReady = (state: AppState) =>
  state.ws.status === WsStatus.Connected &&
  state.ws.clientInfo &&
  state.ws.clientInfo.war3_info.located;
export const selectWs = (state: AppState) => state.ws;
export const selectWsStatus = createSelector(selectWs, (s) => s.status);
export const selectWsError = createSelector(selectWs, (s) => s.error);
export const selectWsPort = createSelector(selectWs, (s) => s.port);
export const selectWsClientInfo = createSelector(selectWs, (s) => s.clientInfo);
export const selectWsClientInfoReload = createSelector(selectWs, (s) => ({
  reloading: s.clientInfoReloading,
  error: s.clientInfoReloadError,
}));
export const selectWsPlayerSession = createSelector(
  selectWs,
  (s) => s.playerSession
);
export const selectWsPlayerSessionLoadStatus = createSelector(
  selectWs,
  (s) => ({
    loading: s.playerSessionLoading,
    error: s.playerSessionError,
  })
);

export default wsSlice.reducer;
