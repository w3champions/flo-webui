import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler } from "../../helpers/error";
import { sign } from "../../helpers/jwt";
import joi from "@hapi/joi";
import { FloLobbyClient } from "../../generated/lobby_grpc_pb";
import { promisify } from "util";
import { ListGamesRequest, ListGamesReply } from "../../generated/lobby_pb";
import grpc from "grpc";

const client = new FloLobbyClient(
  "[::1]:4095",
  grpc.credentials.createInsecure()
);

export default withErrorHandler(async function listGames(
  req: NowRequest,
  res: NowResponse
) {
  var metadata = new grpc.Metadata();
  metadata.add("x-flo-secret", "TEST");
  const request = new ListGamesRequest();
  const reply: ListGamesReply = await promisify(client.listGames.bind(client))(
    request,
    metadata
  );

  res.json(reply.toObject());
});
