import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler, FloError, FloErrorCode } from "../../helpers/error";
import { withAuthorized } from "../../helpers/auth";
import { withMethod } from "../../helpers/method";
import { LeaveGameRequest, leaveGame } from "../../server/service";
import { PlayerRef } from "../../types/player";
import joi from "@hapi/joi";
import { LeaveGameRequestBody } from "../../types/game";

const Schema = joi.object({
  game_id: joi.number().required(),
});

export default withErrorHandler(
  withMethod(
    "PUT",
    withAuthorized(async function apiCreateGame(
      req: NowRequest,
      res: NowResponse,
      player: PlayerRef
    ) {
      const { game_id } = await Schema.validateAsync(
        req.body as LeaveGameRequestBody
      );

      const request = new LeaveGameRequest()
        .setPlayerId(player.id)
        .setGameId(game_id);

      await leaveGame(request);

      res.status(204).end();
    })
  )
);
