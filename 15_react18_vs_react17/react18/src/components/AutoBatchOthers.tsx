import { useState } from 'react';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const AutoBatchOthers = () => {
  // Automatic Batching
  // イベントハンドラー以外で複数回ステート更新しても、1回にまとめてステート更新してくれる。
  console.log('[18] AutoBatchOthers rendered');

  const [todos, setTodos] = useState<Todo[]>([]);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [anotherState, setAnotherState] = useState<string>('');

  const clickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        // イベントハンドラー以外で複数回ステート更新しても、1回にまとめてステート更新してくれる。
        setTodos(data);
        setIsFinish(true);
        setAnotherState('OK');
      });
  };

  return (
    <div>
      <BackBtn />

      <Desc title="AutoBatchOthers">
        <DescItem>
          React18で、イベントハンドラー以外で複数回ステート更新しても、1回にまとめてステート更新してくれるようになった。
        </DescItem>
      </Desc>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={clickHandler}>
          Update State
        </button>
      </div>

      <p>isFinish: {isFinish ? 'True' : 'False'}</p>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item list-group-item-action" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoBatchOthers;
