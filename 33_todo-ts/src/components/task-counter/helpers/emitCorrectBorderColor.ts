import { Status } from '../../create-task-form/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectBorderColor = (
  status: TaskCounterStatusType
): string => {
  if (status === Status.todo) {
    return 'error.light';
  }

  if (status === Status.inProgress) {
    return 'warning.light';
  }

  return 'success.light';
};
