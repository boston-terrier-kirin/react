import { combineReducers } from 'redux';
import { budgetReducer } from './budget/budget.reducer';
import { modalReducer } from './modal/modal.reducer';

export const rootReducer = combineReducers({
  budget: budgetReducer,
  modal: modalReducer,
});
