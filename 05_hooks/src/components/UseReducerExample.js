import React, { useState, useReducer } from 'react';
import Desc from './Desc';
import DescItem from './DescItem';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        numOfTasks: state.numOfTasks + 1,
        todos: [action.payload, ...state.todos],
      };
    case 'DELETE_TASK':
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};

function UseReducerExample() {
  const [taskId, setTaskId] = useState(1);

  const initialState = {
    numOfTasks: 0,
    todos: [],
  };
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const onAdd = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`
    );
    const data = await res.json();

    dispatch({
      type: 'ADD_TASK',
      payload: data,
    });

    setTaskId((prev) => prev + 1);
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    });
  };

  return (
    <div>
      <Desc title="UseReducerExample">
        <DescItem>useReducerで追加と削除。</DescItem>
      </Desc>

      <div>
        <button className="btn btn-primary" onClick={onAdd}>
          Get Task
        </button>
        <ul className="mt-3 ps-0">
          {tasks.todos.map((todo) => (
            <li
              className="list-group-item list-group-item-action d-flex"
              key={todo.id}
            >
              <span className="me-auto">
                {todo.id} / {todo.title}
              </span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(todo.id)}
              >
                <i className="bi bi-trash"></i> DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseReducerExample;
