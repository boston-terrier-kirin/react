import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Desc from './Desc';
import DescItem from './DescItem';

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
    // React Hook useEffect has a missing dependency: 'params.id'. Either include it or remove the dependency array.
    [params.id]
  );

  return (
    <div>
      <Desc title="UseCallbackExample2">
        <DescItem>
          fetchTaskを依存関係に指定しなくても特に警告はでない。
        </DescItem>
      </Desc>

      <ul className="list-group mt-3 ps-0">
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
