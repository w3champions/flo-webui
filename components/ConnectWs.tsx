import { Spinner } from "./Spinner";
import { useState } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { useApiClient } from "../helpers/api-client";
import { Alert } from "./Alert";
import {
  Button,
  Callout,
  Classes,
  Dialog,
  Icon,
  Intent,
} from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWsStatus,
  selectWsError,
  selectWsClientInfo,
  selectWsClientInfoReload,
  reloadClientInfo,
} from "../redux/modules/ws";
import { WsStatus, War3InfoError } from "../types/ws";
import { useWs, useWsPort } from "../providers/ws";
import { FLO_DEFAULT_WS_PORT, FLO_MIN_CLIENT_VERSION } from "../const";
import { useRouter } from "next/router";
import { IconNames } from "@blueprintjs/icons";

export default function ConnectWs() {
  const dispatch = useDispatch();
  const router = useRouter();
  const status = useSelector(selectWsStatus);
  const error = useSelector(selectWsError);
  const clientInfo = useSelector(selectWsClientInfo);
  const { reloading, error: reloadError } = useSelector(
    selectWsClientInfoReload
  );
  const ws = useWs();
  const port = useWsPort();

  const gameLocated =
    clientInfo && clientInfo.war3_info.located ? (
      <p>
        Warcraft III located, version{" "}
        <span className="flo-text-info font-semibold">
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
    <div className="leading-normal space-y-4">
      {port !== FLO_DEFAULT_WS_PORT && (
        <Callout intent={Intent.WARNING} title="Custom port specified">
          Custom local port set to {port} .
          <br />
          <br />
          <Button
            small
            onClick={() => {
              window.location.href = `/setup?port=${FLO_DEFAULT_WS_PORT}`;
            }}
          >
            Reset to default port
          </Button>
        </Callout>
      )}

      {error && (
        <div className="mb-4">
          <Callout intent={Intent.DANGER} title="Connection failed">
            Please ensure Flo is running on port {port}.
          </Callout>
        </div>
      )}
      {reloadError && (
        <Callout intent={Intent.DANGER} title="Detect game path failed">
          {reloadError.message}.
        </Callout>
      )}
      {status === WsStatus.Connecting && <Spinner />}

      {
        clientInfo && status === WsStatus.Connected ? (
          <>
            <p>
              Running on local port{" "}
              <span className="flo-text-info font-semibold">{port}</span>,
              version{" "}
              <span className="flo-text-info font-semibold">
                {clientInfo.version}
              </span>
              .
            </p>
            {gameLocated}
            {detectGamePath}
          </>
        ) : null
        // <a
        //   className={`${Classes.BUTTON} ${Classes.INTENT_PRIMARY}`}
        //   href="https://github.com/w3champions/w3champions-hostbot-docs/releases"
        //   target="_blank"
        // >
        //   <Icon icon={IconNames.DOWNLOAD} />
        //   <span>Download Client</span>
        // </a>
      }
      <Dialog
        className={Classes.DARK}
        isOpen={clientInfo && !hasMinVersion(clientInfo.version)}
        title="Please Update"
        icon="warning-sign"
        isCloseButtonShown={false}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>
            Please update Flo to{" "}
            <strong>{FLO_MIN_CLIENT_VERSION.join(".")}</strong> or newer.
          </p>
        </div>
      </Dialog>
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

function hasMinVersion(version: string) {
  const parts = version.split(".");
  if (parts.length !== 3) {
    return false;
  }

  for (var i = 0; i < 3; i++) {
    if (parseInt(parts[i]) > FLO_MIN_CLIENT_VERSION[i]) {
      return true;
    } else if (parseInt(parts[i]) < FLO_MIN_CLIENT_VERSION[i]) {
      return false;
    }
  }

  return true;
}
