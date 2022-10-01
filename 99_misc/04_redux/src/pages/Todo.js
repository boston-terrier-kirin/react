import { useDispatch } from 'react-redux';
import { TODO_ACTION_TYPES } from '../store/todo/todo.types';

function Todo({ todo }) {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch({
      type: TODO_ACTION_TYPES.DELETE_TODO,
      payload: id,
    });
  };

  return (
    <li className="list-group-item list-group-item-action d-flex" key={todo.id}>
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

export default Todo;
