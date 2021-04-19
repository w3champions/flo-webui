import { NowRequest, NowResponse } from "@now/node";
import { withErrorHandler } from "../../helpers/error";

const { FLO_SERVICE } = process.env

export default withErrorHandler(async function env(
  req: NowRequest,
  res: NowResponse
) {
  res.json({
    FLO_SERVICE
  });
});
