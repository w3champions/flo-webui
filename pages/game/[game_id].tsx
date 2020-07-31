import { Layout } from "../../components/Layout";
import { withConnected } from "../../providers/ws";

export default withConnected(function Game() {
  return <Layout>GAME!</Layout>;
});
