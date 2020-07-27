import { FunctionComponent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPlayerInfo, AppDispatch, selectSetupDone } from "../redux/store";
import { FLO_ACCESS_TOKEN_STORAGE_KEY } from "../const";
import { useApiClient } from "../helpers/api-client";
import { fetchPlayerInfo } from "../redux/modules/auth";
import {
  WsProvider,
  Ws,
  updatePort,
  selectWsClientInfo,
  selectWsPlayerSession,
  connect,
} from "../redux/modules/ws";
import { WsMessageTypeId } from "../types/ws";
import Setup from "./Setup";

export interface Props {
  port?: number;
}

export const Connected: FunctionComponent<Props> = ({ port, children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const client = useApiClient();
  const [token, setToken] = useState<string>(null);
  const [wsSocket, setWsSocket] = useState<Ws>(null);
  const playerInfo = useSelector(selectPlayerInfo);
  const clientInfo = useSelector(selectWsClientInfo);
  const playerSession = useSelector(selectWsPlayerSession);
  const setupDone = useSelector(selectSetupDone);

  useEffect(function initEnv() {
    const accessToken = localStorage.getItem(FLO_ACCESS_TOKEN_STORAGE_KEY);
    if (accessToken) {
      setToken(accessToken);
      dispatch(
        fetchPlayerInfo({
          client,
          accessToken,
        })
      );
    }
  }, []);

  useEffect(
    function initWs() {
      if (wsSocket) {
        wsSocket.drop();
        setWsSocket(null);
      }
      // player logged out
      if (!playerInfo) {
        return;
      }

      port = port || 3551;
      const ws = new Ws(
        {
          port,
          token,
        },
        dispatch
      );

      setWsSocket(ws);
      dispatch(updatePort(port));

      return () => {
        ws.drop();
      };
    },
    [playerInfo]
  );

  useEffect(
    function initNetwork() {
      if (!wsSocket) {
        return;
      }

      if (playerInfo && clientInfo) {
        if (!playerSession || playerInfo.id !== playerSession.player.id) {
          dispatch(
            connect({
              ws: wsSocket,
              token,
            })
          );
        }
      }
    },
    [playerInfo, clientInfo, playerSession, wsSocket]
  );

  const content = setupDone ? children : <Setup />;

  return <WsProvider value={wsSocket}>{content}</WsProvider>;
};
