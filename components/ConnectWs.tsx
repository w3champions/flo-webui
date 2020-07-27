import { Spinner } from "./Spinner";
import { useState } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { useApiClient } from "../helpers/api-client";
import { Alert } from "./Alert";
import { Button, Callout, Intent } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWsStatus,
  selectWsError,
  selectWsPort,
  selectWsClientInfo,
  selectWsClientInfoReload,
  reloadClientInfo,
  useFloWs,
} from "../redux/modules/ws";
import { WsStatus, War3InfoError } from "../types/ws";

export default function ConnectWs() {
  const dispatch = useDispatch();
  const status = useSelector(selectWsStatus);
  const error = useSelector(selectWsError);
  const port = useSelector(selectWsPort);
  const clientInfo = useSelector(selectWsClientInfo);
  const { reloading, error: reloadError } = useSelector(
    selectWsClientInfoReload
  );
  const ws = useFloWs();

  const gameLocated =
    clientInfo && clientInfo.war3_info.located ? (
      <p>
        Warcraft III located, version{" "}
        <span className="text-blue-600 font-semibold">
          {clientInfo.war3_info.version}
        </span>
        .
      </p>
    ) : null;

  const detectGamePath = clientInfo && !clientInfo.war3_info.located && (
    <p>
      <span className="flo-text-warn">
        {formatClientErrorMessage(clientInfo.war3_info.error)}
      </span>
      {ws && clientInfo.war3_info.error === War3InfoError.InstallationPath && (
        <>
          <br />
          <span className="flo-text-warn">Please start the game then</span>
          <br />
          {reloading ? (
            <Spinner />
          ) : (
            <Button
              intent={Intent.WARNING}
              onClick={() => dispatch(reloadClientInfo(ws))}
            >
              Detect Game Path
            </Button>
          )}
        </>
      )}
    </p>
  );

  return (
    <div className="leading-normal">
      {error && (
        <Callout intent={Intent.DANGER}>
          Connection failed. Please ensure Flo is running on port {port}.
        </Callout>
      )}
      {reloadError && (
        <Callout intent={Intent.DANGER}>
          Detect game path failed: {reloadError.message}.
        </Callout>
      )}
      {status === WsStatus.Connecting && <Spinner />}
      {clientInfo && status === WsStatus.Connected && (
        <>
          <p>
            Connected.
            <br />
            Flo running on port{" "}
            <span className="text-blue-600 font-semibold">{port}</span>, version{" "}
            <span className="text-blue-600 font-semibold">
              {clientInfo.version}
            </span>
            .
          </p>
          {gameLocated}
          {detectGamePath}
        </>
      )}
    </div>
  );
}

function formatClientErrorMessage(error: War3InfoError) {
  switch (error) {
    case War3InfoError.UserDataPath:
      return "Could not locate Warcraft III user data path.";
    case War3InfoError.InstallationPath:
      return "Could not locate Warcraft III installation path.";
    default:
      return "Internal error, please check the logs.";
  }
}
