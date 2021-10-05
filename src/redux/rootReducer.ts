import { combineReducers } from 'redux';
import { asideReducer } from './reducers/asideReducer';
import { authReducer } from './reducers/authReducer';

export const rootReducer = combineReducers({
  asideReducer,
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>
