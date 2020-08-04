import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler, FloError, FloErrorCode } from "../../helpers/error";
import { withAuthorized } from "../../helpers/auth";
import { withMethod } from "../../helpers/method";
import { joinGameByToken, JoinGameByTokenRequest } from "../../server/service";
import { PlayerRef } from "../../types/player";
import joi from "@hapi/joi";

const Schema = joi.object({
  token: joi.string().required(),
});

export default withErrorHandler(
  withMethod(
    "PUT",
    withAuthorized(async function apiCreateJoinGameToken(
      req: NowRequest,
      res: NowResponse,
      player: PlayerRef
    ) {
      const { token } = await Schema.validateAsync(
        req.body as { token: string }
      );

      const request = new JoinGameByTokenRequest()
        .setPlayerId(player.id)
        .setToken(token);

      const game = await joinGameByToken(request);

      res.json(game.getGame().toObject());
    })
  )
);
