import { budgets } from '../../apis/budgets';
import { BUDGET_ACTION_TYPES } from './budget.types';

export const fetchEntries = () => {
  return async (dispatch) => {
    const res = await budgets.get('/budgets');
    dispatch({ type: BUDGET_ACTION_TYPES.FETCH_ENTRIES, payload: res.data });
  };
};

export const addEntry = (entry) => {
  return async (dispatch) => {
    await budgets.post('/budgets', entry);
    dispatch({ type: BUDGET_ACTION_TYPES.ADD_ENTRY, payload: entry });
  };
};

export const editEntry = (entry) => {
  return async (dispatch) => {
    await budgets.patch(`/budgets/${entry.id}`, entry);
    dispatch({ type: BUDGET_ACTION_TYPES.EDIT_ENTRY, payload: entry });
  };
};

export const deleteEntry = (id) => {
  return async (dispatch) => {
    await budgets.delete(`/budgets/${id}`);
    dispatch({ type: BUDGET_ACTION_TYPES.DELETE_ENTRY, payload: id });
  };
};
