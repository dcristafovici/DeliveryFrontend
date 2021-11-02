import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { authReducer } from './reducers/authReducer';
import { restaurantReducer } from './reducers/restaurantReducer';
import { popupReducer } from './reducers/popupReducer';

export const rootReducer = combineReducers({
  asideReducer,
  authReducer,
  restaurantReducer,
  popupReducer,
});

export type RootState = ReturnType<typeof rootReducer>
