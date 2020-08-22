import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler, FloError, FloErrorCode } from "../../helpers/error";
import { withAuthorized } from "../../helpers/auth";
import { PlayerRef } from "../../types/player";
import { CreateGameRequestBody } from "../../types/game";
import joi from "@hapi/joi";
import { withMethod } from "../../helpers/method";
import {
  CreateGameRequest,
  SearchMapChecksumRequest,
} from "../../generated/controller_pb";
import { Map, MapPlayer, MapForce } from "../../generated/game_pb";
import { getUint8ArrayFromHexString } from "../../helpers/bytes";
import { searchMapChecksum, createGame } from "../../server/service";

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

      const checksumReply = await searchMapChecksum(
        new SearchMapChecksumRequest().setSha1(payload.map.sha1)
      );

      let checksum = payload.map.checksum;

      if (!checksumReply.hasChecksum() && !checksum) {
        throw new FloError(
          "Map checksum was not found.",
          FloErrorCode.BadRequest
        );
      } else {
        checksum = checksumReply.getChecksum().getValue();
      }

      const map = new Map()
        .setSha1(getUint8ArrayFromHexString(payload.map.sha1))
        .setChecksum(checksum)
        .setName(payload.map.name)
        .setDescription(payload.map.description)
        .setAuthor(payload.map.author)
        .setPath(payload.map.path)
        .setWidth(payload.map.width)
        .setHeight(payload.map.height)
        .setPlayersList(
          payload.map.players.map((p) =>
            new MapPlayer()
              .setName(p.name)
              .setType(p.type)
              .setRace(p.race)
              .setFlags(p.flags)
          )
        )
        .setForcesList(
          payload.map.forces.map((f) =>
            new MapForce()
              .setName(f.name)
              .setFlags(f.flags)
              .setPlayerSet(f.player_set)
          )
        );

      const createGameRequest = new CreateGameRequest()
        .setPlayerId(player.id)
        .setName(payload.name)
        .setMap(map)
        .setIsPrivate(payload.is_private)
        .setIsLive(payload.is_live);

      const createGameReply = await createGame(createGameRequest);

      res.json(createGameReply.getGame().toObject());
    })
  )
);
