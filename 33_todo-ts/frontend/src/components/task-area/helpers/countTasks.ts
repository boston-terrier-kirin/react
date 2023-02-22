import { Status } from '../../create-task-form/enums/Status';
import { ITaskApi } from './../interfaces/ITaskApi';

export function countTasks(
  tasks: ITaskApi[] | undefined,
  status: Status
): number {
  if (!tasks) {
    return 0;
  }

  return tasks?.filter((task) => task.status === status).length;
}
