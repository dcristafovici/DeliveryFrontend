import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { restaurantReducer } from './reducers/restaurantReducer';
import { popupReducer } from './reducers/popupReducer';

export const rootReducer = combineReducers({
  asideReducer,
  restaurantReducer,
  popupReducer,
});

export type RootState = ReturnType<typeof rootReducer>
