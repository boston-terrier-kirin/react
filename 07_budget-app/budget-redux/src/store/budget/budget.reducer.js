import { BUDGET_ACTION_TYPES } from './budget.types';

const initialState = {
  entries: [],
  income: 0,
  expense: 0,
  balance: 0,
};

const calc = (latestEntries) => {
  const { income, expense } = latestEntries.reduce(
    (acc, entry) => {
      if (entry.isExpense) {
        return { ...acc, expense: acc.expense + Number(entry.value) };
      }
      return { ...acc, income: acc.income + Number(entry.value) };
    },
    {
      income: 0,
      expense: 0,
    }
  );

  return {
    income,
    expense,
    balance: income - expense,
  };
};

export const budgetReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUDGET_ACTION_TYPES.FETCH_ENTRIES:
      const { income, expense, balance } = calc(payload);
      return {
        ...state,
        entries: payload,
        income,
        expense,
        balance,
      };
    case BUDGET_ACTION_TYPES.ADD_ENTRY:
      const latestEntriesToAdd = [...state.entries, payload];
      const {
        income: incomeToAdd,
        expense: expenseToAdd,
        balance: balanceToAdd,
      } = calc(latestEntriesToAdd);

      return {
        ...state,
        entries: latestEntriesToAdd,
        income: incomeToAdd,
        expense: expenseToAdd,
        balance: balanceToAdd,
      };

    case BUDGET_ACTION_TYPES.EDIT_ENTRY:
      const latestEntriesToEdit = state.entries.map((entry) => {
        if (entry.id === payload.id) {
          return payload;
        }
        return entry;
      });
      const {
        income: incomeToEdit,
        expense: expenseToEdit,
        balance: balanceToEdit,
      } = calc(latestEntriesToEdit);

      console.log('★', latestEntriesToEdit);

      return {
        ...state,
        entries: latestEntriesToEdit,
        income: incomeToEdit,
        expense: expenseToEdit,
        balance: balanceToEdit,
      };

    case BUDGET_ACTION_TYPES.DELETE_ENTRY:
      const latestEntriesToDelete = state.entries.filter(
        (entry) => entry.id !== payload
      );
      const {
        income: incomeToDelete,
        expense: expenseToDelete,
        balance: balanceToDelete,
      } = calc(latestEntriesToDelete);

      return {
        ...state,
        entries: latestEntriesToDelete,
        income: incomeToDelete,
        expense: expenseToDelete,
        balance: balanceToDelete,
      };
    default:
      return state;
  }
};
