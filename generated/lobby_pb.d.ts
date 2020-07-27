// package: lobby
// file: lobby.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as player_pb from "./player_pb";
import * as game_pb from "./game_pb";

export class GetPlayerRequest extends jspb.Message { 
    getPlayerId(): number;
    setPlayerId(value: number): GetPlayerRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerRequest): GetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerRequest;
    static deserializeBinaryFromReader(message: GetPlayerRequest, reader: jspb.BinaryReader): GetPlayerRequest;
}

export namespace GetPlayerRequest {
    export type AsObject = {
        playerId: number,
    }
}

export class GetPlayerByTokenRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GetPlayerByTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerByTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerByTokenRequest): GetPlayerByTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerByTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerByTokenRequest;
    static deserializeBinaryFromReader(message: GetPlayerByTokenRequest, reader: jspb.BinaryReader): GetPlayerByTokenRequest;
}

export namespace GetPlayerByTokenRequest {
    export type AsObject = {
        token: string,
    }
}

export class GetPlayerReply extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): player_pb.Player | undefined;
    setPlayer(value?: player_pb.Player): GetPlayerReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerReply): GetPlayerReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerReply;
    static deserializeBinaryFromReader(message: GetPlayerReply, reader: jspb.BinaryReader): GetPlayerReply;
}

export namespace GetPlayerReply {
    export type AsObject = {
        player?: player_pb.Player.AsObject,
    }
}

export class UpdateAndGetPlayerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateAndGetPlayerRequest;

    getSource(): player_pb.PlayerSource;
    setSource(value: player_pb.PlayerSource): UpdateAndGetPlayerRequest;

    getSourceId(): string;
    setSourceId(value: string): UpdateAndGetPlayerRequest;


    hasSourceState(): boolean;
    clearSourceState(): void;
    getSourceState(): player_pb.PlayerSourceState | undefined;
    setSourceState(value?: player_pb.PlayerSourceState): UpdateAndGetPlayerRequest;


    hasRealm(): boolean;
    clearRealm(): void;
    getRealm(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRealm(value?: google_protobuf_wrappers_pb.StringValue): UpdateAndGetPlayerRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAndGetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAndGetPlayerRequest): UpdateAndGetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAndGetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAndGetPlayerRequest;
    static deserializeBinaryFromReader(message: UpdateAndGetPlayerRequest, reader: jspb.BinaryReader): UpdateAndGetPlayerRequest;
}

export namespace UpdateAndGetPlayerRequest {
    export type AsObject = {
        name: string,
        source: player_pb.PlayerSource,
        sourceId: string,
        sourceState?: player_pb.PlayerSourceState.AsObject,
        realm?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class UpdateAndGetPlayerReply extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): player_pb.Player | undefined;
    setPlayer(value?: player_pb.Player): UpdateAndGetPlayerReply;

    getToken(): string;
    setToken(value: string): UpdateAndGetPlayerReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAndGetPlayerReply.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAndGetPlayerReply): UpdateAndGetPlayerReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAndGetPlayerReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAndGetPlayerReply;
    static deserializeBinaryFromReader(message: UpdateAndGetPlayerReply, reader: jspb.BinaryReader): UpdateAndGetPlayerReply;
}

export namespace UpdateAndGetPlayerReply {
    export type AsObject = {
        player?: player_pb.Player.AsObject,
        token: string,
    }
}

export class ListNodesReply extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<Node>;
    setNodesList(value: Array<Node>): ListNodesReply;
    addNodes(value?: Node, index?: number): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodesReply.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodesReply): ListNodesReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodesReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodesReply;
    static deserializeBinaryFromReader(message: ListNodesReply, reader: jspb.BinaryReader): ListNodesReply;
}

export namespace ListNodesReply {
    export type AsObject = {
        nodesList: Array<Node.AsObject>,
    }
}

export class ListGamesRequest extends jspb.Message { 

    hasKeyword(): boolean;
    clearKeyword(): void;
    getKeyword(): google_protobuf_wrappers_pb.StringValue | undefined;
    setKeyword(value?: google_protobuf_wrappers_pb.StringValue): ListGamesRequest;

    getStatus(): GameStatusFilter;
    setStatus(value: GameStatusFilter): ListGamesRequest;


    hasIsPrivate(): boolean;
    clearIsPrivate(): void;
    getIsPrivate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsPrivate(value?: google_protobuf_wrappers_pb.BoolValue): ListGamesRequest;


    hasIsLive(): boolean;
    clearIsLive(): void;
    getIsLive(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsLive(value?: google_protobuf_wrappers_pb.BoolValue): ListGamesRequest;


    hasTake(): boolean;
    clearTake(): void;
    getTake(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTake(value?: google_protobuf_wrappers_pb.Int64Value): ListGamesRequest;


    hasSinceId(): boolean;
    clearSinceId(): void;
    getSinceId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setSinceId(value?: google_protobuf_wrappers_pb.Int32Value): ListGamesRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGamesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListGamesRequest): ListGamesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGamesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGamesRequest;
    static deserializeBinaryFromReader(message: ListGamesRequest, reader: jspb.BinaryReader): ListGamesRequest;
}

export namespace ListGamesRequest {
    export type AsObject = {
        keyword?: google_protobuf_wrappers_pb.StringValue.AsObject,
        status: GameStatusFilter,
        isPrivate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        isLive?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        take?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sinceId?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class ListGamesReply extends jspb.Message { 
    clearGamesList(): void;
    getGamesList(): Array<game_pb.GameEntry>;
    setGamesList(value: Array<game_pb.GameEntry>): ListGamesReply;
    addGames(value?: game_pb.GameEntry, index?: number): game_pb.GameEntry;

    getHasMore(): boolean;
    setHasMore(value: boolean): ListGamesReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGamesReply.AsObject;
    static toObject(includeInstance: boolean, msg: ListGamesReply): ListGamesReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGamesReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGamesReply;
    static deserializeBinaryFromReader(message: ListGamesReply, reader: jspb.BinaryReader): ListGamesReply;
}

export namespace ListGamesReply {
    export type AsObject = {
        gamesList: Array<game_pb.GameEntry.AsObject>,
        hasMore: boolean,
    }
}

export class CreateGameRequest extends jspb.Message { 
    getPlayerId(): number;
    setPlayerId(value: number): CreateGameRequest;

    getName(): string;
    setName(value: string): CreateGameRequest;


    hasMap(): boolean;
    clearMap(): void;
    getMap(): game_pb.Map | undefined;
    setMap(value?: game_pb.Map): CreateGameRequest;

    getIsPrivate(): boolean;
    setIsPrivate(value: boolean): CreateGameRequest;

    getIsLive(): boolean;
    setIsLive(value: boolean): CreateGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateGameRequest): CreateGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateGameRequest;
    static deserializeBinaryFromReader(message: CreateGameRequest, reader: jspb.BinaryReader): CreateGameRequest;
}

export namespace CreateGameRequest {
    export type AsObject = {
        playerId: number,
        name: string,
        map?: game_pb.Map.AsObject,
        isPrivate: boolean,
        isLive: boolean,
    }
}

export class CreateGameReply extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): game_pb.Game | undefined;
    setGame(value?: game_pb.Game): CreateGameReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateGameReply.AsObject;
    static toObject(includeInstance: boolean, msg: CreateGameReply): CreateGameReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateGameReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateGameReply;
    static deserializeBinaryFromReader(message: CreateGameReply, reader: jspb.BinaryReader): CreateGameReply;
}

export namespace CreateGameReply {
    export type AsObject = {
        game?: game_pb.Game.AsObject,
    }
}

export class JoinGameRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): JoinGameRequest;

    getPlayerId(): number;
    setPlayerId(value: number): JoinGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinGameRequest): JoinGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinGameRequest;
    static deserializeBinaryFromReader(message: JoinGameRequest, reader: jspb.BinaryReader): JoinGameRequest;
}

export namespace JoinGameRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
    }
}

export class JoinGameReply extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): game_pb.Game | undefined;
    setGame(value?: game_pb.Game): JoinGameReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinGameReply.AsObject;
    static toObject(includeInstance: boolean, msg: JoinGameReply): JoinGameReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinGameReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinGameReply;
    static deserializeBinaryFromReader(message: JoinGameReply, reader: jspb.BinaryReader): JoinGameReply;
}

export namespace JoinGameReply {
    export type AsObject = {
        game?: game_pb.Game.AsObject,
    }
}

export class LeaveGameRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): LeaveGameRequest;

    getPlayerId(): number;
    setPlayerId(value: number): LeaveGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveGameRequest): LeaveGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveGameRequest;
    static deserializeBinaryFromReader(message: LeaveGameRequest, reader: jspb.BinaryReader): LeaveGameRequest;
}

export namespace LeaveGameRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
    }
}

export class UpdateGameSlotSettingsRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): UpdateGameSlotSettingsRequest;

    getPlayerId(): number;
    setPlayerId(value: number): UpdateGameSlotSettingsRequest;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): game_pb.SlotSettings | undefined;
    setSettings(value?: game_pb.SlotSettings): UpdateGameSlotSettingsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGameSlotSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGameSlotSettingsRequest): UpdateGameSlotSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGameSlotSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGameSlotSettingsRequest;
    static deserializeBinaryFromReader(message: UpdateGameSlotSettingsRequest, reader: jspb.BinaryReader): UpdateGameSlotSettingsRequest;
}

export namespace UpdateGameSlotSettingsRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
        settings?: game_pb.SlotSettings.AsObject,
    }
}

export class UpdateGameSlotSettingsReply extends jspb.Message { 
    clearSlotsList(): void;
    getSlotsList(): Array<game_pb.Slot>;
    setSlotsList(value: Array<game_pb.Slot>): UpdateGameSlotSettingsReply;
    addSlots(value?: game_pb.Slot, index?: number): game_pb.Slot;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGameSlotSettingsReply.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGameSlotSettingsReply): UpdateGameSlotSettingsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGameSlotSettingsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGameSlotSettingsReply;
    static deserializeBinaryFromReader(message: UpdateGameSlotSettingsReply, reader: jspb.BinaryReader): UpdateGameSlotSettingsReply;
}

export namespace UpdateGameSlotSettingsReply {
    export type AsObject = {
        slotsList: Array<game_pb.Slot.AsObject>,
    }
}

export class CancelGameRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): CancelGameRequest;

    getPlayerId(): number;
    setPlayerId(value: number): CancelGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelGameRequest): CancelGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelGameRequest;
    static deserializeBinaryFromReader(message: CancelGameRequest, reader: jspb.BinaryReader): CancelGameRequest;
}

export namespace CancelGameRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
    }
}

export class Node extends jspb.Message { 
    getId(): number;
    setId(value: number): Node;

    getName(): string;
    setName(value: string): Node;

    getLocation(): string;
    setLocation(value: string): Node;

    getIpAddr(): string;
    setIpAddr(value: string): Node;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Node;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        id: number,
        name: string,
        location: string,
        ipAddr: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum GameStatusFilter {
    GAMESTATUSFILTERALL = 0,
    GAMESTATUSFILTEROPEN = 1,
    GAMESTATUSFILTERLIVE = 2,
    GAMESTATUSFILTERENDED = 3,
}
