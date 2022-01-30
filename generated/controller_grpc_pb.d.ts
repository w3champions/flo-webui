// package: controller
// file: controller.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as controller_pb from "./controller_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as player_pb from "./player_pb";
import * as game_pb from "./game_pb";
import * as node_pb from "./node_pb";

interface IFloControllerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPlayer: IFloControllerService_IGetPlayer;
    getPlayerByToken: IFloControllerService_IGetPlayerByToken;
    getPlayersBySourceIds: IFloControllerService_IGetPlayersBySourceIds;
    getPlayerPingMaps: IFloControllerService_IGetPlayerPingMaps;
    updateAndGetPlayer: IFloControllerService_IUpdateAndGetPlayer;
    listNodes: IFloControllerService_IListNodes;
    listGames: IFloControllerService_IListGames;
    getGame: IFloControllerService_IGetGame;
    createGame: IFloControllerService_ICreateGame;
    createGameAsBot: IFloControllerService_ICreateGameAsBot;
    startGameAsBot: IFloControllerService_IStartGameAsBot;
    joinGame: IFloControllerService_IJoinGame;
    createJoinGameToken: IFloControllerService_ICreateJoinGameToken;
    joinGameByToken: IFloControllerService_IJoinGameByToken;
    leaveGame: IFloControllerService_ILeaveGame;
    selectGameNode: IFloControllerService_ISelectGameNode;
    cancelGame: IFloControllerService_ICancelGame;
    cancelGameAsBot: IFloControllerService_ICancelGameAsBot;
    importMapChecksums: IFloControllerService_IImportMapChecksums;
    searchMapChecksum: IFloControllerService_ISearchMapChecksum;
    reload: IFloControllerService_IReload;
    listPlayerBans: IFloControllerService_IListPlayerBans;
    createPlayerBan: IFloControllerService_ICreatePlayerBan;
    removePlayerBan: IFloControllerService_IRemovePlayerBan;
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
interface IFloControllerService_IGetPlayersBySourceIds extends grpc.MethodDefinition<controller_pb.GetPlayersBySourceIdsRequest, controller_pb.GetPlayersBySourceIdsReply> {
    path: string; // "/controller.FloController/GetPlayersBySourceIds"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.GetPlayersBySourceIdsRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.GetPlayersBySourceIdsRequest>;
    responseSerialize: grpc.serialize<controller_pb.GetPlayersBySourceIdsReply>;
    responseDeserialize: grpc.deserialize<controller_pb.GetPlayersBySourceIdsReply>;
}
interface IFloControllerService_IGetPlayerPingMaps extends grpc.MethodDefinition<controller_pb.GetPlayerPingMapsRequest, controller_pb.GetPlayerPingMapsReply> {
    path: string; // "/controller.FloController/GetPlayerPingMaps"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.GetPlayerPingMapsRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.GetPlayerPingMapsRequest>;
    responseSerialize: grpc.serialize<controller_pb.GetPlayerPingMapsReply>;
    responseDeserialize: grpc.deserialize<controller_pb.GetPlayerPingMapsReply>;
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
interface IFloControllerService_IGetGame extends grpc.MethodDefinition<controller_pb.GetGameRequest, controller_pb.GetGameReply> {
    path: string; // "/controller.FloController/GetGame"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.GetGameRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.GetGameRequest>;
    responseSerialize: grpc.serialize<controller_pb.GetGameReply>;
    responseDeserialize: grpc.deserialize<controller_pb.GetGameReply>;
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
interface IFloControllerService_ICreateGameAsBot extends grpc.MethodDefinition<controller_pb.CreateGameAsBotRequest, controller_pb.CreateGameAsBotReply> {
    path: string; // "/controller.FloController/CreateGameAsBot"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.CreateGameAsBotRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.CreateGameAsBotRequest>;
    responseSerialize: grpc.serialize<controller_pb.CreateGameAsBotReply>;
    responseDeserialize: grpc.deserialize<controller_pb.CreateGameAsBotReply>;
}
interface IFloControllerService_IStartGameAsBot extends grpc.MethodDefinition<controller_pb.StartGameAsBotRequest, controller_pb.StartGameAsBotReply> {
    path: string; // "/controller.FloController/StartGameAsBot"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.StartGameAsBotRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.StartGameAsBotRequest>;
    responseSerialize: grpc.serialize<controller_pb.StartGameAsBotReply>;
    responseDeserialize: grpc.deserialize<controller_pb.StartGameAsBotReply>;
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
interface IFloControllerService_ICancelGameAsBot extends grpc.MethodDefinition<controller_pb.CancelGameAsBotRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/controller.FloController/CancelGameAsBot"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.CancelGameAsBotRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.CancelGameAsBotRequest>;
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
interface IFloControllerService_IReload extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/controller.FloController/Reload"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFloControllerService_IListPlayerBans extends grpc.MethodDefinition<controller_pb.ListPlayerBansRequest, controller_pb.ListPlayerBansReply> {
    path: string; // "/controller.FloController/ListPlayerBans"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.ListPlayerBansRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.ListPlayerBansRequest>;
    responseSerialize: grpc.serialize<controller_pb.ListPlayerBansReply>;
    responseDeserialize: grpc.deserialize<controller_pb.ListPlayerBansReply>;
}
interface IFloControllerService_ICreatePlayerBan extends grpc.MethodDefinition<controller_pb.CreatePlayerBanRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/controller.FloController/CreatePlayerBan"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.CreatePlayerBanRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.CreatePlayerBanRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFloControllerService_IRemovePlayerBan extends grpc.MethodDefinition<controller_pb.RemovePlayerBanRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/controller.FloController/RemovePlayerBan"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<controller_pb.RemovePlayerBanRequest>;
    requestDeserialize: grpc.deserialize<controller_pb.RemovePlayerBanRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const FloControllerService: IFloControllerService;

export interface IFloControllerServer {
    getPlayer: grpc.handleUnaryCall<controller_pb.GetPlayerRequest, controller_pb.GetPlayerReply>;
    getPlayerByToken: grpc.handleUnaryCall<controller_pb.GetPlayerByTokenRequest, controller_pb.GetPlayerReply>;
    getPlayersBySourceIds: grpc.handleUnaryCall<controller_pb.GetPlayersBySourceIdsRequest, controller_pb.GetPlayersBySourceIdsReply>;
    getPlayerPingMaps: grpc.handleUnaryCall<controller_pb.GetPlayerPingMapsRequest, controller_pb.GetPlayerPingMapsReply>;
    updateAndGetPlayer: grpc.handleUnaryCall<controller_pb.UpdateAndGetPlayerRequest, controller_pb.UpdateAndGetPlayerReply>;
    listNodes: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, controller_pb.ListNodesReply>;
    listGames: grpc.handleUnaryCall<controller_pb.ListGamesRequest, controller_pb.ListGamesReply>;
    getGame: grpc.handleUnaryCall<controller_pb.GetGameRequest, controller_pb.GetGameReply>;
    createGame: grpc.handleUnaryCall<controller_pb.CreateGameRequest, controller_pb.CreateGameReply>;
    createGameAsBot: grpc.handleUnaryCall<controller_pb.CreateGameAsBotRequest, controller_pb.CreateGameAsBotReply>;
    startGameAsBot: grpc.handleUnaryCall<controller_pb.StartGameAsBotRequest, controller_pb.StartGameAsBotReply>;
    joinGame: grpc.handleUnaryCall<controller_pb.JoinGameRequest, controller_pb.JoinGameReply>;
    createJoinGameToken: grpc.handleUnaryCall<controller_pb.CreateJoinGameTokenRequest, controller_pb.CreateJoinGameTokenReply>;
    joinGameByToken: grpc.handleUnaryCall<controller_pb.JoinGameByTokenRequest, controller_pb.JoinGameReply>;
    leaveGame: grpc.handleUnaryCall<controller_pb.LeaveGameRequest, google_protobuf_empty_pb.Empty>;
    selectGameNode: grpc.handleUnaryCall<controller_pb.SelectGameNodeRequest, google_protobuf_empty_pb.Empty>;
    cancelGame: grpc.handleUnaryCall<controller_pb.CancelGameRequest, google_protobuf_empty_pb.Empty>;
    cancelGameAsBot: grpc.handleUnaryCall<controller_pb.CancelGameAsBotRequest, google_protobuf_empty_pb.Empty>;
    importMapChecksums: grpc.handleUnaryCall<controller_pb.ImportMapChecksumsRequest, controller_pb.ImportMapChecksumsReply>;
    searchMapChecksum: grpc.handleUnaryCall<controller_pb.SearchMapChecksumRequest, controller_pb.SearchMapChecksumReply>;
    reload: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    listPlayerBans: grpc.handleUnaryCall<controller_pb.ListPlayerBansRequest, controller_pb.ListPlayerBansReply>;
    createPlayerBan: grpc.handleUnaryCall<controller_pb.CreatePlayerBanRequest, google_protobuf_empty_pb.Empty>;
    removePlayerBan: grpc.handleUnaryCall<controller_pb.RemovePlayerBanRequest, google_protobuf_empty_pb.Empty>;
}

export interface IFloControllerClient {
    getPlayer(request: controller_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    getPlayersBySourceIds(request: controller_pb.GetPlayersBySourceIdsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayersBySourceIdsReply) => void): grpc.ClientUnaryCall;
    getPlayersBySourceIds(request: controller_pb.GetPlayersBySourceIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayersBySourceIdsReply) => void): grpc.ClientUnaryCall;
    getPlayersBySourceIds(request: controller_pb.GetPlayersBySourceIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayersBySourceIdsReply) => void): grpc.ClientUnaryCall;
    getPlayerPingMaps(request: controller_pb.GetPlayerPingMapsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerPingMapsReply) => void): grpc.ClientUnaryCall;
    getPlayerPingMaps(request: controller_pb.GetPlayerPingMapsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerPingMapsReply) => void): grpc.ClientUnaryCall;
    getPlayerPingMaps(request: controller_pb.GetPlayerPingMapsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerPingMapsReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    listGames(request: controller_pb.ListGamesRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    getGame(request: controller_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetGameReply) => void): grpc.ClientUnaryCall;
    getGame(request: controller_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetGameReply) => void): grpc.ClientUnaryCall;
    getGame(request: controller_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetGameReply) => void): grpc.ClientUnaryCall;
    createGame(request: controller_pb.CreateGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    createGameAsBot(request: controller_pb.CreateGameAsBotRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameAsBotReply) => void): grpc.ClientUnaryCall;
    createGameAsBot(request: controller_pb.CreateGameAsBotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameAsBotReply) => void): grpc.ClientUnaryCall;
    createGameAsBot(request: controller_pb.CreateGameAsBotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameAsBotReply) => void): grpc.ClientUnaryCall;
    startGameAsBot(request: controller_pb.StartGameAsBotRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.StartGameAsBotReply) => void): grpc.ClientUnaryCall;
    startGameAsBot(request: controller_pb.StartGameAsBotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.StartGameAsBotReply) => void): grpc.ClientUnaryCall;
    startGameAsBot(request: controller_pb.StartGameAsBotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.StartGameAsBotReply) => void): grpc.ClientUnaryCall;
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
    cancelGameAsBot(request: controller_pb.CancelGameAsBotRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelGameAsBot(request: controller_pb.CancelGameAsBotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelGameAsBot(request: controller_pb.CancelGameAsBotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    reload(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reload(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reload(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listPlayerBans(request: controller_pb.ListPlayerBansRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ListPlayerBansReply) => void): grpc.ClientUnaryCall;
    listPlayerBans(request: controller_pb.ListPlayerBansRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListPlayerBansReply) => void): grpc.ClientUnaryCall;
    listPlayerBans(request: controller_pb.ListPlayerBansRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListPlayerBansReply) => void): grpc.ClientUnaryCall;
    createPlayerBan(request: controller_pb.CreatePlayerBanRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createPlayerBan(request: controller_pb.CreatePlayerBanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createPlayerBan(request: controller_pb.CreatePlayerBanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    removePlayerBan(request: controller_pb.RemovePlayerBanRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    removePlayerBan(request: controller_pb.RemovePlayerBanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    removePlayerBan(request: controller_pb.RemovePlayerBanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class FloControllerClient extends grpc.Client implements IFloControllerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPlayer(request: controller_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayer(request: controller_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayerByToken(request: controller_pb.GetPlayerByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerReply) => void): grpc.ClientUnaryCall;
    public getPlayersBySourceIds(request: controller_pb.GetPlayersBySourceIdsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayersBySourceIdsReply) => void): grpc.ClientUnaryCall;
    public getPlayersBySourceIds(request: controller_pb.GetPlayersBySourceIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayersBySourceIdsReply) => void): grpc.ClientUnaryCall;
    public getPlayersBySourceIds(request: controller_pb.GetPlayersBySourceIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayersBySourceIdsReply) => void): grpc.ClientUnaryCall;
    public getPlayerPingMaps(request: controller_pb.GetPlayerPingMapsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerPingMapsReply) => void): grpc.ClientUnaryCall;
    public getPlayerPingMaps(request: controller_pb.GetPlayerPingMapsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerPingMapsReply) => void): grpc.ClientUnaryCall;
    public getPlayerPingMaps(request: controller_pb.GetPlayerPingMapsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetPlayerPingMapsReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public updateAndGetPlayer(request: controller_pb.UpdateAndGetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.UpdateAndGetPlayerReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listNodes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListNodesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: controller_pb.ListGamesRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public listGames(request: controller_pb.ListGamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListGamesReply) => void): grpc.ClientUnaryCall;
    public getGame(request: controller_pb.GetGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.GetGameReply) => void): grpc.ClientUnaryCall;
    public getGame(request: controller_pb.GetGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.GetGameReply) => void): grpc.ClientUnaryCall;
    public getGame(request: controller_pb.GetGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.GetGameReply) => void): grpc.ClientUnaryCall;
    public createGame(request: controller_pb.CreateGameRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public createGame(request: controller_pb.CreateGameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameReply) => void): grpc.ClientUnaryCall;
    public createGameAsBot(request: controller_pb.CreateGameAsBotRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameAsBotReply) => void): grpc.ClientUnaryCall;
    public createGameAsBot(request: controller_pb.CreateGameAsBotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameAsBotReply) => void): grpc.ClientUnaryCall;
    public createGameAsBot(request: controller_pb.CreateGameAsBotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.CreateGameAsBotReply) => void): grpc.ClientUnaryCall;
    public startGameAsBot(request: controller_pb.StartGameAsBotRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.StartGameAsBotReply) => void): grpc.ClientUnaryCall;
    public startGameAsBot(request: controller_pb.StartGameAsBotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.StartGameAsBotReply) => void): grpc.ClientUnaryCall;
    public startGameAsBot(request: controller_pb.StartGameAsBotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.StartGameAsBotReply) => void): grpc.ClientUnaryCall;
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
    public cancelGameAsBot(request: controller_pb.CancelGameAsBotRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelGameAsBot(request: controller_pb.CancelGameAsBotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelGameAsBot(request: controller_pb.CancelGameAsBotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    public importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    public importMapChecksums(request: controller_pb.ImportMapChecksumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ImportMapChecksumsReply) => void): grpc.ClientUnaryCall;
    public searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    public searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    public searchMapChecksum(request: controller_pb.SearchMapChecksumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.SearchMapChecksumReply) => void): grpc.ClientUnaryCall;
    public reload(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reload(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reload(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listPlayerBans(request: controller_pb.ListPlayerBansRequest, callback: (error: grpc.ServiceError | null, response: controller_pb.ListPlayerBansReply) => void): grpc.ClientUnaryCall;
    public listPlayerBans(request: controller_pb.ListPlayerBansRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: controller_pb.ListPlayerBansReply) => void): grpc.ClientUnaryCall;
    public listPlayerBans(request: controller_pb.ListPlayerBansRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: controller_pb.ListPlayerBansReply) => void): grpc.ClientUnaryCall;
    public createPlayerBan(request: controller_pb.CreatePlayerBanRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createPlayerBan(request: controller_pb.CreatePlayerBanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createPlayerBan(request: controller_pb.CreatePlayerBanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public removePlayerBan(request: controller_pb.RemovePlayerBanRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public removePlayerBan(request: controller_pb.RemovePlayerBanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public removePlayerBan(request: controller_pb.RemovePlayerBanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
