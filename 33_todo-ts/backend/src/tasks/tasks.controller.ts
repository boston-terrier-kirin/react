import { instanceToPlain } from 'class-transformer';
import { Repository } from 'typeorm';
import { AppDataSource } from '../..';
import { Task } from './tasks.entity';

export class TasksController {
  taskRepository: Repository<Task>;

  constructor() {
    this.taskRepository = AppDataSource.getRepository(Task);
  }

  public async getAll(): Promise<Task[]> {
    const allTasks: Task[] = await this.taskRepository.find({
      order: {
        date: 'ASC',
      },
    });

    return instanceToPlain(allTasks) as Task[];
  }
}
