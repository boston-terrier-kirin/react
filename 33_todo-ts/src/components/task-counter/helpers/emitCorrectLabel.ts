import { Status } from '../../create-task-form/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  if (status === Status.todo) {
    return `Todo's`;
  }

  if (status === Status.inProgress) {
    return 'In Progress';
  }

  return 'Completed';
};
