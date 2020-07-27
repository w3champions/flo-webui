import { PlayerRef } from "./player";

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
