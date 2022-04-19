import { combineReducers } from "redux";
import toggleSideReducer from "./toggleSideReducer";
import userListReducer from "./userReducer";
import dataStateReducer from "./dataStateReducer";

const reducers = combineReducers({
  toggleSide: toggleSideReducer,
  users: userListReducer,
  dataState: dataStateReducer,
});

export default reducers;
