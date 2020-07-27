// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var lobby_pb = require('./lobby_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var player_pb = require('./player_pb.js');
var game_pb = require('./game_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_CancelGameRequest(arg) {
  if (!(arg instanceof lobby_pb.CancelGameRequest)) {
    throw new Error('Expected argument of type lobby.CancelGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_CancelGameRequest(buffer_arg) {
  return lobby_pb.CancelGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_CreateGameReply(arg) {
  if (!(arg instanceof lobby_pb.CreateGameReply)) {
    throw new Error('Expected argument of type lobby.CreateGameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_CreateGameReply(buffer_arg) {
  return lobby_pb.CreateGameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_CreateGameRequest(arg) {
  if (!(arg instanceof lobby_pb.CreateGameRequest)) {
    throw new Error('Expected argument of type lobby.CreateGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_CreateGameRequest(buffer_arg) {
  return lobby_pb.CreateGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_GetPlayerByTokenRequest(arg) {
  if (!(arg instanceof lobby_pb.GetPlayerByTokenRequest)) {
    throw new Error('Expected argument of type lobby.GetPlayerByTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_GetPlayerByTokenRequest(buffer_arg) {
  return lobby_pb.GetPlayerByTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_GetPlayerReply(arg) {
  if (!(arg instanceof lobby_pb.GetPlayerReply)) {
    throw new Error('Expected argument of type lobby.GetPlayerReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_GetPlayerReply(buffer_arg) {
  return lobby_pb.GetPlayerReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_GetPlayerRequest(arg) {
  if (!(arg instanceof lobby_pb.GetPlayerRequest)) {
    throw new Error('Expected argument of type lobby.GetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_GetPlayerRequest(buffer_arg) {
  return lobby_pb.GetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_JoinGameReply(arg) {
  if (!(arg instanceof lobby_pb.JoinGameReply)) {
    throw new Error('Expected argument of type lobby.JoinGameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_JoinGameReply(buffer_arg) {
  return lobby_pb.JoinGameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_JoinGameRequest(arg) {
  if (!(arg instanceof lobby_pb.JoinGameRequest)) {
    throw new Error('Expected argument of type lobby.JoinGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_JoinGameRequest(buffer_arg) {
  return lobby_pb.JoinGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_LeaveGameRequest(arg) {
  if (!(arg instanceof lobby_pb.LeaveGameRequest)) {
    throw new Error('Expected argument of type lobby.LeaveGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_LeaveGameRequest(buffer_arg) {
  return lobby_pb.LeaveGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_ListGamesReply(arg) {
  if (!(arg instanceof lobby_pb.ListGamesReply)) {
    throw new Error('Expected argument of type lobby.ListGamesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_ListGamesReply(buffer_arg) {
  return lobby_pb.ListGamesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_ListGamesRequest(arg) {
  if (!(arg instanceof lobby_pb.ListGamesRequest)) {
    throw new Error('Expected argument of type lobby.ListGamesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_ListGamesRequest(buffer_arg) {
  return lobby_pb.ListGamesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_ListNodesReply(arg) {
  if (!(arg instanceof lobby_pb.ListNodesReply)) {
    throw new Error('Expected argument of type lobby.ListNodesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_ListNodesReply(buffer_arg) {
  return lobby_pb.ListNodesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_UpdateAndGetPlayerReply(arg) {
  if (!(arg instanceof lobby_pb.UpdateAndGetPlayerReply)) {
    throw new Error('Expected argument of type lobby.UpdateAndGetPlayerReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_UpdateAndGetPlayerReply(buffer_arg) {
  return lobby_pb.UpdateAndGetPlayerReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_UpdateAndGetPlayerRequest(arg) {
  if (!(arg instanceof lobby_pb.UpdateAndGetPlayerRequest)) {
    throw new Error('Expected argument of type lobby.UpdateAndGetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_UpdateAndGetPlayerRequest(buffer_arg) {
  return lobby_pb.UpdateAndGetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_UpdateGameSlotSettingsReply(arg) {
  if (!(arg instanceof lobby_pb.UpdateGameSlotSettingsReply)) {
    throw new Error('Expected argument of type lobby.UpdateGameSlotSettingsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_UpdateGameSlotSettingsReply(buffer_arg) {
  return lobby_pb.UpdateGameSlotSettingsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lobby_UpdateGameSlotSettingsRequest(arg) {
  if (!(arg instanceof lobby_pb.UpdateGameSlotSettingsRequest)) {
    throw new Error('Expected argument of type lobby.UpdateGameSlotSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lobby_UpdateGameSlotSettingsRequest(buffer_arg) {
  return lobby_pb.UpdateGameSlotSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service runs on Flo Lobby servers
// Used by W3Flo.com
var FloLobbyService = exports.FloLobbyService = {
  getPlayer: {
    path: '/lobby.FloLobby/GetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.GetPlayerRequest,
    responseType: lobby_pb.GetPlayerReply,
    requestSerialize: serialize_lobby_GetPlayerRequest,
    requestDeserialize: deserialize_lobby_GetPlayerRequest,
    responseSerialize: serialize_lobby_GetPlayerReply,
    responseDeserialize: deserialize_lobby_GetPlayerReply,
  },
  getPlayerByToken: {
    path: '/lobby.FloLobby/GetPlayerByToken',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.GetPlayerByTokenRequest,
    responseType: lobby_pb.GetPlayerReply,
    requestSerialize: serialize_lobby_GetPlayerByTokenRequest,
    requestDeserialize: deserialize_lobby_GetPlayerByTokenRequest,
    responseSerialize: serialize_lobby_GetPlayerReply,
    responseDeserialize: deserialize_lobby_GetPlayerReply,
  },
  updateAndGetPlayer: {
    path: '/lobby.FloLobby/UpdateAndGetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.UpdateAndGetPlayerRequest,
    responseType: lobby_pb.UpdateAndGetPlayerReply,
    requestSerialize: serialize_lobby_UpdateAndGetPlayerRequest,
    requestDeserialize: deserialize_lobby_UpdateAndGetPlayerRequest,
    responseSerialize: serialize_lobby_UpdateAndGetPlayerReply,
    responseDeserialize: deserialize_lobby_UpdateAndGetPlayerReply,
  },
  // Lists all nodes
listNodes: {
    path: '/lobby.FloLobby/ListNodes',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: lobby_pb.ListNodesReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_lobby_ListNodesReply,
    responseDeserialize: deserialize_lobby_ListNodesReply,
  },
  // Lists games
listGames: {
    path: '/lobby.FloLobby/ListGames',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.ListGamesRequest,
    responseType: lobby_pb.ListGamesReply,
    requestSerialize: serialize_lobby_ListGamesRequest,
    requestDeserialize: deserialize_lobby_ListGamesRequest,
    responseSerialize: serialize_lobby_ListGamesReply,
    responseDeserialize: deserialize_lobby_ListGamesReply,
  },
  // Creates a new game
createGame: {
    path: '/lobby.FloLobby/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.CreateGameRequest,
    responseType: lobby_pb.CreateGameReply,
    requestSerialize: serialize_lobby_CreateGameRequest,
    requestDeserialize: deserialize_lobby_CreateGameRequest,
    responseSerialize: serialize_lobby_CreateGameReply,
    responseDeserialize: deserialize_lobby_CreateGameReply,
  },
  // Joins a game
joinGame: {
    path: '/lobby.FloLobby/JoinGame',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.JoinGameRequest,
    responseType: lobby_pb.JoinGameReply,
    requestSerialize: serialize_lobby_JoinGameRequest,
    requestDeserialize: deserialize_lobby_JoinGameRequest,
    responseSerialize: serialize_lobby_JoinGameReply,
    responseDeserialize: deserialize_lobby_JoinGameReply,
  },
  // Leaves a game
leaveGame: {
    path: '/lobby.FloLobby/LeaveGame',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.LeaveGameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_lobby_LeaveGameRequest,
    requestDeserialize: deserialize_lobby_LeaveGameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates a slot
updateGameSlotSettings: {
    path: '/lobby.FloLobby/UpdateGameSlotSettings',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.UpdateGameSlotSettingsRequest,
    responseType: lobby_pb.UpdateGameSlotSettingsReply,
    requestSerialize: serialize_lobby_UpdateGameSlotSettingsRequest,
    requestDeserialize: deserialize_lobby_UpdateGameSlotSettingsRequest,
    responseSerialize: serialize_lobby_UpdateGameSlotSettingsReply,
    responseDeserialize: deserialize_lobby_UpdateGameSlotSettingsReply,
  },
  // Cancels a game
cancelGame: {
    path: '/lobby.FloLobby/CancelGame',
    requestStream: false,
    responseStream: false,
    requestType: lobby_pb.CancelGameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_lobby_CancelGameRequest,
    requestDeserialize: deserialize_lobby_CancelGameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FloLobbyClient = grpc.makeGenericClientConstructor(FloLobbyService);
