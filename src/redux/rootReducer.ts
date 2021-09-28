import { combineReducers } from 'redux';
import { towerReducer } from './reducers/towerReducer';
import { asideReducer } from './reducers/asideReducer';

export const rootReducer = combineReducers({
  towerReducer,
  asideReducer,
});

export type RootState = ReturnType<typeof rootReducer>
