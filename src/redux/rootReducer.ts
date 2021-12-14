import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { restaurantReducer } from './reducers/restaurantReducer';

export const rootReducer = combineReducers({
  asideReducer,
  restaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>
