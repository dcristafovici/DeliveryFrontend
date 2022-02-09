import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
  asideReducer,
  userReducer,
});
