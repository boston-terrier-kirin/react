import { Status } from './../../create-task-form/enums/Status';
import { Priority } from './../../create-task-form/enums/Priority';

export interface ITaskApi {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
