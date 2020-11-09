import { PingStats } from "./ping";

export interface FloNode {
  id: number;
  name: string;
  location: string;
  country_id: string;
  ping: PingStats | null;
}

export interface SelectedNode {
  type: number;
  id: number | null;
  name: string;
  location: string;
  ip_addr: string;
  secret: string;
}

export interface GamePlayerPingSnapshot {
  game_id: number;
  node_ping_map: {
    [node_id: number]: {
      player_ping_map: {
        [player_id: number]: PingStats;
      };
    };
  };
}

export interface GamePlayerPingMap {
  [player_id: number]: {
    [node_id: number]: PingStats;
  };
}
