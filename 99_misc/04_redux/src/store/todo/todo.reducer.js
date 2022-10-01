import { TODO_ACTION_TYPES } from './todo.types';

const initialState = {
  numOfTasks: 0,
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      return {
        numOfTasks: state.numOfTasks + 1,
        todos: [action.payload, ...state.todos],
      };
    case TODO_ACTION_TYPES.DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        numOfTasks: state.numOfTasks - 1,
        todos: newTodos,
      };
    default:
      return state;
  }
};
