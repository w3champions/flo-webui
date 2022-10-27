import * as grpc from '@grpc/grpc-js';
import { promisify } from "util";
import { controller } from '../generated/controller';
import { game } from '../generated/game';
export {
  controller,
} from "../generated/controller";
import { FloError, FloErrorCode } from "../helpers/error";
export { player } from "../generated/player";
export { game } from "../generated/game";
export * as g_empty from '../generated/google/protobuf/empty'
export * as g_timestamp from '../generated/google/protobuf/timestamp'
export * as g_wrappers from '../generated/google/protobuf/wrappers'

const { FLO_SERVICE, FLO_SERVICE_SECRET } = process.env;
const Client = new controller.FloControllerClient(
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

type GetPlayerByTokenRequest = controller.GetPlayerByTokenRequest;
type GetPlayerReply = controller.GetPlayerReply;

export const getPlayerByToken = wrap(
  promisify<GrpcCall<GetPlayerByTokenRequest, GetPlayerReply>>(
    Client.GetPlayerByToken.bind(Client)
  )
);

type UpdateAndGetPlayerRequest = controller.UpdateAndGetPlayerRequest;
type UpdateAndGetPlayerReply = controller.UpdateAndGetPlayerReply;

export const updateAndGetPlayer = wrap(
  promisify<GrpcCall<UpdateAndGetPlayerRequest, UpdateAndGetPlayerReply>>(
    Client.UpdateAndGetPlayer.bind(Client)
  )
);

type SearchMapChecksumRequest = controller.SearchMapChecksumRequest;
type SearchMapChecksumReply = controller.SearchMapChecksumReply;

export const searchMapChecksum = wrap(
  promisify<GrpcCall<SearchMapChecksumRequest, SearchMapChecksumReply>>(
    Client.SearchMapChecksum.bind(Client)
  )
);

type CreateGameRequest = controller.CreateGameRequest;
type CreateGameReply = controller.CreateGameReply;

export const createGame = wrap(
  promisify<GrpcCall<CreateGameRequest, CreateGameReply>>(
    Client.CreateGame.bind(Client)
  )
);

type LeaveGameRequest = controller.LeaveGameRequest;
export const leaveGame = wrap(
  promisify<GrpcCall<LeaveGameRequest, void>>(Client.LeaveGame.bind(Client))
);

type CreateJoinGameTokenRequest = controller.CreateJoinGameTokenRequest;
type CreateJoinGameTokenReply = controller.CreateJoinGameTokenReply;

export const createJoinGameToken = wrap(
  promisify<GrpcCall<CreateJoinGameTokenRequest, CreateJoinGameTokenReply>>(
    Client.CreateJoinGameToken.bind(Client)
  )
);

type JoinGameByTokenRequest = controller.JoinGameByTokenRequest;
type JoinGameReply = controller.JoinGameReply;

export const joinGameByToken = wrap(
  promisify<GrpcCall<JoinGameByTokenRequest, JoinGameReply>>(
    Client.JoinGameByToken.bind(Client)
  )
);

type Game = game.Game;
type GetGameRequest = controller.GetGameRequest;
type GetGameReply = controller.GetGameReply;

export const getGame = wrap(
  promisify<GrpcCall<GetGameRequest, GetGameReply>>(
    Client.GetGame.bind(Client)
  )
);
