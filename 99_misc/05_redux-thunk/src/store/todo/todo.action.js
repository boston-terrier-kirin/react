import { TODO_ACTION_TYPES } from './todo.types';

export const getTodo = (todoId) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const data = await res.json();

    dispatch({
      type: TODO_ACTION_TYPES.ADD_TODO,
      payload: data,
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: TODO_ACTION_TYPES.DELETE_TODO,
      payload: id,
    });
  };
};
