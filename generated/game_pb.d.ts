// package: game
// file: game.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as player_pb from "./player_pb";
import * as node_pb from "./node_pb";

export class Game extends jspb.Message { 
    getId(): number;
    setId(value: number): Game;

    getName(): string;
    setName(value: string): Game;

    getStatus(): GameStatus;
    setStatus(value: GameStatus): Game;


    hasMap(): boolean;
    clearMap(): void;
    getMap(): Map | undefined;
    setMap(value?: Map): Game;

    clearSlotsList(): void;
    getSlotsList(): Array<Slot>;
    setSlotsList(value: Array<Slot>): Game;
    addSlots(value?: Slot, index?: number): Slot;


    hasNode(): boolean;
    clearNode(): void;
    getNode(): node_pb.Node | undefined;
    setNode(value?: node_pb.Node): Game;

    getIsPrivate(): boolean;
    setIsPrivate(value: boolean): Game;


    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setSecret(value?: google_protobuf_wrappers_pb.Int32Value): Game;

    getIsLive(): boolean;
    setIsLive(value: boolean): Game;

    getNumPlayers(): number;
    setNumPlayers(value: number): Game;

    getMaxPlayers(): number;
    setMaxPlayers(value: number): Game;

    getRandomSeed(): number;
    setRandomSeed(value: number): Game;


    hasCreatedBy(): boolean;
    clearCreatedBy(): void;
    getCreatedBy(): player_pb.PlayerRef | undefined;
    setCreatedBy(value?: player_pb.PlayerRef): Game;


    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Game;


    hasEndedAt(): boolean;
    clearEndedAt(): void;
    getEndedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndedAt(value?: google_protobuf_timestamp_pb.Timestamp): Game;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Game;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Game;

    getMaskPlayerNames(): boolean;
    setMaskPlayerNames(value: boolean): Game;


    hasGameVersion(): boolean;
    clearGameVersion(): void;
    getGameVersion(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGameVersion(value?: google_protobuf_wrappers_pb.StringValue): Game;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Game.AsObject;
    static toObject(includeInstance: boolean, msg: Game): Game.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Game, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Game;
    static deserializeBinaryFromReader(message: Game, reader: jspb.BinaryReader): Game;
}

export namespace Game {
    export type AsObject = {
        id: number,
        name: string,
        status: GameStatus,
        map?: Map.AsObject,
        slotsList: Array<Slot.AsObject>,
        node?: node_pb.Node.AsObject,
        isPrivate: boolean,
        secret?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        isLive: boolean,
        numPlayers: number,
        maxPlayers: number,
        randomSeed: number,
        createdBy?: player_pb.PlayerRef.AsObject,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        maskPlayerNames: boolean,
        gameVersion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GameEntry extends jspb.Message { 
    getId(): number;
    setId(value: number): GameEntry;

    getName(): string;
    setName(value: string): GameEntry;

    getMapName(): string;
    setMapName(value: string): GameEntry;

    getStatus(): GameStatus;
    setStatus(value: GameStatus): GameEntry;

    getIsPrivate(): boolean;
    setIsPrivate(value: boolean): GameEntry;

    getIsLive(): boolean;
    setIsLive(value: boolean): GameEntry;

    getNumPlayers(): number;
    setNumPlayers(value: number): GameEntry;

    getMaxPlayers(): number;
    setMaxPlayers(value: number): GameEntry;


    hasNode(): boolean;
    clearNode(): void;
    getNode(): node_pb.Node | undefined;
    setNode(value?: node_pb.Node): GameEntry;


    hasCreatedBy(): boolean;
    clearCreatedBy(): void;
    getCreatedBy(): player_pb.PlayerRef | undefined;
    setCreatedBy(value?: player_pb.PlayerRef): GameEntry;


    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameEntry;


    hasEndedAt(): boolean;
    clearEndedAt(): void;
    getEndedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameEntry;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameEntry;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GameEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameEntry.AsObject;
    static toObject(includeInstance: boolean, msg: GameEntry): GameEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameEntry;
    static deserializeBinaryFromReader(message: GameEntry, reader: jspb.BinaryReader): GameEntry;
}

export namespace GameEntry {
    export type AsObject = {
        id: number,
        name: string,
        mapName: string,
        status: GameStatus,
        isPrivate: boolean,
        isLive: boolean,
        numPlayers: number,
        maxPlayers: number,
        node?: node_pb.Node.AsObject,
        createdBy?: player_pb.PlayerRef.AsObject,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Slot extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): player_pb.PlayerRef | undefined;
    setPlayer(value?: player_pb.PlayerRef): Slot;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): SlotSettings | undefined;
    setSettings(value?: SlotSettings): Slot;

    getClientStatus(): SlotClientStatus;
    setClientStatus(value: SlotClientStatus): Slot;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Slot.AsObject;
    static toObject(includeInstance: boolean, msg: Slot): Slot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Slot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Slot;
    static deserializeBinaryFromReader(message: Slot, reader: jspb.BinaryReader): Slot;
}

export namespace Slot {
    export type AsObject = {
        player?: player_pb.PlayerRef.AsObject,
        settings?: SlotSettings.AsObject,
        clientStatus: SlotClientStatus,
    }
}

export class SlotSettings extends jspb.Message { 
    getTeam(): number;
    setTeam(value: number): SlotSettings;

    getColor(): number;
    setColor(value: number): SlotSettings;

    getComputer(): Computer;
    setComputer(value: Computer): SlotSettings;

    getHandicap(): number;
    setHandicap(value: number): SlotSettings;

    getStatus(): SlotStatus;
    setStatus(value: SlotStatus): SlotSettings;

    getRace(): Race;
    setRace(value: Race): SlotSettings;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlotSettings.AsObject;
    static toObject(includeInstance: boolean, msg: SlotSettings): SlotSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlotSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlotSettings;
    static deserializeBinaryFromReader(message: SlotSettings, reader: jspb.BinaryReader): SlotSettings;
}

export namespace SlotSettings {
    export type AsObject = {
        team: number,
        color: number,
        computer: Computer,
        handicap: number,
        status: SlotStatus,
        race: Race,
    }
}

export class Map extends jspb.Message { 
    getSha1(): Uint8Array | string;
    getSha1_asU8(): Uint8Array;
    getSha1_asB64(): string;
    setSha1(value: Uint8Array | string): Map;

    getChecksum(): number;
    setChecksum(value: number): Map;

    getName(): string;
    setName(value: string): Map;

    getDescription(): string;
    setDescription(value: string): Map;

    getAuthor(): string;
    setAuthor(value: string): Map;

    getPath(): string;
    setPath(value: string): Map;

    getWidth(): number;
    setWidth(value: number): Map;

    getHeight(): number;
    setHeight(value: number): Map;

    clearPlayersList(): void;
    getPlayersList(): Array<MapPlayer>;
    setPlayersList(value: Array<MapPlayer>): Map;
    addPlayers(value?: MapPlayer, index?: number): MapPlayer;

    clearForcesList(): void;
    getForcesList(): Array<MapForce>;
    setForcesList(value: Array<MapForce>): Map;
    addForces(value?: MapForce, index?: number): MapForce;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Map.AsObject;
    static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Map;
    static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
    export type AsObject = {
        sha1: Uint8Array | string,
        checksum: number,
        name: string,
        description: string,
        author: string,
        path: string,
        width: number,
        height: number,
        playersList: Array<MapPlayer.AsObject>,
        forcesList: Array<MapForce.AsObject>,
    }
}

export class MapPlayer extends jspb.Message { 
    getName(): string;
    setName(value: string): MapPlayer;

    getType(): number;
    setType(value: number): MapPlayer;

    getRace(): number;
    setRace(value: number): MapPlayer;

    getFlags(): number;
    setFlags(value: number): MapPlayer;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapPlayer.AsObject;
    static toObject(includeInstance: boolean, msg: MapPlayer): MapPlayer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapPlayer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapPlayer;
    static deserializeBinaryFromReader(message: MapPlayer, reader: jspb.BinaryReader): MapPlayer;
}

export namespace MapPlayer {
    export type AsObject = {
        name: string,
        type: number,
        race: number,
        flags: number,
    }
}

export class MapForce extends jspb.Message { 
    getName(): string;
    setName(value: string): MapForce;

    getFlags(): number;
    setFlags(value: number): MapForce;

    getPlayerSet(): number;
    setPlayerSet(value: number): MapForce;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapForce.AsObject;
    static toObject(includeInstance: boolean, msg: MapForce): MapForce.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapForce, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapForce;
    static deserializeBinaryFromReader(message: MapForce, reader: jspb.BinaryReader): MapForce;
}

export namespace MapForce {
    export type AsObject = {
        name: string,
        flags: number,
        playerSet: number,
    }
}

export class MapChecksumImportItem extends jspb.Message { 
    getSha1(): string;
    setSha1(value: string): MapChecksumImportItem;

    getChecksum(): number;
    setChecksum(value: number): MapChecksumImportItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapChecksumImportItem.AsObject;
    static toObject(includeInstance: boolean, msg: MapChecksumImportItem): MapChecksumImportItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapChecksumImportItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapChecksumImportItem;
    static deserializeBinaryFromReader(message: MapChecksumImportItem, reader: jspb.BinaryReader): MapChecksumImportItem;
}

export namespace MapChecksumImportItem {
    export type AsObject = {
        sha1: string,
        checksum: number,
    }
}

export enum SlotStatus {
    SLOTSTATUSOPEN = 0,
    SLOTSTATUSCLOSED = 1,
    SLOTSTATUSOCCUPIED = 2,
}

export enum Race {
    RACEHUMAN = 0,
    RACEORC = 1,
    RACENIGHTELF = 2,
    RACEUNDEAD = 3,
    RACERANDOM = 4,
}

export enum Computer {
    COMPUTEREASY = 0,
    COMPUTERNORMAL = 1,
    COMPUTERINSANE = 2,
}

export enum SlotClientStatus {
    SLOTCLIENTSTATUSPENDING = 0,
    SLOTCLIENTSTATUSCONNECTED = 1,
    SLOTCLIENTSTATUSLOADING = 2,
    SLOTCLIENTSTATUSLOADED = 3,
    SLOTCLIENTSTATUSDISCONNECTED = 4,
    SLOTCLIENTSTATUSLEFT = 5,
}

export enum GameStatus {
    GAMESTATUSPREPARING = 0,
    GAMESTATUSCREATED = 1,
    GAMESTATUSRUNNING = 2,
    GAMESTATUSENDED = 3,
    GAMESTATUSPAUSED = 4,
    GAMESTATUSTERMINATED = 5,
}
