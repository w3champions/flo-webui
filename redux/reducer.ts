import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth";
import wsReducer from "./modules/ws";

const rootReducer = combineReducers({
  auth: authReducer,
  ws: wsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
