import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const composeEnhancers = (window && (window as any)
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const Store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));
