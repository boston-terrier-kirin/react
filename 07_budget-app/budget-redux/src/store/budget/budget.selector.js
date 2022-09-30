export const selectEntries = (state) => {
  return state.budget.entries;
};

export const selectIncome = (state) => {
  return state.budget.income;
};

export const selectExpense = (state) => {
  return state.budget.expense;
};

export const selectBalance = (state) => {
  return state.budget.balance;
};
