import { Layout } from "../components/Layout";
import { Button, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import SignIn from "../components/SignIn";
import { useSelector } from "react-redux";
import {
  selectPlayerInfo,
  selectPlayerInfoLoading,
  selectSetupDone,
} from "../redux/store";
import { Spinner } from "../components/Spinner";
import ConnectWs from "../components/ConnectWs";
import {
  selectWsStatus,
  selectWsReady,
  selectWsPlayerSession,
} from "../redux/modules/ws";
import { WsStatus } from "../types/ws";
import ConnectLobby from "../components/ConnectLobby";
import { withConnected } from "../providers/ws";

export default withConnected(function Home() {
  const playerLoading = useSelector(selectPlayerInfoLoading);
  const player = useSelector(selectPlayerInfo);
  const wsReady = useSelector(selectWsReady);
  const playerSession = useSelector(selectWsPlayerSession);

  return (
    <Layout>
      <h1 className="mb-6 text-3xl font-semibold">
        Flo - Warcraft III Hosting Tool
      </h1>

      {playerLoading && <Spinner />}
      {!playerLoading && (
        <>
          <div className="mb-2 flex flex-row items-center justify-center text-xl font-semibold">
            <StatusIcon ok={!!player} />
            <span className="flex-1">Sign in</span>
          </div>
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
    </Layout>
  );
});

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
