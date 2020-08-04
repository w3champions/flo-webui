import React, { useContext, useState, useEffect } from "react";
import { WsMessage, WsStatus } from "../types/ws";
import {
  AppDispatch,
  selectCurrentGameId,
  selectSetupRequired,
  selectSetupDone,
} from "../redux/store";
import {
  updateStatus,
  updateError,
  dispatchMessage,
  selectWsClientInfo,
  connect,
  setWsDisconnected,
  selectWsError,
  selectWsClientInfoReload,
  selectWsPlayerSessionLoadStatus,
  selectWsStatus,
} from "../redux/modules/ws";
import { useAuth } from "./auth";
import { useDispatch, useSelector } from "react-redux";
import { NonIdealState } from "@blueprintjs/core";
import { Spinner } from "../components/Spinner";
import { useRouter, NextRouter } from "next/router";
import { FLO_DEFAULT_WS_PORT, FLO_WS_PORT_STORAGE_KEY } from "../const";
import { createSelector } from "@reduxjs/toolkit";
import { parentPort } from "worker_threads";

const WsContext = React.createContext(null as WsContextValue);
interface WsContextValue {
  port: number;
  ws: Ws;
  connectWs: (token: string, port?: number) => void;
}

export const WsProvider: React.FunctionComponent = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [ws, setWs] = useState(null as Ws);
  const [port, setPort] = useState(FLO_DEFAULT_WS_PORT);

  const value = React.useMemo(() => {
    return {
      port,
      ws,
      connectWs: (token: string, port?: number) => {
        if (ws) {
          ws.drop();
        }

        if (port) {
          setPort(port);
        }

        const nextWs = new Ws(
          { port: port ? port : FLO_DEFAULT_WS_PORT, token },
          router,
          dispatch
        );
        setWs(nextWs);
      },
    };
  }, [ws, setWs, port]);

  return <WsContext.Provider value={value}>{children}</WsContext.Provider>;
};

export interface ConnectArg {
  port: number;
  token: string;
}

export function withConnected(
  Component: React.FunctionComponent
): React.FunctionComponent {
  return function WithConnected() {
    const setupDone = useSelector(selectSetupDone);

    useWsSetupEffects();

    if (!setupDone) {
      return (
        <NonIdealState>
          <Spinner />
        </NonIdealState>
      );
    }

    return <Component />;
  };
}

export class Ws {
  private socket: WebSocket = null;
  private queue: WsMessage[] = [];
  private connected = false;

  constructor(
    arg: ConnectArg,
    router: NextRouter,
    private dispatch: AppDispatch
  ) {
    dispatch(updateStatus(WsStatus.Connecting));
    const socket = new WebSocket(`ws://127.0.0.1:${arg.port}`);
    this.socket = socket;
    socket.onerror = (e) => {
      if (!this.socket) {
        return;
      }
      console.error("flo: socket.onerror:", e);
      this.drop();
      dispatch(
        updateError({
          message: JSON.stringify(e),
        })
      );
    };

    socket.onopen = () => {
      if (!this.socket) {
        return;
      }

      this.connected = true;
      dispatch(updateStatus(WsStatus.Connected));
      if (this.queue.length) {
        const items = this.queue;
        this.queue = [];
        for (const item of items) {
          socket.send(JSON.stringify(item));
        }
      }
    };

    socket.onmessage = (evt) => {
      if (!this.socket) {
        console.warn("flo: message dropped:", evt);
        return;
      }
      let msg: WsMessage;
      try {
        msg = JSON.parse(evt.data);
      } catch (e) {
        console.error("flo: malformed message data:", evt.data);
      }
      dispatchMessage(router, dispatch, msg);
    };

    socket.onclose = () => {
      if (!this.socket) {
        return;
      }
      dispatch(setWsDisconnected());
    };
  }

  send<T extends WsMessage>(msg: T) {
    if (this.connected) {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(msg));
      }
    } else {
      this.queue.push(msg);
    }
  }

  drop() {
    this.connected = false;
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.dispatch(setWsDisconnected());
    }
  }
}

export function useWs() {
  const { ws } = useContext(WsContext);
  return ws;
}

export function useWsPort() {
  const { port } = useContext(WsContext);
  return port;
}

const selectResumeError = createSelector(
  selectWsError,
  selectWsClientInfoReload,
  selectWsPlayerSessionLoadStatus,
  (wsError, { error: clientInfoError }, { error: sessionError }) => {
    return wsError || clientInfoError || sessionError;
  }
);

const selectDisconnected = createSelector(
  selectWsStatus,
  (status) => status === WsStatus.Disconnected
);

export function useWsSetupEffects() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { authToken, player } = useAuth();
  const clientInfo = useSelector(selectWsClientInfo);
  const currentGameId = useSelector(selectCurrentGameId);
  const { ws, port, connectWs } = useContext(WsContext);
  const setupRequired = useSelector(selectSetupRequired);
  const resumeError = useSelector(selectResumeError);
  const disconnected = useSelector(selectDisconnected);

  // redirect to setup if required
  useEffect(() => {
    if ((resumeError || disconnected) && router.pathname !== "/setup") {
      router.push("/setup");
    }
  }, [setupRequired, resumeError, disconnected]);

  // if signed in, connect websocket
  useEffect(() => {
    if (player && !ws) {
      const override = getPortOverride(router);

      localStorage.setItem(FLO_WS_PORT_STORAGE_KEY, String(override));

      connectWs(authToken, override);
    }
  }, [player, ws]);

  // if websocket connected, ask flo to connect to the server
  useEffect(() => {
    if (player && ws && !clientInfo) {
      dispatch(
        connect({
          ws,
          token: authToken,
        })
      );
    }
  }, [player, ws, clientInfo]);

  // if in-game, redirect to lobby
  useEffect(() => {
    const path = `/lobby`;
    if (!setupRequired && currentGameId && router.pathname !== path) {
      router.replace(path);
    }
  }, [setupRequired, currentGameId, router.pathname]);
}

function parseQueryPort(router: NextRouter): number | null {
  let port = null;
  if (router.query.port) {
    if (Array.isArray(router.query.port)) {
      const ports = router.query.port;
      port = parseInt(ports[ports.length - 1]);
    } else {
      port = parseInt(router.query.port);
    }
  }
  return port || null;
}

function getPortOverride(router: NextRouter): number | null {
  let port = parseQueryPort(router);
  if (!port) {
    const saved = localStorage.getItem(FLO_WS_PORT_STORAGE_KEY);
    if (saved) {
      port = parseInt(saved);
    }
  }
  if (!port) {
    port = FLO_DEFAULT_WS_PORT;
  }
  return port;
}
