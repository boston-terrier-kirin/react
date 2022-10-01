export const selectTodos = (state) => {
  return state.todos.todos;
};

export const selectTodosCount = (state) => {
  return state.todos.numOfTodos;
};
