import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../store/todo/todo.action';
import { selectTodos } from '../store/todo/toto.selector';
import Todo from './Todo';

function Todos() {
  const [todoId, setTodoId] = useState(1);

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const onAdd = async () => {
    dispatch(getTodo(todoId));
    setTodoId((prev) => prev + 1);
  };

  return (
    <div className="container mt-3">
      <button className="btn btn-primary" onClick={onAdd}>
        Get Task
      </button>
      <ul className="mt-3 ps-0">
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
