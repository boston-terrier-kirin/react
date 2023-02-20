import { Priority } from '../../create-task-form/enums/Priority';

export const renderPriorityBorderColor = (priority: string): string => {
  if (priority === Priority.normal) {
    return 'grey.900';
  }

  if (priority === Priority.low) {
    return 'info.light';
  }

  return 'error.light';
};
