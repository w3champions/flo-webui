import { NowRequest, NowResponse } from "@now/node";
import { handleError } from "../../helpers/error";
import { sign } from "../../helpers/jwt";
import joi from "@hapi/joi";
import { URL } from "url";
import { AuthorizeState } from "../../types/oauth";
import { getOAuthRedirectUri } from "../../helpers/oauth";

const { BLIZZARD_CLIENT_ID } = process.env;

const Schema = joi.object({
  region: joi.string().valid("us", "eu"),
});

interface GetAuthorizeUrlRequest {
  region: string;
}

export default handleError(async function getAuthorizeUrl(
  req: NowRequest,
  res: NowResponse
) {
  const { region } = (await Schema.validateAsync({
    region: "eu",
    ...req.query,
  })) as GetAuthorizeUrlRequest;

  const url = new URL(`https://${region}.battle.net/oauth/authorize`);
  url.searchParams.append("client_id", BLIZZARD_CLIENT_ID);
  url.searchParams.append("scope", "openid");
  url.searchParams.append(
    "state",
    sign({
      region,
    } as AuthorizeState)
  );
  url.searchParams.append("redirect_uri", getOAuthRedirectUri());
  url.searchParams.append("response_type", "code");

  res.json({
    url: url.href,
  });
});
