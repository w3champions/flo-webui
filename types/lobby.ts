import { PlayerRef } from "./player";
import { SelectedNode } from "./node";

export interface GameInfo {
  id: number;
  name: string;
  status: GameStatus;
  map: Map;
  slots: Slot[];
  node: SelectedNode;
  is_private: boolean;
  is_live: boolean;
  created_by: PlayerRef;
}

export enum GameStatus {
  Preparing = 0,
  Created = 1,
  Running = 2,
  Ended = 3,
  Paused = 4,
  Terminated = 5,
}

export interface Map {
  sha1: number[];
  checksum: number;
  path: string;
}

export interface Slot {
  player: PlayerRef;
  settings: SlotSettings;
}

export interface SlotSettings {
  team: number;
  color: number;
  computer: Computer;
  handicap: number;
  status: SlotStatus;
  race: Race;
}

export enum Computer {
  Easy = 0,
  Normal = 1,
  Insane = 2,
}

export enum SlotStatus {
  Open = 0,
  Closed = 1,
  Occupied = 2,
}

export enum Race {
  Human = 0,
  Orc = 1,
  NightElf = 2,
  Undead = 3,
  Random = 4,
}
