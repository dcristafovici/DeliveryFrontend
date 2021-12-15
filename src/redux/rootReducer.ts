import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { restaurantReducer } from './reducers/restaurantReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
  asideReducer,
  restaurantReducer,
  userReducer,
});
