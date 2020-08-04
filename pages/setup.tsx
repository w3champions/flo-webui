import { Icon, Callout, Intent, Classes } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import SignIn from "../components/SignIn";
import { useSelector } from "react-redux";
import {
  selectPlayerInfo,
  selectPlayerInfoLoading,
  selectPlayerInfoError,
  selectSetupDone,
} from "../redux/store";
import { Spinner } from "../components/Spinner";
import ConnectWs from "../components/ConnectWs";
import { selectWsReady, selectWsPlayerSession } from "../redux/modules/ws";
import ConnectLobby from "../components/ConnectLobby";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useWsSetupEffects } from "../providers/ws";
import { useAuth } from "../providers/auth";
import { FloErrorCode } from "../helpers/error";

export default function Setup() {
  const playerLoading = useSelector(selectPlayerInfoLoading);
  const playerError = useSelector(selectPlayerInfoError);
  const player = useSelector(selectPlayerInfo);
  const wsReady = useSelector(selectWsReady);
  const playerSession = useSelector(selectWsPlayerSession);
  const router = useRouter();
  const done = useSelector(selectSetupDone);

  useWsSetupEffects();

  useEffect(() => {
    if (done) {
      router.replace("/");
    }
  }, [done]);

  return (
    <div className={`${Classes.DARK} p-24`}>
      <Head>
        <title>Flo - Warcraft III Hosting Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="flex flex-row justify-center items-center mb-6 text-3xl space-x-4">
        <img
          className="flex-initial shadow"
          src="/flo.svg"
          width={48}
          height={48}
        />
        <span className="flex-1 font-bold">
          Flo<span>&nbsp;- Warcraft III Hosting Tool</span>
        </span>
      </h1>
      <h2 className="mb-6 text-2xl">
        Welcome! Let's setup Flo in a few simple steps.
      </h2>

      {playerLoading && <Spinner />}
      {!playerLoading && (
        <>
          <div className="mb-2 flex flex-row items-center justify-center text-xl font-semibold">
            <StatusIcon ok={!!player} />
            <span className="flex-1">1. Sign in your Battle.net® account</span>
          </div>
          {playerError && playerError.code !== FloErrorCode.Unauthorized && (
            <Callout intent={Intent.DANGER} title="Flo Service Error">
              {playerError.message}
            </Callout>
          )}
          {(!playerError || playerError.code === FloErrorCode.Unauthorized) && (
            <div className="mb-6">
              {player ? (
                <p>
                  Hello,{" "}
                  <span className="flo-text-info font-semibold">
                    {player.name}
                  </span>
                  .
                </p>
              ) : (
                <SignIn />
              )}
            </div>
          )}
        </>
      )}

      <div className={player ? "" : "hidden"}>
        <div className="mb-2 mt-3 flex flex-row items-center justify-center text-xl font-semibold">
          <StatusIcon ok={wsReady} />
          <span className="flex-1 block">2. Connect to your computer</span>
        </div>
        <div className="mb-6">
          <ConnectWs />
        </div>
      </div>

      <div className={wsReady ? "" : "hidden"}>
        <div className="mb-2 mt-3 flex flex-row items-center justify-center text-xl font-semibold">
          <StatusIcon ok={!!playerSession} />
          <span className="flex-1 block">3. Connect to server</span>
        </div>
        <div className="mb-6">
          <ConnectLobby />
        </div>
      </div>

      {done ? (
        <div>
          <Spinner />
        </div>
      ) : null}
    </div>
  );
}

function StatusIcon(props: { ok: boolean }) {
  return props.ok ? (
    <Icon
      icon={IconNames.TICK_CIRCLE}
      className="mr-2 flex-initial text-green-600"
      style={{ height: 16 }}
    ></Icon>
  ) : (
    <Icon
      icon={IconNames.WARNING_SIGN}
      className="mr-2 flex-initial text-orange-600"
      style={{ height: 16 }}
    ></Icon>
  );
}
