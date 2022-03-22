import { combineReducers } from 'redux'
import { authReducer } from './Reducers/authReducer';
import { menuReducer } from './Reducers/menuReducer';

const rootReducer = combineReducers({
authReducer, menuReducer
});

export default rootReducer;