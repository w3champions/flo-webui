import { GetServerSideProps } from "next";
import { verify } from "../helpers/jwt";
import joi from "@hapi/joi";
import { AuthorizeState, BearerToken, UserInfo } from "../types/oauth";
import { useRouter } from "next/router";
import { getOAuthRedirectUri } from "../helpers/oauth";
import { getServerApiClient } from "../helpers/api-client";
import { URLSearchParams } from "url";
import { Alert } from "../components/Alert";
import { useEffect } from "react";
import { FLO_ACCESS_TOKEN_STORAGE_KEY } from "../const";
import * as protobuf_wrappers from "google-protobuf/google/protobuf/wrappers_pb";
import * as service from "../server/service";
import {
  PlayerSource,
  PlayerSourceState,
  BNetState,
} from "../generated/player_pb";

interface Props {
  error?: {
    message: string;
  };
  token?: string;
}

export default function OAuthCallback(props: Props) {
  const { token, error } = props;
  const router = useRouter();

  useEffect(() => {
    if (token) {
      localStorage.setItem(FLO_ACCESS_TOKEN_STORAGE_KEY, token);
      router.replace("/");
    } else {
      localStorage.removeItem(FLO_ACCESS_TOKEN_STORAGE_KEY);
    }
  }, [token]);

  if (error) {
    return <Alert message={error.message}></Alert>;
  }

  return <></>;
}

interface CallbackQuery {
  code: string;
  state: string;
}

const Schema = joi.object({
  code: joi.string().required(),
  state: joi.string().required(),
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { BLIZZARD_CLIENT_ID, BLIZZARD_CLIENT_SECRET } = process.env;
  const { code, state } = (await Schema.validateAsync(
    context.query
  )) as CallbackQuery;

  const stateVerified = verify<AuthorizeState>(state);

  const client = getServerApiClient();
  const getTokenUrl = `https://${stateVerified.region}.battle.net/oauth/token`;
  const params = new URLSearchParams();
  params.append("redirect_uri", getOAuthRedirectUri());
  params.append("scope", "openid");
  params.append("grant_type", "authorization_code");
  params.append("code", code);

  try {
    const token: BearerToken = await client
      .post(getTokenUrl, params.toString(), {
        auth: {
          username: BLIZZARD_CLIENT_ID,
          password: BLIZZARD_CLIENT_SECRET,
        },
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => res.data);

    const userInfo: UserInfo = await client
      .get(`https://eu.battle.net/oauth/userinfo`, {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
      .then((res) => res.data);

    const request = new service.UpdateAndGetPlayerRequest();
    const sourceState = new PlayerSourceState();
    sourceState.setBnet(
      new BNetState()
        .setAccountId(userInfo.id)
        .setAccessToken(token.access_token)
        .setAccessTokenExp(Math.floor(Date.now() / 1000) + token.expires_in)
    );
    const realm = new protobuf_wrappers.StringValue();
    realm.setValue(stateVerified.region);
    request
      .setName(userInfo.battletag)
      .setSource(PlayerSource.PLAYERSOURCEBNET)
      .setSourceId(userInfo.id.toString())
      .setSourceState(sourceState)
      .setRealm(realm);

    const reply = await service.updateAndGetPlayer(request);

    return {
      props: {
        token: reply.getToken(),
      } as Props,
    };
  } catch (error) {
    console.log(error.stack);
    return {
      props: {
        error: {
          message: error.message,
        },
      },
    };
  }
};
