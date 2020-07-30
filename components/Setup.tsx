import { Icon, Callout, Intent, Classes } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import SignIn from "../components/SignIn";
import { useSelector } from "react-redux";
import {
  selectPlayerInfo,
  selectPlayerInfoLoading,
  selectPlayerInfoError,
} from "../redux/store";
import { Spinner } from "../components/Spinner";
import ConnectWs from "../components/ConnectWs";
import { selectWsReady, selectWsPlayerSession } from "../redux/modules/ws";
import ConnectLobby from "../components/ConnectLobby";
import Head from "next/head";

export default function Setup() {
  const playerLoading = useSelector(selectPlayerInfoLoading);
  const playerError = useSelector(selectPlayerInfoError);
  const player = useSelector(selectPlayerInfo);
  const wsReady = useSelector(selectWsReady);
  const playerSession = useSelector(selectWsPlayerSession);

  return (
    <div className={`${Classes.DARK} p-24`}>
      <Head>
        <title>Flo - Warcraft III Hosting Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-6 text-3xl">
        <span className="font-bold">Flo</span>
      </h1>
      <h2 className="mb-4 text-2xl text-orange-600">Setup Required</h2>

      {playerLoading && <Spinner />}
      {!playerLoading && (
        <>
          <div className="mb-2 flex flex-row items-center justify-center text-xl font-semibold">
            <StatusIcon ok={!!player} />
            <span className="flex-1">1. Sign in</span>
          </div>
          {playerError && (
            <Callout intent={Intent.DANGER} title="Flo Service Error">
              {playerError.message}
            </Callout>
          )}
          {!playerError && (
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
        <div>
          <ConnectLobby />
        </div>
      </div>
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
