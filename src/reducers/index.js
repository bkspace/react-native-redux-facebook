import { combineReducers } from 'redux';
import routesReducer from './routes';
import authReducer from './auth';

export default combineReducers({
  route: routesReducer,
  auth: authReducer,
});
