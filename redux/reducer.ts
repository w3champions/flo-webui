import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth";
import wsReducer from "./modules/ws";
import mapReducer from "./modules/map";
import gameReducer from "./modules/game";

const rootReducer = combineReducers({
  auth: authReducer,
  ws: wsReducer,
  map: mapReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
