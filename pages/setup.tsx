import {
  Icon,
  Callout,
  Intent,
  Classes,
  Dialog,
  Button,
} from "@blueprintjs/core";
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
import {
  selectWsReady,
  selectWsPlayerSession,
  selectWsPlayerSessionLoadStatus,
  selectWsDisconnectError,
} from "../redux/modules/ws";
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
  const disconnectError = useSelector(selectWsDisconnectError);
  const router = useRouter();
  const done = useSelector(selectSetupDone);

  useWsSetupEffects();

  useEffect(() => {
    if (done) {
      console.log("setup check passed, redirecting to /");
      router.replace("/");
    }
  }, [done]);

  return (
    <div className={`${Classes.DARK} p-24`}>
      <h1 className="mb-6 text-3xl">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAoCAMAAAC8TlQPAAAC1lBMVEUAAAAAAACRkZH///8AAAAAAAD///////+/v7/18en5+fn9/f3l5eXs7OwAAAAAAAAAAADU1NT+/v7z8/OxsbEAAAD///8/Pz////////8AAAD///8AAAAAAAD///9iYmKjo6N9fX0AAAD///8AAAD////Kysr+/v7////d3d0AAADipySnp6f09PT5+fn7+/vMzMyrq6v7+/v8/Pz7+/vCwsLo6OjUkADx8fHT09OgoKC7u7tQUFDv7+9fX1+QkJDkrirWkgD9/f3bmw339/fb29vV1dXIyMi3t7etra2ZmZmAgIA8LQqHh4cTDwRJMgL39/fWlgro6Oh0dHTd3d1/f3+urq5VVVW4uLjm5uaUlJTkryjvylN7e3v19fVraWLrvUnt7e37+/vx8fG2fADq6urUmx7y8vKNYACehzjz8/OJdC/FxcW8gQHXkwC/v79WQxDt7e2pcwDsyFN3UQHt7e1sbGwGBAGzs7Potz1LS0umpqYHBQDNzc1zc3P14GXnuUjuyFKdjmazm1/sxlHv3GTQjgDz1VvqwU7hqSDgxFXiuEndnxX23GHTulHNqUT4+PjrvEl7cl3Ht1O8ljqzgRLUkQDe3t6XhFZSUlIwMDC2pUr29va0egCfn5/S0tLmsjEAAADiqSTe3t51aS1nRgBqUhg2NjaXZwCWlpYAAAC+vr6SYwD7+/viu0xmZmbov03CwsKOjo4YEQLz1FlISEj39/egoKDa2tpHMgPpuEEAAADTkADZlADKysrlsir////rvEn66mrwylLy0Fj23mHxzlbuxU/sv0vy01jtw03442b34GT23GD011398G/01l3vyFHqu0P77W3wzFXenxHZlAD55Wj45Gfz1VrswEHjqiX+/v7i4uK+vr6QkJB/f3+XjHC8pGPfuFLnsjXntTLlrzHhpiDbmgnbmAbW1taysrKOh3atnGvMr1/WuFzmvVDqu0ZCgA66AAAAwHRSTlMABWeJQA44EokB7wXAzyMCCqMK3n4XXEkpSSmjOAZxUnFcMBwR35fkwLIdA2m+lXdwPuzorIJ8fG1kTS8kFhYH/fXFt7WVf3V0X1dUUUdHPj06NzImJiEfHBkY/v3y29nNzMjEvbSopI2MhX18a2dlXltbU0ZFPj43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" />
        <br />
        <span className="font-bold">W3Champions Hostbot Service</span>
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
      <Dialog
        className={Classes.DARK}
        isOpen={!!disconnectError}
        icon={IconNames.ERROR}
        title="Connection Closed"
      >
        {disconnectError && (
          <div className={Classes.DIALOG_BODY}>{disconnectError.message}</div>
        )}
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button
              intent={Intent.PRIMARY}
              onClick={() => {
                window.location.reload();
              }}
            >
              Reconnect
            </Button>
          </div>
        </div>
      </Dialog>
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
