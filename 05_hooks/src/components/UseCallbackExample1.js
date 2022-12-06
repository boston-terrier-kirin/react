import React, { useState, useCallback } from 'react';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

/**
 * [1][2]がそろうと、余計なレンダリングがされなくなり、Button Rendered が表示されない。
 */
function UseCallbackExample1() {
  const [tasks, setTasks] = useState([]);

  // [1]ここでuseCallback
  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, 'New Task']);
  }, []);

  // こっちだとaddTaskが毎回変わるため(Object.is)、Buttonへのpropsが変わり、毎回Buttonがレンダリングされる。
  // const addTask = () => {
  //   setTasks((prev) => [...prev, 'New Task']);
  // };

  return (
    <div>
      <BackBtn />

      <Desc title="UseCallbackExample1">
        <DescItem>
          親が変わったら子はレンダリングされる。⇒ 子でReact.memoする。
        </DescItem>
        <DescItem>
          propsが変わったら子はレンダリングされる。⇒ 親でuseCallbackする。
        </DescItem>
      </Desc>

      <div>
        <Button addTask={addTask} />
        <ul className="list-group mt-3 ps-0">
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
// ・親が変わったら子はレンダリングされる。-> 子でReact.memoする。
// ・propsが変わったら子はレンダリングされる。-> 親でuseCallbackする。
const Button = React.memo(({ addTask }) => {
  console.log('Button Rendered');
  return (
    <button onClick={addTask} className="btn btn-primary">
      Add Task
    </button>
  );
});

// こっちだと、親が変われば子をレンダリングするの法則にもとづいて、毎回Buttonがレンダリングされる。
// const Button = ({ addTask }) => {
//   console.log('Button Rendered');
//   return (
//     <button onClick={addTask} className="btn btn-primary">
//       Add Task
//     </button>
//   );
// };

export default UseCallbackExample1;
