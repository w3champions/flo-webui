// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var controller_pb = require('./controller_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var player_pb = require('./player_pb.js');
var game_pb = require('./game_pb.js');
var node_pb = require('./node_pb.js');

function serialize_controller_CancelGameRequest(arg) {
  if (!(arg instanceof controller_pb.CancelGameRequest)) {
    throw new Error('Expected argument of type controller.CancelGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_CancelGameRequest(buffer_arg) {
  return controller_pb.CancelGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_CreateGameReply(arg) {
  if (!(arg instanceof controller_pb.CreateGameReply)) {
    throw new Error('Expected argument of type controller.CreateGameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_CreateGameReply(buffer_arg) {
  return controller_pb.CreateGameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_CreateGameRequest(arg) {
  if (!(arg instanceof controller_pb.CreateGameRequest)) {
    throw new Error('Expected argument of type controller.CreateGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_CreateGameRequest(buffer_arg) {
  return controller_pb.CreateGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_CreateJoinGameTokenReply(arg) {
  if (!(arg instanceof controller_pb.CreateJoinGameTokenReply)) {
    throw new Error('Expected argument of type controller.CreateJoinGameTokenReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_CreateJoinGameTokenReply(buffer_arg) {
  return controller_pb.CreateJoinGameTokenReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_CreateJoinGameTokenRequest(arg) {
  if (!(arg instanceof controller_pb.CreateJoinGameTokenRequest)) {
    throw new Error('Expected argument of type controller.CreateJoinGameTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_CreateJoinGameTokenRequest(buffer_arg) {
  return controller_pb.CreateJoinGameTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_GetPlayerByTokenRequest(arg) {
  if (!(arg instanceof controller_pb.GetPlayerByTokenRequest)) {
    throw new Error('Expected argument of type controller.GetPlayerByTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_GetPlayerByTokenRequest(buffer_arg) {
  return controller_pb.GetPlayerByTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_GetPlayerReply(arg) {
  if (!(arg instanceof controller_pb.GetPlayerReply)) {
    throw new Error('Expected argument of type controller.GetPlayerReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_GetPlayerReply(buffer_arg) {
  return controller_pb.GetPlayerReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_GetPlayerRequest(arg) {
  if (!(arg instanceof controller_pb.GetPlayerRequest)) {
    throw new Error('Expected argument of type controller.GetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_GetPlayerRequest(buffer_arg) {
  return controller_pb.GetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_ImportMapChecksumsReply(arg) {
  if (!(arg instanceof controller_pb.ImportMapChecksumsReply)) {
    throw new Error('Expected argument of type controller.ImportMapChecksumsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_ImportMapChecksumsReply(buffer_arg) {
  return controller_pb.ImportMapChecksumsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_ImportMapChecksumsRequest(arg) {
  if (!(arg instanceof controller_pb.ImportMapChecksumsRequest)) {
    throw new Error('Expected argument of type controller.ImportMapChecksumsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_ImportMapChecksumsRequest(buffer_arg) {
  return controller_pb.ImportMapChecksumsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_JoinGameByTokenRequest(arg) {
  if (!(arg instanceof controller_pb.JoinGameByTokenRequest)) {
    throw new Error('Expected argument of type controller.JoinGameByTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_JoinGameByTokenRequest(buffer_arg) {
  return controller_pb.JoinGameByTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_JoinGameReply(arg) {
  if (!(arg instanceof controller_pb.JoinGameReply)) {
    throw new Error('Expected argument of type controller.JoinGameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_JoinGameReply(buffer_arg) {
  return controller_pb.JoinGameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_JoinGameRequest(arg) {
  if (!(arg instanceof controller_pb.JoinGameRequest)) {
    throw new Error('Expected argument of type controller.JoinGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_JoinGameRequest(buffer_arg) {
  return controller_pb.JoinGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_LeaveGameRequest(arg) {
  if (!(arg instanceof controller_pb.LeaveGameRequest)) {
    throw new Error('Expected argument of type controller.LeaveGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_LeaveGameRequest(buffer_arg) {
  return controller_pb.LeaveGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_ListGamesReply(arg) {
  if (!(arg instanceof controller_pb.ListGamesReply)) {
    throw new Error('Expected argument of type controller.ListGamesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_ListGamesReply(buffer_arg) {
  return controller_pb.ListGamesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_ListGamesRequest(arg) {
  if (!(arg instanceof controller_pb.ListGamesRequest)) {
    throw new Error('Expected argument of type controller.ListGamesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_ListGamesRequest(buffer_arg) {
  return controller_pb.ListGamesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_ListNodesReply(arg) {
  if (!(arg instanceof controller_pb.ListNodesReply)) {
    throw new Error('Expected argument of type controller.ListNodesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_ListNodesReply(buffer_arg) {
  return controller_pb.ListNodesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_SearchMapChecksumReply(arg) {
  if (!(arg instanceof controller_pb.SearchMapChecksumReply)) {
    throw new Error('Expected argument of type controller.SearchMapChecksumReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_SearchMapChecksumReply(buffer_arg) {
  return controller_pb.SearchMapChecksumReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_SearchMapChecksumRequest(arg) {
  if (!(arg instanceof controller_pb.SearchMapChecksumRequest)) {
    throw new Error('Expected argument of type controller.SearchMapChecksumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_SearchMapChecksumRequest(buffer_arg) {
  return controller_pb.SearchMapChecksumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_SelectGameNodeRequest(arg) {
  if (!(arg instanceof controller_pb.SelectGameNodeRequest)) {
    throw new Error('Expected argument of type controller.SelectGameNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_SelectGameNodeRequest(buffer_arg) {
  return controller_pb.SelectGameNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_UpdateAndGetPlayerReply(arg) {
  if (!(arg instanceof controller_pb.UpdateAndGetPlayerReply)) {
    throw new Error('Expected argument of type controller.UpdateAndGetPlayerReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_UpdateAndGetPlayerReply(buffer_arg) {
  return controller_pb.UpdateAndGetPlayerReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_controller_UpdateAndGetPlayerRequest(arg) {
  if (!(arg instanceof controller_pb.UpdateAndGetPlayerRequest)) {
    throw new Error('Expected argument of type controller.UpdateAndGetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_controller_UpdateAndGetPlayerRequest(buffer_arg) {
  return controller_pb.UpdateAndGetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var FloControllerService = exports.FloControllerService = {
  getPlayer: {
    path: '/controller.FloController/GetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.GetPlayerRequest,
    responseType: controller_pb.GetPlayerReply,
    requestSerialize: serialize_controller_GetPlayerRequest,
    requestDeserialize: deserialize_controller_GetPlayerRequest,
    responseSerialize: serialize_controller_GetPlayerReply,
    responseDeserialize: deserialize_controller_GetPlayerReply,
  },
  getPlayerByToken: {
    path: '/controller.FloController/GetPlayerByToken',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.GetPlayerByTokenRequest,
    responseType: controller_pb.GetPlayerReply,
    requestSerialize: serialize_controller_GetPlayerByTokenRequest,
    requestDeserialize: deserialize_controller_GetPlayerByTokenRequest,
    responseSerialize: serialize_controller_GetPlayerReply,
    responseDeserialize: deserialize_controller_GetPlayerReply,
  },
  updateAndGetPlayer: {
    path: '/controller.FloController/UpdateAndGetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.UpdateAndGetPlayerRequest,
    responseType: controller_pb.UpdateAndGetPlayerReply,
    requestSerialize: serialize_controller_UpdateAndGetPlayerRequest,
    requestDeserialize: deserialize_controller_UpdateAndGetPlayerRequest,
    responseSerialize: serialize_controller_UpdateAndGetPlayerReply,
    responseDeserialize: deserialize_controller_UpdateAndGetPlayerReply,
  },
  // Lists all nodes
listNodes: {
    path: '/controller.FloController/ListNodes',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: controller_pb.ListNodesReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_controller_ListNodesReply,
    responseDeserialize: deserialize_controller_ListNodesReply,
  },
  // Lists games
listGames: {
    path: '/controller.FloController/ListGames',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.ListGamesRequest,
    responseType: controller_pb.ListGamesReply,
    requestSerialize: serialize_controller_ListGamesRequest,
    requestDeserialize: deserialize_controller_ListGamesRequest,
    responseSerialize: serialize_controller_ListGamesReply,
    responseDeserialize: deserialize_controller_ListGamesReply,
  },
  // Creates a new game
createGame: {
    path: '/controller.FloController/CreateGame',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.CreateGameRequest,
    responseType: controller_pb.CreateGameReply,
    requestSerialize: serialize_controller_CreateGameRequest,
    requestDeserialize: deserialize_controller_CreateGameRequest,
    responseSerialize: serialize_controller_CreateGameReply,
    responseDeserialize: deserialize_controller_CreateGameReply,
  },
  // Joins a game
joinGame: {
    path: '/controller.FloController/JoinGame',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.JoinGameRequest,
    responseType: controller_pb.JoinGameReply,
    requestSerialize: serialize_controller_JoinGameRequest,
    requestDeserialize: deserialize_controller_JoinGameRequest,
    responseSerialize: serialize_controller_JoinGameReply,
    responseDeserialize: deserialize_controller_JoinGameReply,
  },
  // Creates a join token
createJoinGameToken: {
    path: '/controller.FloController/CreateJoinGameToken',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.CreateJoinGameTokenRequest,
    responseType: controller_pb.CreateJoinGameTokenReply,
    requestSerialize: serialize_controller_CreateJoinGameTokenRequest,
    requestDeserialize: deserialize_controller_CreateJoinGameTokenRequest,
    responseSerialize: serialize_controller_CreateJoinGameTokenReply,
    responseDeserialize: deserialize_controller_CreateJoinGameTokenReply,
  },
  // Join a game by token
joinGameByToken: {
    path: '/controller.FloController/JoinGameByToken',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.JoinGameByTokenRequest,
    responseType: controller_pb.JoinGameReply,
    requestSerialize: serialize_controller_JoinGameByTokenRequest,
    requestDeserialize: deserialize_controller_JoinGameByTokenRequest,
    responseSerialize: serialize_controller_JoinGameReply,
    responseDeserialize: deserialize_controller_JoinGameReply,
  },
  // Leaves a game
leaveGame: {
    path: '/controller.FloController/LeaveGame',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.LeaveGameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_controller_LeaveGameRequest,
    requestDeserialize: deserialize_controller_LeaveGameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Select a node that will be used
selectGameNode: {
    path: '/controller.FloController/SelectGameNode',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.SelectGameNodeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_controller_SelectGameNodeRequest,
    requestDeserialize: deserialize_controller_SelectGameNodeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Cancels a game
cancelGame: {
    path: '/controller.FloController/CancelGame',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.CancelGameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_controller_CancelGameRequest,
    requestDeserialize: deserialize_controller_CancelGameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Imports map checksums
importMapChecksums: {
    path: '/controller.FloController/ImportMapChecksums',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.ImportMapChecksumsRequest,
    responseType: controller_pb.ImportMapChecksumsReply,
    requestSerialize: serialize_controller_ImportMapChecksumsRequest,
    requestDeserialize: deserialize_controller_ImportMapChecksumsRequest,
    responseSerialize: serialize_controller_ImportMapChecksumsReply,
    responseDeserialize: deserialize_controller_ImportMapChecksumsReply,
  },
  searchMapChecksum: {
    path: '/controller.FloController/SearchMapChecksum',
    requestStream: false,
    responseStream: false,
    requestType: controller_pb.SearchMapChecksumRequest,
    responseType: controller_pb.SearchMapChecksumReply,
    requestSerialize: serialize_controller_SearchMapChecksumRequest,
    requestDeserialize: deserialize_controller_SearchMapChecksumRequest,
    responseSerialize: serialize_controller_SearchMapChecksumReply,
    responseDeserialize: deserialize_controller_SearchMapChecksumReply,
  },
};

exports.FloControllerClient = grpc.makeGenericClientConstructor(FloControllerService);
