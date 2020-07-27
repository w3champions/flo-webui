import { NowRequest, NowResponse } from "@now/node";
import joi from "@hapi/joi";

export enum FloErrorCode {
  Unknown = "Unknown",
  BadRequest = "BadRequest",
  Unauthorized = "Unauthorized",
  BlizzardAPI = "Blizzard API",
  FloService = "FloService",
}

export class FloError extends Error {
  data?: any;

  constructor(m: string, public code: FloErrorCode) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, FloError.prototype);
  }
}

export type Fn = (req: NowRequest, res: NowResponse) => void | Promise<void>;

export function handleError(f: Fn): Fn {
  return async (req: NowRequest, res: NowResponse) => {
    try {
      await f(req, res);
    } catch (e) {
      let status = 500;
      let kind = "Unknown";
      let data = null;
      if (e instanceof FloError) {
        kind = e.code;
        if (e.code == FloErrorCode.Unauthorized) {
          status = 401;
        } else if (e.code == FloErrorCode.FloService) {
          if (e.data.code === 16 /* Unauthenticated */) {
            status = 401;
          }
        }
        if (e.data) {
          data = e.data;
        }
      } else if (joi.isError(e)) {
        kind = FloErrorCode.BadRequest;
        status = 400;
        data = e.details;
      }
      res.status(status).json({
        message: e.message,
        kind,
        data,
      });
    }
  };
}
