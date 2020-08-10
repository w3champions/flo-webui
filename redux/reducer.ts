import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth";
import wsReducer from "./modules/ws";
import mapReducer from "./modules/map";
import gameReducer from "./modules/game";
import nodeReducer from "./modules/node";

const rootReducer = combineReducers({
  auth: authReducer,
  ws: wsReducer,
  map: mapReducer,
  game: gameReducer,
  node: nodeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
