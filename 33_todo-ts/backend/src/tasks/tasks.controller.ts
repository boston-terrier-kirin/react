import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { instanceToPlain } from 'class-transformer';
import { AppDataSource } from '../..';
import { Task } from './tasks.entity';

class TasksController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const taskRepository = AppDataSource.getRepository(Task);

      const allTasks: Task[] = await taskRepository.find({
        order: {
          date: 'ASC',
        },
      });

      const plain = instanceToPlain(allTasks) as Task[];
      return res.status(200).json(plain);
    } catch (err) {
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const task = new Task();
      task.title = req.body.title;
      task.description = req.body.description;
      task.date = req.body.date;
      task.priority = req.body.priority;
      task.status = req.body.status;

      const taskRepository = AppDataSource.getRepository(Task);
      const newTask = await taskRepository.save(task);
      const plain = instanceToPlain(newTask) as Task[];

      return res.status(200).json(plain);
    } catch (err) {
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
}

export const tasksController = new TasksController();
