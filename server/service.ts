import * as grpc from '@grpc/grpc-js';
import { promisify } from "util";
import { FloControllerClient } from "../generated/controller_grpc_pb";
import {
  GetPlayerByTokenRequest,
  UpdateAndGetPlayerRequest,
  UpdateAndGetPlayerReply,
  GetPlayerReply,
  SearchMapChecksumRequest,
  SearchMapChecksumReply,
  CreateGameRequest,
  CreateGameReply,
  LeaveGameRequest,
  CreateJoinGameTokenRequest,
  CreateJoinGameTokenReply,
  JoinGameByTokenRequest,
  JoinGameReply,
  GetGameRequest,
  GetGameReply,
} from "../generated/controller_pb";
import { FloError, FloErrorCode } from "../helpers/error";
import * as player from "../generated/player_pb";
import * as game from "../generated/game_pb";
import { Game } from '../generated/game_pb';

export { player, game };

const { FLO_SERVICE, FLO_SERVICE_SECRET } = process.env;

const Client = new FloControllerClient(
  FLO_SERVICE,
  grpc.credentials.createInsecure()
);

const AuthMetadata = new grpc.Metadata();
AuthMetadata.add("x-flo-secret", FLO_SERVICE_SECRET);

type GrpcCall<TRequest, TReply> = (
  req: TRequest,
  meta?: grpc.Metadata
) => Promise<TReply>;

function wrap<TRequest, TReply>(
  f: GrpcCall<TRequest, TReply>
): GrpcCall<TRequest, TReply> {
  return async (req: TRequest, meta: grpc.Metadata) => {
    try {
      if (meta) {
        const merge = new grpc.Metadata();
        for (const [k, v] of Object.entries(meta.getMap())) {
          merge.add(k, v);
        }
        for (const [k, v] of Object.entries(AuthMetadata.getMap())) {
          merge.add(k, v);
        }
        return await f(req, meta);
      } else {
        return await f(req, AuthMetadata);
      }
    } catch (e) {
      const error = new FloError(e.message, FloErrorCode.FloService);
      error.data = {
        code: e.code,
      };
      throw error;
    }
  };
}

export { GetPlayerByTokenRequest, GetPlayerReply };

export const getPlayerByToken = wrap(
  promisify<GrpcCall<GetPlayerByTokenRequest, GetPlayerReply>>(
    Client.getPlayerByToken.bind(Client)
  )
);

export { UpdateAndGetPlayerRequest, UpdateAndGetPlayerReply };

export const updateAndGetPlayer = wrap(
  promisify<GrpcCall<UpdateAndGetPlayerRequest, UpdateAndGetPlayerReply>>(
    Client.updateAndGetPlayer.bind(Client)
  )
);

export { SearchMapChecksumRequest, SearchMapChecksumReply };

export const searchMapChecksum = wrap(
  promisify<GrpcCall<SearchMapChecksumRequest, SearchMapChecksumReply>>(
    Client.searchMapChecksum.bind(Client)
  )
);

export { CreateGameRequest, CreateGameReply };

export const createGame = wrap(
  promisify<GrpcCall<CreateGameRequest, CreateGameReply>>(
    Client.createGame.bind(Client)
  )
);

export { LeaveGameRequest };
export const leaveGame = wrap(
  promisify<GrpcCall<LeaveGameRequest, void>>(Client.leaveGame.bind(Client))
);

export { CreateJoinGameTokenRequest, CreateJoinGameTokenReply };
export const createJoinGameToken = wrap(
  promisify<GrpcCall<CreateJoinGameTokenRequest, CreateJoinGameTokenReply>>(
    Client.createJoinGameToken.bind(Client)
  )
);

export { JoinGameByTokenRequest, JoinGameReply };
export const joinGameByToken = wrap(
  promisify<GrpcCall<JoinGameByTokenRequest, JoinGameReply>>(
    Client.joinGameByToken.bind(Client)
  )
);

export { Game, GetGameRequest, GetGameReply };
export const getGame = wrap(
  promisify<GrpcCall<GetGameRequest, GetGameReply>>(
    Client.getGame.bind(Client)
  )
);
