import { combineReducers } from "redux";
import { authReducer } from "./Reducers/authReducer";
import { menuReducer } from "./Reducers/menuReducer";
import { userIdReducer } from "./Reducers/userIdReducer";
import { experienceReducer } from "./Reducers/experienceReducer";

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  userIdReducer,
  experienceReducer,
});

export default rootReducer;
