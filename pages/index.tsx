import { Layout } from "../components/Layout";
import { Icon, Card, Classes, Elevation } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useSelector } from "react-redux";
import { selectPlayerInfo, selectPlayerInfoLoading } from "../redux/store";
import {
  selectWsStatus,
  selectWsReady,
  selectWsPlayerSession,
  selectWsClientInfo,
} from "../redux/modules/ws";
import { withConnected } from "../providers/ws";
import { selectNodes } from "../redux/modules/node";
import { FlagIcon } from "../components/FlagIcon";
import ConnectWs from "../components/ConnectWs";
import MyPing from "../components/MyPing";

export default withConnected(function Home() {
  return (
    <Layout flex>
      <div className="flex flex-col">
        <div className="flex-initial flex flex-row space-x-4">
          <Card className="flex-initial" elevation={Elevation.TWO}>
            <h3 className="mb-3 text-lg font-semibold">Status</h3>
            <ConnectWs />
          </Card>
          <Card className="flex-initial" elevation={Elevation.TWO}>
            <h3 className="mb-3 text-lg font-semibold">Ping</h3>
            <MyPing />
          </Card>
        </div>
        <div className="flex-auto"></div>
      </div>
    </Layout>
  );
});
