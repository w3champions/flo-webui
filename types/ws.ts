import { PlayerRef } from "./player";
import { MapList } from "./map";
import { MapPlayer, MapForce } from "./game";
import { GameInfo, Slot, SlotSettings } from "./lobby";
import { FloNode, GamePlayerPingSnapshot } from "./node";
import { SelectedNode } from "../generated/game_pb";

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
  CurrentGameInfo = "CurrentGameInfo",
  GamePlayerEnter = "GamePlayerEnter",
  GamePlayerLeave = "GamePlayerLeave",
  GameSlotUpdate = "GameSlotUpdate",
  PlayerSessionUpdate = "PlayerSessionUpdate",
  GameSlotUpdateRequest = "GameSlotUpdateRequest",
  ListNodes = "ListNodes",
  PingUpdate = "PingUpdate",
  GameSelectNodeRequest = "GameSelectNodeRequest",
  GameSelectNode = "GameSelectNode",
  GamePlayerPingMapUpdate = "GamePlayerPingMapUpdate",
  GamePlayerPingMapSnapshotRequest = "GamePlayerPingMapSnapshotRequest",
  GamePlayerPingMapSnapshot = "GamePlayerPingMapSnapshot",
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
  message: string;
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

export interface CurrentGameInfoMessage extends WsMessage, GameInfo {}

export interface GamePlayerEnterMessage extends WsMessage {
  game_id: number;
  slot_index: number;
  slot: Slot;
}

export interface GamePlayerLeaveMessage extends WsMessage {
  game_id: number;
  player_id: number;
  reason: PlayerLeaveReason;
}

export enum PlayerLeaveReason {
  Left = 0,
  Kicked = 1,
  GameCancelled = 2,
}

export interface GameSlotUpdateMessage extends WsMessage {
  game_id: number;
  slot_index: number;
  slot_settings: SlotSettings;
}

export interface PlayerSessionUpdateMessage extends WsMessage {
  status: PlayerStatus;
  game_id: number | number;
}

export interface GameSlotUpdateMessage extends WsMessage {
  game_id: number;
  slot_index: number;
  slot_settings: SlotSettings;
}

export interface GameSlotUpdateRequestMessage extends WsMessage {
  game_id: number;
  slot_settings: SlotSettings;
}

export interface ListNodesMessage extends WsMessage {
  nodes: FloNode[];
}

export interface GameSelectNodeMessage extends WsMessage {
  game_id: number;
  node_id: number | null;
}

export interface GameSelectNodeRequestMessage extends WsMessage {
  game_id: number;
  node_id: number;
}

export interface PingUpdateMessage extends WsMessage {
  node_id: number;
  ping: number | null;
}

export interface GamePlayerPingMapUpdateMessage extends WsMessage {
  game_id: number;
  player_id: number;
  ping_map: {
    [node_id: number]: number;
  };
}

export interface GamePlayerPingMapSnapshotRequestMessage extends WsMessage {
  game_id: number;
}

export interface GamePlayerPingMapSnapshotMessage
  extends GamePlayerPingSnapshot,
    WsMessage {
  game_id: number;
}
