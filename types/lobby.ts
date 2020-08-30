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
  Preparing = "Preparing",
  Created = "Created",
  Running = "Running",
  Ended = "Ended",
  Paused = "Paused",
  Terminated = "Terminated",
}

export enum NodeGameStatus {
  Created = "Created",
  Waiting = "Waiting",
  Loading = "Loading",
  Running = "Running",
  Ended = "Ended",
}

export interface Map {
  sha1: number[];
  checksum: number;
  path: string;
}

export interface Slot {
  player: PlayerRef;
  settings: SlotSettings;
  client_status: SlotClientStatus;
}

export enum SlotClientStatus {
  Pending = "Pending",
  Connected = "Connected",
  Joined = "Joined",
  Loading = "Loading",
  Loaded = "Loaded",
  Disconnected = "Disconnected",
  Left = "Left",
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
  Easy = "Easy",
  Normal = "Normal",
  Insane = "Insane",
}

export enum SlotStatus {
  Open = "Open",
  Closed = "Closed",
  Occupied = "Occupied",
}

export enum Race {
  Human = "Human",
  Orc = "Orc",
  NightElf = "NightElf",
  Undead = "Undead",
  Random = "Random",
}
