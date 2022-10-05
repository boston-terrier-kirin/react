import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
