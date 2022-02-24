import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { showReducer } from './reducers/showReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
  asideReducer,
  userReducer,
  showReducer,
});
