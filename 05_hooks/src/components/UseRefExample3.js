import { useState } from 'react';
import Todo from './Todo';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      <BackBtn />

      <Desc title="UseRefExample3">
        <DescItem>
          Loading中にToggle
          Todoでコンポーネントをunmoundしてもエラーにならないようにする。
        </DescItem>
        <DescItem>
          本来であれば、unmountされたコンポーネントのステートをupdateできないエラーになるはず。※事象再現せず。
        </DescItem>
      </Desc>

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
