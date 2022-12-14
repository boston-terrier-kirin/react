import { useState } from 'react';
import Avatar from './Avatar';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';
import TaskList from './TaskList';

export type Task = {
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

const DeferredValue = () => {
  const [selected, setSelected] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const clickHandler = (assignee: string) => {
    setSelected(assignee);

    const filtered = tasks.filter((task) => task.assignee === assignee);
    setTaskList(filtered);
  };

  const resetHandler = () => {
    setSelected('');
    setTaskList(tasks);
  };

  return (
    <div>
      <BackBtn />

      <Desc title="DefferedValue">
        <DescItem>
          useTransitionが使えない場合、子供側でuseDeferredValueを使えてばuseTransitionと同じ効果がある。
        </DescItem>
        <DescItem>
          ただし、useDeferredValueには、isPendingでloadingを表示することができない。
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

      <div>
        {taskList.length} / {tasks.length}
      </div>
      <ul className="list-group">
        {/*
          useTransitionが使えない場合、子供側でuseDeferredValueを使えてばuseTransitionと同じ効果がある。
          ただし、useDeferredValueには、isPendingでloadingを表示することができない。
        */}
        <TaskList taskList={taskList} />
      </ul>
    </div>
  );
};

export default DeferredValue;
