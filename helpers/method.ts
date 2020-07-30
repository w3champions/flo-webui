import { Fn, FloError, FloErrorCode } from "./error";
import { NowRequest, NowResponse } from "@now/node";

export function withMethod(method: "GET" | "POST" | "PUT" | "DELETE", f: Fn) {
  return async (req: NowRequest, res: NowResponse) => {
    if (req.method !== method) {
      throw new FloError("Method not allowed.", FloErrorCode.MethodNotAllowed);
    }
    await f(req, res);
  };
}
