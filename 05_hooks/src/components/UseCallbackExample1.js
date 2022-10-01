import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

/**
 * [1][2]がそろうと、余計なレンダリングがされなくなる。
 */

function UseCallbackExample1() {
  const [tasks, setTasks] = useState([]);

  // [1]ここでuseCallback
  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, 'New Task']);
  }, []);

  return (
    <div>
      <Link className="btn btn-primary mb-4" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>
      <div>
        <Button addTask={addTask} />
        <ul className="mt-3 ps-0">
          {tasks.map((task, index) => (
            <li className="list-group-item list-group-item-action" key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// [2]ここでReact.memo。React.memoはコンポーネントのメモ化。
const Button = React.memo(({ addTask }) => {
  console.log('Button Rendered');
  return (
    <button onClick={addTask} className="btn btn-primary">
      Add Task
    </button>
  );
});

export default UseCallbackExample1;
