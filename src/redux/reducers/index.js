import { combineReducers } from "redux";
import profile from "./profile";
import water from "./water";

const rootReducer = combineReducers({
  profile,
  water,
});

export default rootReducer;
