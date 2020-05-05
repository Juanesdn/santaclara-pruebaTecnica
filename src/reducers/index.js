import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import RulesReducer from "./RulesReducer";

export default combineReducers({
  auth: AuthReducer,
  rules: RulesReducer,
});
