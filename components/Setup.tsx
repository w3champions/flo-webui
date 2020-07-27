import { Icon, Callout, Intent } from "@blueprintjs/core";
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

export default function Setup() {
  const playerLoading = useSelector(selectPlayerInfoLoading);
  const playerError = useSelector(selectPlayerInfoError);
  const player = useSelector(selectPlayerInfo);
  const wsReady = useSelector(selectWsReady);
  const playerSession = useSelector(selectWsPlayerSession);

  return (
    <>
      <h1 className="mb-2 text-3xl font-semibold">Setup</h1>
      <p className="mb-6">There are some required settings before use.</p>

      {playerLoading && <Spinner />}
      {!playerLoading && (
        <>
          <div className="mb-2 flex flex-row items-center justify-center text-xl font-semibold">
            <StatusIcon ok={!!player} />
            <span className="flex-1">Sign in</span>
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
                  <span className="text-blue-600 font-semibold">
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

      <div className="mb-2 mt-3 flex flex-row items-center justify-center text-xl font-semibold">
        <StatusIcon ok={wsReady} />
        <span className="flex-1 block">Connect to your computer</span>
      </div>
      <div className="mb-6">
        <ConnectWs />
      </div>

      <div className="mb-2 mt-3 flex flex-row items-center justify-center text-xl font-semibold">
        <StatusIcon ok={!!playerSession} />
        <span className="flex-1 block">Connect to server</span>
      </div>
      <div>
        <ConnectLobby />
      </div>
    </>
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
