import { useState, useTransition } from 'react';
import Avatar from './Avatar';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

type Task = {
  id: number;
  title: string;
  assignee: string;
};

const member = {
  a: 'A',
  b: 'B',
  c: 'C',
};

const generateDummyTask = (): Task[] => {
  return Array(30000)
    .fill('')
    .map((_, index) => {
      const addedIndex: number = index + 1;
      return {
        id: addedIndex,
        title: `Task ${addedIndex}`,
        assignee:
          addedIndex % 3 === 0
            ? member.a
            : addedIndex % 2 === 0
            ? member.b
            : member.c,
      };
    });
};

const tasks = generateDummyTask();

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const clickHandler = (assignee: string) => {
    setSelected(assignee);

    // 優先順位の低いステート更新をstartTransitionに入れる。
    startTransition(() => {
      const filtered = tasks.filter((task) => task.assignee === assignee);
      setTaskList(filtered);
    });
  };

  const resetHandler = () => {
    setSelected('');
    setTaskList(tasks);
  };

  return (
    <div>
      <BackBtn />

      <Desc title="Transition">
        <DescItem>
          優先順位の低いステート更新をstartTransitionに入れる。
        </DescItem>
        <DescItem>
          useTransitionでisPendingが取れるので、Loadingを表示できる。
        </DescItem>
      </Desc>

      <div
        style={{
          display: 'flex',
        }}
      >
        <Avatar selected={selected} onClick={clickHandler}>
          A
        </Avatar>
        <Avatar selected={selected} onClick={clickHandler}>
          B
        </Avatar>
        <Avatar selected={selected} onClick={clickHandler}>
          C
        </Avatar>
      </div>
      <div onClick={resetHandler} className="mt-3 mb-3">
        <button className="btn btn-primary">リセット</button>
      </div>

      {isPending ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}

      <div>
        {taskList.length} / {tasks.length}
      </div>
      <ul className="list-group">
        {taskList.map((task) => (
          <li key={task.id} className="list-group-item list-group-item-action">
            {task.title} / {task.assignee}さん
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transition;
