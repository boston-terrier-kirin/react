import { useDeferredValue } from 'react';
import { Task } from './DeferredValue';

type Props = {
  taskList: Task[];
};

const TaskList = ({ taskList }: Props) => {
  const deferredTaskList = useDeferredValue(taskList);

  return (
    <>
      {deferredTaskList.map((task) => (
        <li key={task.id} className="list-group-item list-group-item-action">
          {task.title} / {task.assignee}さん
        </li>
      ))}
    </>
  );
};

export default TaskList;
