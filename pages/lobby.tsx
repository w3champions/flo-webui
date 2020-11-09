import { withConnected, useWs, Ws } from "../providers/ws";
import {
  Button,
  Intent,
  Toaster,
  Position,
  IToaster,
  NonIdealState,
  Card,
  Classes,
  Callout,
  Divider,
  Icon,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useApiClient } from "../helpers/api-client";
import { selectSessionGameId } from "../redux/store";
import { LeaveGameRequestBody } from "../types/game";
import { selectCurrentGame } from "../redux/modules/game";
import { Spinner } from "../components/Spinner";
import { GameSlot, SlotUpdate } from "../components/GameLobby/GameSlot";
import { Scrollbar } from "react-scrollbars-custom";
import { createSelector, SerializedError } from "@reduxjs/toolkit";
import {
  selectMapDetail,
  selectMapState,
  loadMapDetail,
  loadMapDetailByPath,
} from "../redux/modules/map";
import {
  GetMapDetailMessage
} from "../types/ws";
import { MapIcon } from "../components/MapIcon";
import { useRouter } from "next/router";
import { useAuth } from "../providers/auth";
import { Slot, GameStatus } from "../types/lobby";
import { createAbsoluteUrl } from "../helpers/url";
import { copyToClipboard } from "../helpers/clipboard";
import { ServerSelector } from "../components/ServerSelector";
import GameViewCreated from "../components/GameLobby/GameViewCreated";
import GameViewPreparing from "../components/GameLobby/GameViewPreparing";

interface SlotRef {
  id: number;
  slot: Slot;
  player_id?: number;
}

interface GameMapDetail {
  map: GetMapDetailMessage;
  loading: boolean;
  error: SerializedError;
}

const selectGameMapDetail = createSelector(
  selectCurrentGame,
  selectMapState,
  (game, map) => {
    if (!game) {
      return null;
    }

    if (map.detail && map.detail.path === game.map.path) {
      return {
        map: map.detail,
        loading: false,
        error: null,
      } as GameMapDetail;
    } else {
      return {
        map: null,
        loading: map.detailLoading,
        error: map.detailLoadError,
      } as GameMapDetail;
    }
  }
);

export default withConnected(function GameLobby() {
  const dispatch = useDispatch();
  const ws = useWs();
  const router = useRouter();
  const mapDetail = useSelector(selectGameMapDetail);
  const currentGameId = useSelector(selectSessionGameId);
  const currentGame = useSelector(selectCurrentGame);

  useEffect(() => {
    if (!currentGameId) {
      router.replace("/");
    }
  }, [currentGameId]);

  useEffect(() => {
    if (currentGame) {
      if (mapDetail.map && mapDetail.map.path === currentGame.map.path) {
        return;
      }
      dispatch(
        loadMapDetailByPath({
          ws,
          path: currentGame.map.path,
        })
      );
    }
  }, [currentGame]);

  if (!currentGameId) {
    return null;
  }

  if (!currentGame) {
    return (
      <NonIdealState title="Loading...">
        <Spinner />
      </NonIdealState>
    );
  }

  if (currentGame.status === GameStatus.Preparing) {
    return <GameViewPreparing game={currentGame} mapDetail={mapDetail} />;
  }

  return <GameViewCreated game={currentGame} mapDetail={mapDetail} />;
});
