import { NowRequest, NowResponse } from "@now/node";
import { handleError } from "../../helpers/error";
import {
  getPlayerByToken,
  GetPlayerByTokenRequest,
} from "../../server/service";
import joi from "@hapi/joi";
import { PlayerRef } from "../../types/player";

const Schema = joi.object({
  token: joi.string().required(),
});

interface Body {
  token: string;
}

export default handleError(async function getPlayerInfoByToken(
  req: NowRequest,
  res: NowResponse
) {
  const { token } = (await Schema.validateAsync(req.body)) as Body;

  const request = new GetPlayerByTokenRequest();
  request.setToken(token);
  const reply = await getPlayerByToken(request);
  const player = reply.getPlayer();

  res.json({
    id: player.getId(),
    name: player.getName(),
    source: player.getSource() as number,
  } as PlayerRef);
});
