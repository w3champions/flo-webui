import { NowRequest, NowResponse } from "@now/node";
import { FloError, FloErrorCode } from "./error";
import { getPlayerByToken, controller } from "../server/service";
import { PlayerRef } from "../types/player";

export type Fn = (
  req: NowRequest,
  res: NowResponse,
  player: PlayerRef
) => void | Promise<void>;

const R_AUTH_HEADER_VALUE = /^Bearer (.+)$/;

export function withAuthorized(f: Fn) {
  return async (req: NowRequest, res: NowResponse) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const matches = authHeader.match(R_AUTH_HEADER_VALUE);
      if (matches) {
        const request = new controller.GetPlayerByTokenRequest({
          token: matches[1]
        });
        const reply = await getPlayerByToken(request);
        const player = reply.player;
        const playerRef = {
          id: player.id,
          name: player.name,
          source: player.source as number,
        } as PlayerRef;

        await f(req, res, playerRef);
      } else {
        throw new FloError(
          "Malformed Authorization header.",
          FloErrorCode.Unauthorized
        );
      }
    } else {
      throw new FloError("Access denied.", FloErrorCode.Unauthorized);
    }
  };
}
