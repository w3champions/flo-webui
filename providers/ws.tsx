import React, { useContext, useState, useEffect } from "react";
import { WsMessage, WsStatus } from "../types/ws";
import { AppDispatch, selectCurrentGameId } from "../redux/store";
import {
  updateStatus,
  updateError,
  dispatchMessage,
  selectWsError,
  selectWsClientInfo,
  connect,
  selectWsStatus,
  setWsDisconnected,
} from "../redux/modules/ws";
import { useAuth } from "./auth";
import { useDispatch, useSelector } from "react-redux";
import { NonIdealState } from "@blueprintjs/core";
import { Spinner } from "../components/Spinner";
import { useRouter } from "next/router";

const WsContext = React.createContext(null as Ws);

export const WsProvider: React.FunctionComponent = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { authToken, player } = useAuth();
  const clientInfo = useSelector(selectWsClientInfo);
  const currentGameId = useSelector(selectCurrentGameId);
  const [ws, setWs] = useState(null as Ws);
  const status = useSelector(selectWsStatus);

  useEffect(() => {
    if (player) {
      if (ws) {
        ws.drop();
      }

      const nextWs = new Ws({ port: 3551, token: authToken }, dispatch);
      setWs(nextWs);
    }
  }, [player]);

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

  // if disconnected redirect to setup
  useEffect(() => {
    if (status === WsStatus.Disconnected) {
      router.push("/setup");
    }
  }, [status]);

  // if in-game, redirect to lobby
  useEffect(() => {
    const path = `/lobby`;
    if (currentGameId && router.pathname !== path) {
      router.replace(path);
    }
  }, [currentGameId, router.pathname]);

  return <WsContext.Provider value={ws}>{children}</WsContext.Provider>;
};

export interface ConnectArg {
  port: number;
  token: string;
}

export function withConnected(
  Component: React.FunctionComponent
): React.FunctionComponent {
  return function WithConnected() {
    const router = useRouter();
    const ws = useWs();
    const error = useSelector(selectWsError);

    useEffect(() => {
      if (error) {
        router.replace("/setup");
      }
    }, [error]);

    if (!ws) {
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

  constructor(arg: ConnectArg, dispatch: AppDispatch) {
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
      dispatchMessage(dispatch, msg);
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
    }
  }
}

export function useWs() {
  return useContext(WsContext);
}
