import { Spinner } from "./Spinner";
import { useState } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { useApiClient } from "../helpers/api-client";
import { Alert } from "./Alert";
import { Button, Callout, Intent } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import {
  useFloWs,
  selectWsPlayerSessionLoadStatus,
  selectWsPlayerSession,
} from "../redux/modules/ws";

export default function ConnectLobby() {
  const dispatch = useDispatch();
  const playerSession = useSelector(selectWsPlayerSession);
  const { loading, error } = useSelector(selectWsPlayerSessionLoadStatus);
  const ws = useFloWs();

  return (
    <div className="leading-normal">
      {error && (
        <Callout intent={Intent.DANGER} title="Connection failed">
          {error.message}
        </Callout>
      )}
      {loading && <Spinner />}
      {playerSession && (
        <>
          <p>
            Connected. Your status is{" "}
            <span className="flo-text-info font-semibold">
              {playerSession.status}
            </span>
            .
          </p>
        </>
      )}
    </div>
  );
}
