import { PlayerRef } from "./player";
import { MapList } from "./map";
import { MapPlayer, MapForce } from "./game";

export enum WsStatus {
  Idle = "Idle",
  Connecting = "Connecting",
  Connected = "Connected",
  Disconnected = "Disconnected",
}

export enum WsMessageTypeId {
  ClientInfo = "ClientInfo",
  ReloadClientInfo = "ReloadClientInfo",
  ReloadClientInfoError = "ReloadClientInfoError",
  Connect = "Connect",
  PlayerSession = "PlayerSession",
  ConnectRejected = "ConnectRejected",
  Disconnect = "Disconnect",
  ListMaps = "ListMaps",
  ListMapsError = "ListMapsError",
  GetMapDetail = "GetMapDetail",
  GetMapDetailError = "GetMapDetailError",
}

export interface WsMessage {
  type: WsMessageTypeId;
}

export interface ErrorMessage extends WsMessage {
  message: string;
}

export interface ClientInfoMessage extends WsMessage {
  version: string;
  war3_info: War3Info;
}

export interface War3Info {
  located: boolean;
  version: string;
  error: War3InfoError;
}

export enum War3InfoError {
  UserDataPath = "UserDataPath",
  InstallationPath = "InstallationPath",
  Internal = "Internal",
}

export interface PlayerSessionMessage extends WsMessage {
  player: PlayerRef;
  status: PlayerStatus;
  game_id: number | null;
}

export enum PlayerStatus {
  Idle = "Idle",
  InGame = "InGame",
}

export interface ConnectMessage extends WsMessage {
  token: string;
}

export interface DisconnectMessage extends WsMessage {
  reason: string;
}

export interface ListMapsMessage extends WsMessage {
  data: MapList;
}

export interface GetMapDetailMessage extends WsMessage {
  path: string;
  sha1: string;
  crc32: number;
  name: string;
  author: string;
  description: string;
  width: number;
  height: number;
  preview_jpeg_base64: string;
  suggested_players: string;
  num_players: number;
  players: MapPlayer[];
  forces: MapForce[];
}
