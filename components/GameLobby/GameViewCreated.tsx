import { GameInfo, Slot } from "../../types/lobby";
import MapDetail, { GameMapDetail } from "./MapDetail";
import { IconNames } from "@blueprintjs/icons";
import { Layout } from "../Layout";
import {
  Icon,
  Card,
  Elevation,
  Callout,
  Intent,
  Classes,
  Divider,
} from "@blueprintjs/core";
import { Spinner } from "../Spinner";
import { useSelector } from "react-redux";
import {
  selectCurrentGamePlayers,
  selectCurrentNodePingMap,
  selectCurrentGame,
  selectCurrentNode,
} from "../../redux/modules/game";
import { createSelector } from "@reduxjs/toolkit";
import PlayerColorPicker from "./PlayerColorPicker";
import PingValue from "../PingValue";
import { load } from "grpc";
import { FlagIcon } from "../FlagIcon";

export interface GameViewCreatedProps {
  game: GameInfo;
  mapDetail: GameMapDetail;
}

interface LoadingPlayer {
  slot: Slot;
  ping?: number;
}

const selectLoadingPlayers = createSelector(
  selectCurrentGame,
  selectCurrentNodePingMap,
  (game, pingMap) => {
    return game.slots
      .filter((slot) => !!slot.player)
      .map((slot) => {
        const ping = pingMap ? pingMap[String(slot.player.id)] : null;
        return { slot, ping } as LoadingPlayer;
      });
  }
);

export default function GameViewCreated({
  game,
  mapDetail,
}: GameViewCreatedProps) {
  const loadingPlayers = useSelector(selectLoadingPlayers);
  const node = useSelector(selectCurrentNode);

  return (
    <Layout
      flex
      navContent={
        <div className="flex content-center items-center space-x-2">
          <Icon
            icon={IconNames.RECORD}
            className="fill-current text-red-500 animate-pulse"
          />
          <h1 className="flex-initial font-bold text-lg">GAME#{game.id}</h1>
        </div>
      }
    >
      <div className="flex flex-col w-full space-y-8">
        <Callout intent={Intent.PRIMARY} title=" Please join the LAN game">
          Game will start once all players joined the game.
        </Callout>
        <div className="flex-auto flex space-x-16">
          <div className="flex-initial">
            <MapDetail detail={mapDetail} vertical />
          </div>
          <div className="flex-auto space-y-4">
            <div>
              <span className="inline-flex items-center">
                <FlagIcon className="flex-initial mr-2" id={node.country_id} />
                <span className="flex-initial text-xl font-bold flo-text-info">
                  {node.name}
                </span>
              </span>
            </div>

            <Divider />

            {loadingPlayers.map(({ slot, ping }, idx) => {
              return (
                <div
                  key={idx}
                  className="flex space-x-4 border border-gray-800 rounded px-4 py-4 items-center shadow"
                >
                  <div className="flex-initial">
                    <PlayerColorPicker readonly value={slot.settings.color} />
                  </div>
                  <div className="flex-initial">
                    <PingValue value={ping} />
                  </div>
                  <div className="flex-auto font-bold flo-text-info">
                    {slot.player.name}
                  </div>
                  <div className="flex-initial">
                    <Spinner />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
