import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root.reducer';

const middlewares = [process.env.NODE_ENV === 'development' && logger];

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const componeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, componeEnhancers);
