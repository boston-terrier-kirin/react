import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todos/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="list-group-item list-group-item-action d-flex">
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
  );
}

export default TodoItem;
