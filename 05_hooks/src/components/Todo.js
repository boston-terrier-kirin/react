import { useState, useEffect, useRef } from 'react';

/**
 * fetch中にtoggleボタンでTodoを閉じる⇒TodoがUnmoundされる。
 * 5秒後にsetTodoをしたら、unmountされたコンポーネントのステートをupdateできないエラーになるはず。
 * ⇒v18では再現せず。
 */

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          console.log('State update 1');

          // 本来であれば、unmountされたコンポーネントのステートをupdateできないエラーになるはず。※事象再現せず。
          if (isMounted.current) {
            console.log('State update 2');
            setTodo(data);
            setLoading(false);
          }
        }, 5000);
      });

    return () => {
      // Toggle Todo で閉じたタイミングで呼ばれる。
      console.log('Umounted');
      isMounted.current = false;
    };
  }, [isMounted]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}

export default Todo;
