import { useState } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const AutoBatchOthers = () => {
  // Automatic Batching
  // イベントハンドラー以外で複数回ステート更新すると、1回にまとめてステート更新してくれない。
  console.log('[17] AutoBatchOthers rendered');

  const [todos, setTodos] = useState<Todo[]>([]);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [anotherState, setAnotherState] = useState<string>('');

  const clickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        // イベントハンドラー以外で複数回ステート更新すると、1回にまとめてステート更新してくれない。
        setTodos(data);
        setIsFinish(true);
        setAnotherState('OK');
      });
  };

  return (
    <div>
      <p>AutoBatchOthers</p>
      <button onClick={clickHandler}>Fetch Todos</button>
      <p>isFinish: {isFinish ? 'True' : 'False'}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoBatchOthers;
