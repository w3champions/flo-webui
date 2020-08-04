import { Layout } from "../components/Layout";
import { NonIdealState, Callout, Intent, Button } from "@blueprintjs/core";
import { withConnected } from "../providers/ws";
import { useRouter } from "next/router";
import { useApiClient } from "../helpers/api-client";
import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { GameInfo } from "../types/lobby";
import Link from "next/link";

export default withConnected(function Join() {
  const router = useRouter();
  const apiClient = useApiClient();
  const [error, setError] = useState(null as Error);
  const [game, setGame] = useState(null as GameInfo);
  const { token } = router.query;

  const join = async () => {
    try {
      const game = await apiClient
        .put("/api/join-game-by-token", {
          token,
        })
        .then((res) => res.data);
      setGame(game);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    join();
  }, []);

  if (error) {
    return (
      <Layout flex noNav>
        <NonIdealState
          action={
            <Link href="/">
              <Button>Back to Dashboard</Button>
            </Link>
          }
          description={
            <Callout intent={Intent.DANGER} title="Join game failed">
              {error.message}
            </Callout>
          }
        ></NonIdealState>
      </Layout>
    );
  }

  return (
    <Layout flex noNav>
      <NonIdealState
        title={game ? `Joining Game#${game.id}...` : "Fetching Game Data..."}
      >
        <Spinner />
      </NonIdealState>
    </Layout>
  );
});
