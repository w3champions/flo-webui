// package: lobby
// file: lobby.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as lobby_pb from "./lobby_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as player_pb from "./player_pb";
import * as game_pb from "./game_pb";

interface IFloLobbyService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPlayer: IFloLobbyService_IGetPlayer;
    getPlayerByToken: IFloLobbyService_IGetPlayerByToken;
    updateAndGetPlayer: IFloLobbyService_IUpdateAndGetPlayer;
    listNodes: IFloLobbyService_IListNodes;
    listGames: IFloLobbyService_IListGames;
    createGame: IFloLobbyService_ICreateGame;
    joinGame: IFloLobbyService_IJoinGame;
    leaveGame: IFloLobbyService_ILeaveGame;
    updateGameSlotSettings: IFloLobbyService_IUpdateGameSlotSettings;
    cancelGame: IFloLobbyService_ICancelGame;
}

interface IFloLobbyService_IGetPlayer extends grpc.MethodDefinition<lobby_pb.GetPlayerRequest, lobby_pb.GetPlayerReply> {
    path: string; // "/lobby.FloLobby/GetPlayer"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.GetPlayerRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.GetPlayerRequest>;
    responseSerialize: grpc.serialize<lobby_pb.GetPlayerReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.GetPlayerReply>;
}
interface IFloLobbyService_IGetPlayerByToken extends grpc.MethodDefinition<lobby_pb.GetPlayerByTokenRequest, lobby_pb.GetPlayerReply> {
    path: string; // "/lobby.FloLobby/GetPlayerByToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.GetPlayerByTokenRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.GetPlayerByTokenRequest>;
    responseSerialize: grpc.serialize<lobby_pb.GetPlayerReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.GetPlayerReply>;
}
interface IFloLobbyService_IUpdateAndGetPlayer extends grpc.MethodDefinition<lobby_pb.UpdateAndGetPlayerRequest, lobby_pb.UpdateAndGetPlayerReply> {
    path: string; // "/lobby.FloLobby/UpdateAndGetPlayer"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.UpdateAndGetPlayerRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.UpdateAndGetPlayerRequest>;
    responseSerialize: grpc.serialize<lobby_pb.UpdateAndGetPlayerReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.UpdateAndGetPlayerReply>;
}
interface IFloLobbyService_IListNodes extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, lobby_pb.ListNodesReply> {
    path: string; // "/lobby.FloLobby/ListNodes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<lobby_pb.ListNodesReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.ListNodesReply>;
}
interface IFloLobbyService_IListGames extends grpc.MethodDefinition<lobby_pb.ListGamesRequest, lobby_pb.ListGamesReply> {
    path: string; // "/lobby.FloLobby/ListGames"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.ListGamesRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.ListGamesRequest>;
    responseSerialize: grpc.serialize<lobby_pb.ListGamesReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.ListGamesReply>;
}
interface IFloLobbyService_ICreateGame extends grpc.MethodDefinition<lobby_pb.CreateGameRequest, lobby_pb.CreateGameReply> {
    path: string; // "/lobby.FloLobby/CreateGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.CreateGameRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.CreateGameRequest>;
    responseSerialize: grpc.serialize<lobby_pb.CreateGameReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.CreateGameReply>;
}
interface IFloLobbyService_IJoinGame extends grpc.MethodDefinition<lobby_pb.JoinGameRequest, lobby_pb.JoinGameReply> {
    path: string; // "/lobby.FloLobby/JoinGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.JoinGameRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.JoinGameRequest>;
    responseSerialize: grpc.serialize<lobby_pb.JoinGameReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.JoinGameReply>;
}
interface IFloLobbyService_ILeaveGame extends grpc.MethodDefinition<lobby_pb.LeaveGameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/lobby.FloLobby/LeaveGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.LeaveGameRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.LeaveGameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFloLobbyService_IUpdateGameSlotSettings extends grpc.MethodDefinition<lobby_pb.UpdateGameSlotSettingsRequest, lobby_pb.UpdateGameSlotSettingsReply> {
    path: string; // "/lobby.FloLobby/UpdateGameSlotSettings"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.UpdateGameSlotSettingsRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.UpdateGameSlotSettingsRequest>;
    responseSerialize: grpc.serialize<lobby_pb.UpdateGameSlotSettingsReply>;
    responseDeserialize: grpc.deserialize<lobby_pb.UpdateGameSlotSettingsReply>;
}
interface IFloLobbyService_ICancelGame extends grpc.MethodDefinition<lobby_pb.CancelGameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/lobby.FloLobby/CancelGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<lobby_pb.CancelGameRequest>;
    requestDeserialize: grpc.deserialize<lobby_pb.CancelGameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const FloLobbyService: IFloLobbyService;

export interface IFloLobbyServer {
    getPlayer: grpc.handleUnaryCall<lobby_pb.GetPlayerRequest, lobby_pb.GetPlayerReply>;
    getPlayerByToken: grpc.handleUnaryCall<lobby_pb.GetPlayerByTokenRequest, lobby_pb.GetPlayerReply>;
    updateAndGetPlayer: grpc.handleUnaryCall<lobby_pb.UpdateAndGetPlayerRequest, lobby_pb.UpdateAndGetPlayerReply>;
    listNodes: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, lobby_pb.ListNodesReply>;
    listGames: grpc.handleUnaryCall<lobby_pb.ListGamesRequest, lobby_pb.ListGamesReply>;
    createGame: grpc.handleUnaryCall<lobby_pb.CreateGameRequest, lobby_pb.CreateGameReply>;
    joinGame: grpc.handleUnaryCall<lobby_pb.JoinGameRequest, lobby_pb.JoinGameReply>;
    leaveGame: grpc.handleUnaryCall<lobby_pb.LeaveGameRequest, google_protobuf_empty_pb.Empty>;
    updateGameSlotSettings: grpc.handleUnaryCall<lobby_pb.UpdateGameSlotSettingsRequest, lobby_pb.UpdateGameSlotSettingsReply>;
    cancelGame: grpc.handleUnaryCall<lobby_pb.CancelGameRequest, google_protobuf_empty_pb.Empty>;
}

export interface IFloLobbyClient {
    getPlayer(request: lobby_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayer(request: lobby_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayer(request: lobby_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: lobby_pb.GetPlayerByTokenRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: lobby_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: lobby_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: lobby_pb.UpdateAndGetPlayerRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: lobby_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: lobby_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listGames(request: lobby_pb.ListGamesRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    listGames(request: lobby_pb.ListGamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    listGames(request: lobby_pb.ListGamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    createGame(request: lobby_pb.CreateGameRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    createGame(request: lobby_pb.CreateGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    createGame(request: lobby_pb.CreateGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    joinGame(request: lobby_pb.JoinGameRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    joinGame(request: lobby_pb.JoinGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    joinGame(request: lobby_pb.JoinGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    leaveGame(request: lobby_pb.LeaveGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    leaveGame(request: lobby_pb.LeaveGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    leaveGame(request: lobby_pb.LeaveGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateGameSlotSettings(request: lobby_pb.UpdateGameSlotSettingsRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateGameSlotSettingsReply) => void): grpc.ClientUnaryCall;
    updateGameSlotSettings(request: lobby_pb.UpdateGameSlotSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateGameSlotSettingsReply) => void): grpc.ClientUnaryCall;
    updateGameSlotSettings(request: lobby_pb.UpdateGameSlotSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateGameSlotSettingsReply) => void): grpc.ClientUnaryCall;
    cancelGame(request: lobby_pb.CancelGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelGame(request: lobby_pb.CancelGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelGame(request: lobby_pb.CancelGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class FloLobbyClient extends grpc.Client implements IFloLobbyClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPlayer(request: lobby_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayer(request: lobby_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayer(request: lobby_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: lobby_pb.GetPlayerByTokenRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: lobby_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: lobby_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: lobby_pb.UpdateAndGetPlayerRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: lobby_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: lobby_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: lobby_pb.ListGamesRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: lobby_pb.ListGamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: lobby_pb.ListGamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public createGame(request: lobby_pb.CreateGameRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public createGame(request: lobby_pb.CreateGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public createGame(request: lobby_pb.CreateGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public joinGame(request: lobby_pb.JoinGameRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public joinGame(request: lobby_pb.JoinGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public joinGame(request: lobby_pb.JoinGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public leaveGame(request: lobby_pb.LeaveGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public leaveGame(request: lobby_pb.LeaveGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public leaveGame(request: lobby_pb.LeaveGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateGameSlotSettings(request: lobby_pb.UpdateGameSlotSettingsRequest, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateGameSlotSettingsReply) => void): grpc.ClientUnaryCall;
    public updateGameSlotSettings(request: lobby_pb.UpdateGameSlotSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateGameSlotSettingsReply) => void): grpc.ClientUnaryCall;
    public updateGameSlotSettings(request: lobby_pb.UpdateGameSlotSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lobby_pb.UpdateGameSlotSettingsReply) => void): grpc.ClientUnaryCall;
    public cancelGame(request: lobby_pb.CancelGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelGame(request: lobby_pb.CancelGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelGame(request: lobby_pb.CancelGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
