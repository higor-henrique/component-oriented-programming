import { criptocoinReducer } from "./criptocoin";
import { combineReducers } from "redux";
export const Reducers = combineReducers({
  coinState: criptocoinReducer,
});
