import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler } from "../../helpers/error";
import {
  getPlayerByToken,
  controller,
} from "../../server/service";
import joi from "@hapi/joi";
import { PlayerRef } from "../../types/player";

const Schema = joi.object({
  token: joi.string().required(),
});

interface Body {
  token: string;
}

export default withErrorHandler(async function getPlayerInfoByToken(
  req: NowRequest,
  res: NowResponse
) {
  const { token } = (await Schema.validateAsync(req.body)) as Body;

  const request = new controller.GetPlayerByTokenRequest({
    token
  });
  const reply = await getPlayerByToken(request);
  const player = reply.player;

  res.json({
    id: player.id,
    name: player.name,
    source: player.source as number,
  } as PlayerRef);
});
