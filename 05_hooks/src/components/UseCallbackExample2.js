import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UseCallbackExample2() {
  const [tasks, setTasks] = useState([]);
  const params = useParams();

  const fetchTask = (taskId) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks((prev) => [...prev, data]);
      });
  };

  useEffect(
    () => {
      fetchTask(params.id);
      testFn();
    },
    // fetchTaskを依存関係に指定しなくても特に警告はでない。
    // 依存関係の問題でuseCallbakを使うのは、CustomFookExample1 で。
    [params.id]
  );

  return (
    <div>
      <Link className="btn btn-primary mb-4" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>
      <ul className="mt-3 ps-0">
        {tasks.map((task, index) => (
          <li className="list-group-item list-group-item-action" key={index}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function testFn() {}

export default UseCallbackExample2;
