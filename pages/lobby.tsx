import { Layout } from "../components/Layout";
import { withConnected } from "../providers/ws";
import PlayerColorPicker from "../components/PlayerColorPicker";

export default withConnected(function Game() {
  return (
    <Layout>
      <PlayerColorPicker />
    </Layout>
  );
});
