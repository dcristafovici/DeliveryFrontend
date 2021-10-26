import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { authReducer } from './reducers/authReducer';
import { restaurantReducer } from './reducers/restaurantReducer';

export const rootReducer = combineReducers({
  asideReducer,
  authReducer,
  restaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>
