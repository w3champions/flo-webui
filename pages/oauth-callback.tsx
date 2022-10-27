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
import * as service from "../server/service";
import {
  player
} from "../generated/player";
import { useAuth } from "../providers/auth";

interface Props {
  error?: {
    message: string;
  };
  token?: string;
}

export default function OAuthCallback(props: Props) {
  const { token, error } = props;
  const router = useRouter();
  const { setAuthToken } = useAuth();

  useEffect(() => {
    if (token) {
      localStorage.setItem(FLO_ACCESS_TOKEN_STORAGE_KEY, token);
      setAuthToken(token);
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

  const {region} = verify<AuthorizeState>(state);

  const client = getServerApiClient();
  const baseURL = region === 'global' ? `https://eu.battle.net` : `https://www.battlenet.com.cn`;
  const params = new URLSearchParams();
  params.append("redirect_uri", getOAuthRedirectUri());
  params.append("scope", "openid");
  params.append("grant_type", "authorization_code");
  params.append("code", code);

  try {
    const token: BearerToken = await client
      .post(`${baseURL}/oauth/token`, params.toString(), {
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
      .get(`${baseURL}/oauth/userinfo`, {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
      .then((res) => res.data);

    const sourceState = new player.PlayerSourceState(
      {
        bnet: new player.BNetState({
          account_id: userInfo.id,
          access_token: token.access_token,
          access_token_exp: Math.floor(Date.now() / 1000) + token.expires_in,
        })
      }
    );
    const realm = new service.g_wrappers.google.protobuf.StringValue({
      value: region
    });
    const request = new service.controller.UpdateAndGetPlayerRequest({
      name: userInfo.battletag,
      source: player.PlayerSource.PlayerSourceBNet,
      source_id: userInfo.id.toString(),
      source_state: sourceState,
      realm: realm
    });

    const reply = await service.updateAndGetPlayer(request);

    return {
      props: {
        token: reply.token,
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
