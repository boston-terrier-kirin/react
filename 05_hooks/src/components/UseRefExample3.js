import { useState } from 'react';
import { Link } from 'react-router-dom';
import Todo from './Todo';

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      <Link className="btn btn-primary mb-4" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>
      <div>
        {showTodo && <Todo />}
        <button
          className="btn btn-primary"
          onClick={() => setShowTodo((prev) => !prev)}
        >
          Toggle Todo
        </button>
      </div>
    </div>
  );
}

export default UseRefExample3;
