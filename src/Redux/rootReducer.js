import { combineReducers } from "redux";
import { authReducer } from "./Reducers/authReducer";
import { menuReducer } from "./Reducers/menuReducer";
import { userIdReducer } from "./Reducers/userIdReducer";

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  userIdReducer,
});

export default rootReducer;
