import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler, FloError, FloErrorCode } from "../../helpers/error";
import { withAuthorized } from "../../helpers/auth";
import { withMethod } from "../../helpers/method";
import {
  controller,
  createJoinGameToken
} from "../../server/service";
import { PlayerRef } from "../../types/player";
import joi from "@hapi/joi";
import { CreateJoinGameTokenBody } from "../../types/game";

const Schema = joi.object({
  game_id: joi.number().required(),
});

export default withErrorHandler(
  withMethod(
    "POST",
    withAuthorized(async function apiCreateJoinGameToken(
      req: NowRequest,
      res: NowResponse,
      player: PlayerRef
    ) {
      const { game_id } = await Schema.validateAsync(
        req.body as CreateJoinGameTokenBody
      );

      const request = new controller.CreateJoinGameTokenRequest({
        player_id: player.id,
        game_id: game_id.id,
      })

      const token = await createJoinGameToken(request);

      res.json(token.toObject());
    })
  )
);
