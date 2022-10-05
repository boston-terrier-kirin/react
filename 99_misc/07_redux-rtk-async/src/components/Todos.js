import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/todos/todoSlice';
import TodoItem from './TodoItem';

function Todos() {
  const [todoId, setTodoId] = useState(1);

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const onAdd = async () => {
    dispatch(addTodo(todoId));
    setTodoId((prev) => prev + 1);
  };

  return (
    <div className="container mt-3">
      <button className="btn btn-primary" onClick={onAdd}>
        <span>Get Task</span>
      </button>
      <ul className="mt-3 ps-0">
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
