import useLocalStrage from '../hooks/useLocalStrage';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

function CustomFookExample3() {
  const [task, setTask] = useLocalStrage('task', '');
  const [tasks, setTasks] = useLocalStrage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    console.log(taskObj);

    setTasks([...tasks, taskObj]);
  };

  return (
    <div>
      <BackBtn />

      <Desc title="Custom Hook - useLocalStrage()">
        <DescItem>カスタムHookでlocalStorageを使う。</DescItem>
      </Desc>

      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>

      <ul className="mt-3 ps-0">
        {tasks.map((task, index) => (
          <li className="list-group-item list-group-item-action" key={index}>
            {task.task} - {String(task.completed)} - {task.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomFookExample3;
