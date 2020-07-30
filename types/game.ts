import { GetMapDetailMessage } from "./ws";

export interface CreateGame {
  name: string;
  map: GameMap;
  is_private: boolean;
  is_live: boolean;
}

export interface GameMap {
  sha1: string;
  checksum?: number;
  name: string;
  description: string;
  author: string;
  path: string;
  width: number;
  height: number;
  players: MapPlayer[];
  forces: MapForce[];
}

export interface MapPlayer {
  name: string;
  type: number;
  race: number;
  flags: number;
}

export interface MapForce {
  name: string;
  flags: number;
  player_set: number;
}
