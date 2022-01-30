// package: player
// file: player.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Player extends jspb.Message { 
    getId(): number;
    setId(value: number): Player;

    getName(): string;
    setName(value: string): Player;

    getSource(): PlayerSource;
    setSource(value: PlayerSource): Player;

    getSourceId(): string;
    setSourceId(value: string): Player;


    hasSourceState(): boolean;
    clearSourceState(): void;
    getSourceState(): PlayerSourceState | undefined;
    setSourceState(value?: PlayerSourceState): Player;


    hasRealm(): boolean;
    clearRealm(): void;
    getRealm(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRealm(value?: google_protobuf_wrappers_pb.StringValue): Player;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Player;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Player;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Player.AsObject;
    static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Player;
    static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
    export type AsObject = {
        id: number,
        name: string,
        source: PlayerSource,
        sourceId: string,
        sourceState?: PlayerSourceState.AsObject,
        realm?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PlayerSourceState extends jspb.Message { 

    hasBnet(): boolean;
    clearBnet(): void;
    getBnet(): BNetState | undefined;
    setBnet(value?: BNetState): PlayerSourceState;


    getSourceStateOneofCase(): PlayerSourceState.SourceStateOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerSourceState.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerSourceState): PlayerSourceState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerSourceState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerSourceState;
    static deserializeBinaryFromReader(message: PlayerSourceState, reader: jspb.BinaryReader): PlayerSourceState;
}

export namespace PlayerSourceState {
    export type AsObject = {
        bnet?: BNetState.AsObject,
    }

    export enum SourceStateOneofCase {
        SOURCE_STATE_ONEOF_NOT_SET = 0,
    
    BNET = 1,

    }

}

export class PlayerRef extends jspb.Message { 
    getId(): number;
    setId(value: number): PlayerRef;

    getName(): string;
    setName(value: string): PlayerRef;

    getSource(): PlayerSource;
    setSource(value: PlayerSource): PlayerRef;


    hasRealm(): boolean;
    clearRealm(): void;
    getRealm(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRealm(value?: google_protobuf_wrappers_pb.StringValue): PlayerRef;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerRef.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerRef): PlayerRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerRef;
    static deserializeBinaryFromReader(message: PlayerRef, reader: jspb.BinaryReader): PlayerRef;
}

export namespace PlayerRef {
    export type AsObject = {
        id: number,
        name: string,
        source: PlayerSource,
        realm?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class BNetState extends jspb.Message { 
    getAccountId(): number;
    setAccountId(value: number): BNetState;

    getAccessToken(): string;
    setAccessToken(value: string): BNetState;

    getAccessTokenExp(): number;
    setAccessTokenExp(value: number): BNetState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BNetState.AsObject;
    static toObject(includeInstance: boolean, msg: BNetState): BNetState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BNetState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BNetState;
    static deserializeBinaryFromReader(message: BNetState, reader: jspb.BinaryReader): BNetState;
}

export namespace BNetState {
    export type AsObject = {
        accountId: number,
        accessToken: string,
        accessTokenExp: number,
    }
}

export class PlayerPingMap extends jspb.Message { 
    getPlayerId(): number;
    setPlayerId(value: number): PlayerPingMap;


    getPingMapMap(): jspb.Map<number, PingStats>;
    clearPingMapMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerPingMap.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerPingMap): PlayerPingMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerPingMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerPingMap;
    static deserializeBinaryFromReader(message: PlayerPingMap, reader: jspb.BinaryReader): PlayerPingMap;
}

export namespace PlayerPingMap {
    export type AsObject = {
        playerId: number,

        pingMapMap: Array<[number, PingStats.AsObject]>,
    }
}

export class PingStats extends jspb.Message { 

    hasCurrent(): boolean;
    clearCurrent(): void;
    getCurrent(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setCurrent(value?: google_protobuf_wrappers_pb.UInt32Value): PingStats;


    hasAvg(): boolean;
    clearAvg(): void;
    getAvg(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setAvg(value?: google_protobuf_wrappers_pb.UInt32Value): PingStats;


    hasMin(): boolean;
    clearMin(): void;
    getMin(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMin(value?: google_protobuf_wrappers_pb.UInt32Value): PingStats;


    hasMax(): boolean;
    clearMax(): void;
    getMax(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMax(value?: google_protobuf_wrappers_pb.UInt32Value): PingStats;

    getLossRate(): number;
    setLossRate(value: number): PingStats;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingStats.AsObject;
    static toObject(includeInstance: boolean, msg: PingStats): PingStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingStats;
    static deserializeBinaryFromReader(message: PingStats, reader: jspb.BinaryReader): PingStats;
}

export namespace PingStats {
    export type AsObject = {
        current?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        avg?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        min?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        max?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        lossRate: number,
    }
}

export class PlayerBan extends jspb.Message { 
    getId(): number;
    setId(value: number): PlayerBan;


    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): PlayerRef | undefined;
    setPlayer(value?: PlayerRef): PlayerBan;

    getBanType(): PlayerBanType;
    setBanType(value: PlayerBanType): PlayerBan;


    hasBanExpiresAt(): boolean;
    clearBanExpiresAt(): void;
    getBanExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBanExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): PlayerBan;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PlayerBan;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerBan.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerBan): PlayerBan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerBan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerBan;
    static deserializeBinaryFromReader(message: PlayerBan, reader: jspb.BinaryReader): PlayerBan;
}

export namespace PlayerBan {
    export type AsObject = {
        id: number,
        player?: PlayerRef.AsObject,
        banType: PlayerBanType,
        banExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum PlayerSource {
    PLAYERSOURCETEST = 0,
    PLAYERSOURCEBNET = 1,
    PLAYERSOURCEAPI = 2,
}

export enum PlayerBanType {
    PLAYERBANTYPECHAT = 0,
}
