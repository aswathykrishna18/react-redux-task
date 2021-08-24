import { combineReducers } from 'redux';
import tableReducer from './table/reducer';
import authReducer from './auth/reducer';
export default combineReducers({
 table: tableReducer,
 auth: authReducer
});