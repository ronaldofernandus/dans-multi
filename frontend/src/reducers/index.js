import { combineReducers } from "redux";
import homeReducers from "./home";

import profileReducers from "./user";

export default combineReducers({
  homeReducers,
  profileReducers,
});
