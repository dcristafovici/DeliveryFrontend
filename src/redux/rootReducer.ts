import { combineReducers } from 'redux';
import { towerReducer } from './reducers/towerReducer';

export const rootReducer = combineReducers({
  towerReducer,
});
