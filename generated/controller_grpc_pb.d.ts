// package: controller
// file: controller.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as controller_pb from "./controller_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as player_pb from "./player_pb";
import * as game_pb from "./game_pb";
import * as node_pb from "./node_pb";

interface IFloControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPlayer: IFloControllerService_IGetPlayer;
    getPlayerByToken: IFloControllerService_IGetPlayerByToken;
    updateAndGetPlayer: IFloControllerService_IUpdateAndGetPlayer;
    listNodes: IFloControllerService_IListNodes;
    listGames: IFloControllerService_IListGames;
    createGame: IFloControllerService_ICreateGame;
    joinGame: IFloControllerService_IJoinGame;
    createJoinGameToken: IFloControllerService_ICreateJoinGameToken;
    joinGameByToken: IFloControllerService_IJoinGameByToken;
    leaveGame: IFloControllerService_ILeaveGame;
    selectGameNode: IFloControllerService_ISelectGameNode;
    cancelGame: IFloControllerService_ICancelGame;
    importMapChecksums: IFloControllerService_IImportMapChecksums;
    searchMapChecksum: IFloControllerService_ISearchMapChecksum;
}

interface IFloControllerService_IGetPlayer extends grpc.MethodDefinition<controller_pb.GetPlayerRequest, controller_pb.GetPlayerReply> {
    path: string; // "/controller.FloController/GetPlayer"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.GetPlayerRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.GetPlayerRequest>;
    responseSerialize: grpc.serialize<controller_pb.GetPlayerReply>;
    responseDeserialize: grpc.deserialize<controller_pb.GetPlayerReply>;
}
interface IFloControllerService_IGetPlayerByToken extends grpc.MethodDefinition<controller_pb.GetPlayerByTokenRequest, controller_pb.GetPlayerReply> {
    path: string; // "/controller.FloController/GetPlayerByToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.GetPlayerByTokenRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.GetPlayerByTokenRequest>;
    responseSerialize: grpc.serialize<controller_pb.GetPlayerReply>;
    responseDeserialize: grpc.deserialize<controller_pb.GetPlayerReply>;
}
interface IFloControllerService_IUpdateAndGetPlayer extends grpc.MethodDefinition<controller_pb.UpdateAndGetPlayerRequest, controller_pb.UpdateAndGetPlayerReply> {
    path: string; // "/controller.FloController/UpdateAndGetPlayer"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.UpdateAndGetPlayerRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.UpdateAndGetPlayerRequest>;
    responseSerialize: grpc.serialize<controller_pb.UpdateAndGetPlayerReply>;
    responseDeserialize: grpc.deserialize<controller_pb.UpdateAndGetPlayerReply>;
}
interface IFloControllerService_IListNodes extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, controller_pb.ListNodesReply> {
    path: string; // "/controller.FloController/ListNodes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<controller_pb.ListNodesReply>;
    responseDeserialize: grpc.deserialize<controller_pb.ListNodesReply>;
}
interface IFloControllerService_IListGames extends grpc.MethodDefinition<controller_pb.ListGamesRequest, controller_pb.ListGamesReply> {
    path: string; // "/controller.FloController/ListGames"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.ListGamesRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.ListGamesRequest>;
    responseSerialize: grpc.serialize<controller_pb.ListGamesReply>;
    responseDeserialize: grpc.deserialize<controller_pb.ListGamesReply>;
}
interface IFloControllerService_ICreateGame extends grpc.MethodDefinition<controller_pb.CreateGameRequest, controller_pb.CreateGameReply> {
    path: string; // "/controller.FloController/CreateGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.CreateGameRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.CreateGameRequest>;
    responseSerialize: grpc.serialize<controller_pb.CreateGameReply>;
    responseDeserialize: grpc.deserialize<controller_pb.CreateGameReply>;
}
interface IFloControllerService_IJoinGame extends grpc.MethodDefinition<controller_pb.JoinGameRequest, controller_pb.JoinGameReply> {
    path: string; // "/controller.FloController/JoinGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.JoinGameRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.JoinGameRequest>;
    responseSerialize: grpc.serialize<controller_pb.JoinGameReply>;
    responseDeserialize: grpc.deserialize<controller_pb.JoinGameReply>;
}
interface IFloControllerService_ICreateJoinGameToken extends grpc.MethodDefinition<controller_pb.CreateJoinGameTokenRequest, controller_pb.CreateJoinGameTokenReply> {
    path: string; // "/controller.FloController/CreateJoinGameToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.CreateJoinGameTokenRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.CreateJoinGameTokenRequest>;
    responseSerialize: grpc.serialize<controller_pb.CreateJoinGameTokenReply>;
    responseDeserialize: grpc.deserialize<controller_pb.CreateJoinGameTokenReply>;
}
interface IFloControllerService_IJoinGameByToken extends grpc.MethodDefinition<controller_pb.JoinGameByTokenRequest, controller_pb.JoinGameReply> {
    path: string; // "/controller.FloController/JoinGameByToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.JoinGameByTokenRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.JoinGameByTokenRequest>;
    responseSerialize: grpc.serialize<controller_pb.JoinGameReply>;
    responseDeserialize: grpc.deserialize<controller_pb.JoinGameReply>;
}
interface IFloControllerService_ILeaveGame extends grpc.MethodDefinition<controller_pb.LeaveGameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/controller.FloController/LeaveGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.LeaveGameRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.LeaveGameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFloControllerService_ISelectGameNode extends grpc.MethodDefinition<controller_pb.SelectGameNodeRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/controller.FloController/SelectGameNode"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.SelectGameNodeRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.SelectGameNodeRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFloControllerService_ICancelGame extends grpc.MethodDefinition<controller_pb.CancelGameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/controller.FloController/CancelGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.CancelGameRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.CancelGameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFloControllerService_IImportMapChecksums extends grpc.MethodDefinition<controller_pb.ImportMapChecksumsRequest, controller_pb.ImportMapChecksumsReply> {
    path: string; // "/controller.FloController/ImportMapChecksums"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.ImportMapChecksumsRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.ImportMapChecksumsRequest>;
    responseSerialize: grpc.serialize<controller_pb.ImportMapChecksumsReply>;
    responseDeserialize: grpc.deserialize<controller_pb.ImportMapChecksumsReply>;
}
interface IFloControllerService_ISearchMapChecksum extends grpc.MethodDefinition<controller_pb.SearchMapChecksumRequest, controller_pb.SearchMapChecksumReply> {
    path: string; // "/controller.FloController/SearchMapChecksum"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.SearchMapChecksumRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.SearchMapChecksumRequest>;
    responseSerialize: grpc.serialize<controller_pb.SearchMapChecksumReply>;
    responseDeserialize: grpc.deserialize<controller_pb.SearchMapChecksumReply>;
}

export const FloControllerService: IFloControllerService;

export interface IFloControllerServer {
    getPlayer: grpc.handleUnaryCall<controller_pb.GetPlayerRequest, controller_pb.GetPlayerReply>;
    getPlayerByToken: grpc.handleUnaryCall<controller_pb.GetPlayerByTokenRequest, controller_pb.GetPlayerReply>;
    updateAndGetPlayer: grpc.handleUnaryCall<controller_pb.UpdateAndGetPlayerRequest, controller_pb.UpdateAndGetPlayerReply>;
    listNodes: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, controller_pb.ListNodesReply>;
    listGames: grpc.handleUnaryCall<controller_pb.ListGamesRequest, controller_pb.ListGamesReply>;
    createGame: grpc.handleUnaryCall<controller_pb.CreateGameRequest, controller_pb.CreateGameReply>;
    joinGame: grpc.handleUnaryCall<controller_pb.JoinGameRequest, controller_pb.JoinGameReply>;
    createJoinGameToken: grpc.handleUnaryCall<controller_pb.CreateJoinGameTokenRequest, controller_pb.CreateJoinGameTokenReply>;
    joinGameByToken: grpc.handleUnaryCall<controller_pb.JoinGameByTokenRequest, controller_pb.JoinGameReply>;
    leaveGame: grpc.handleUnaryCall<controller_pb.LeaveGameRequest, google_protobuf_empty_pb.Empty>;
    selectGameNode: grpc.handleUnaryCall<controller_pb.SelectGameNodeRequest, google_protobuf_empty_pb.Empty>;
    cancelGame: grpc.handleUnaryCall<controller_pb.CancelGameRequest, google_protobuf_empty_pb.Empty>;
    importMapChecksums: grpc.handleUnaryCall<controller_pb.ImportMapChecksumsRequest, controller_pb.ImportMapChecksumsReply>;
    searchMapChecksum: grpc.handleUnaryCall<controller_pb.SearchMapChecksumRequest, controller_pb.SearchMapChecksumReply>;
}

export interface IFloControllerClient {
    getPlayer(request: controller_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listGames(request: controller_pb.ListGamesRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    createGame(request: controller_pb.CreateGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    joinGame(request: controller_pb.JoinGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    joinGame(request: controller_pb.JoinGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    joinGame(request: controller_pb.JoinGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    createJoinGameToken(request: controller_pb.CreateJoinGameTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateJoinGameTokenReply) => void): grpc.ClientUnaryCall;
    createJoinGameToken(request: controller_pb.CreateJoinGameTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateJoinGameTokenReply) => void): grpc.ClientUnaryCall;
    createJoinGameToken(request: controller_pb.CreateJoinGameTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateJoinGameTokenReply) => void): grpc.ClientUnaryCall;
    joinGameByToken(request: controller_pb.JoinGameByTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    joinGameByToken(request: controller_pb.JoinGameByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    joinGameByToken(request: controller_pb.JoinGameByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    leaveGame(request: controller_pb.LeaveGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    leaveGame(request: controller_pb.LeaveGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    leaveGame(request: controller_pb.LeaveGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    selectGameNode(request: controller_pb.SelectGameNodeRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    selectGameNode(request: controller_pb.SelectGameNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    selectGameNode(request: controller_pb.SelectGameNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelGame(request: controller_pb.CancelGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelGame(request: controller_pb.CancelGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelGame(request: controller_pb.CancelGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
}

export class FloControllerClient extends grpc.Client implements IFloControllerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPlayer(request: controller_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: controller_pb.ListGamesRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public createGame(request: controller_pb.CreateGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public joinGame(request: controller_pb.JoinGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public joinGame(request: controller_pb.JoinGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public joinGame(request: controller_pb.JoinGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public createJoinGameToken(request: controller_pb.CreateJoinGameTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateJoinGameTokenReply) => void): grpc.ClientUnaryCall;
    public createJoinGameToken(request: controller_pb.CreateJoinGameTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateJoinGameTokenReply) => void): grpc.ClientUnaryCall;
    public createJoinGameToken(request: controller_pb.CreateJoinGameTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateJoinGameTokenReply) => void): grpc.ClientUnaryCall;
    public joinGameByToken(request: controller_pb.JoinGameByTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public joinGameByToken(request: controller_pb.JoinGameByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public joinGameByToken(request: controller_pb.JoinGameByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.JoinGameReply) => void): grpc.ClientUnaryCall;
    public leaveGame(request: controller_pb.LeaveGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public leaveGame(request: controller_pb.LeaveGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public leaveGame(request: controller_pb.LeaveGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public selectGameNode(request: controller_pb.SelectGameNodeRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public selectGameNode(request: controller_pb.SelectGameNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public selectGameNode(request: controller_pb.SelectGameNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelGame(request: controller_pb.CancelGameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelGame(request: controller_pb.CancelGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelGame(request: controller_pb.CancelGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    public importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    public importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    public searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    public searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    public searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
}
