import { combineReducers } from 'redux';
import { towerReducer } from './reducers/towerReducer';
import { asideReducer } from './reducers/asideReducer';
import { authReducer } from './reducers/authReducer';

export const rootReducer = combineReducers({
  towerReducer,
  asideReducer,
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>
