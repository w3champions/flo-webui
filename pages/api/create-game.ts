import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler } from "../../helpers/error";
import { withAuthorized } from "../../helpers/auth";
import { PlayerRef } from "../../types/player";
import { CreateGameRequestBody } from "../../types/game";
import joi from "@hapi/joi";
import { withMethod } from "../../helpers/method";
import {
  controller
} from "../../generated/controller";
import { game } from "../../generated/game";
import { getUint8ArrayFromHexString } from "../../helpers/bytes";
import { createGame } from "../../server/service";

const MapPlayerSchema = joi.object({
  name: joi.string().required(),
  type: joi.number().required(),
  race: joi.number().required(),
  flags: joi.number().required(),
});

const MapForceSchema = joi.object({
  name: joi.string().required(),
  flags: joi.number().required(),
  player_set: joi.number().required(),
});

const Schema = joi.object({
  name: joi.string().required(),
  map: joi
    .object({
      sha1: joi.string().required(),
      checksum: joi.number(),
      name: joi.string().required(),
      description: joi.string().required(),
      author: joi.string().required(),
      path: joi.string().required(),
      width: joi.number().required(),
      height: joi.number().required(),
      players: joi.array().items(MapPlayerSchema),
      forces: joi.array().items(MapForceSchema),
    })
    .required(),
  is_private: joi.boolean().required(),
  is_live: joi.boolean().required(),
  enable_ping_equalizer: joi.boolean(),
});

export default withErrorHandler(
  withMethod(
    "POST",
    withAuthorized(async function apiCreateGame(
      req: NowRequest,
      res: NowResponse,
      player: PlayerRef
    ) {
      const payload: CreateGameRequestBody = await Schema.validateAsync(
        req.body
      );

      const map = new game.Map({
        sha1: getUint8ArrayFromHexString(payload.map.sha1),
        checksum: payload.map.checksum,
        name: payload.map.name,
        description: payload.map.description,
        author: payload.map.author,
        path: payload.map.path,
        width: payload.map.width,
        height: payload.map.height,
        players: payload.map.players.map((p) =>
          new game.MapPlayer({
            name: p.name,
            type: p.type,
            race: p.race,
            flags: p.flags
          })
        ),
        forces: payload.map.forces.map((f) =>
          new game.MapForce({
            name: f.name,
            flags: f.flags,
            player_set: f.player_set
          })
        ),
      })

      const createGameRequest = new controller.CreateGameRequest({
        player_id: player.id,
        name: payload.name,
        map,
        is_private: payload.is_private,
        is_live: payload.is_live,
      })

      const createGameReply = await createGame(createGameRequest);

      res.json(createGameReply.game);
    })
  )
);
