import { NowRequest, NowResponse } from "@now/node";
import { handleError } from "../../helpers/error";
import joi from "@hapi/joi";
import { getServerApiClient } from "../../helpers/api-client";

const Schema = joi.object({
  accessToken: joi.string().required(),
});

interface GetPlayerInfoRequest {
  accessToken: string;
}

export default handleError(async function getPlayerInfo(
  req: NowRequest,
  res: NowResponse
) {
  const { accessToken } = (await Schema.validateAsync(
    req.query
  )) as GetPlayerInfoRequest;

  const userInfo = await getServerApiClient()
    .get(`https://eu.battle.net/oauth/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data);

  console.log(userInfo);

  res.json({
    player_info: userInfo,
  });
});
