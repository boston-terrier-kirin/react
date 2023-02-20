import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { AppDataSource } from '../..';
import { Task } from './tasks.entity';
import { UpdateResult } from 'typeorm';

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

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id, status } = req.body;
      const taskRepository = AppDataSource.getRepository(Task);
      const task = await taskRepository.findOne({
        where: { id },
      });

      if (!task) {
        return res.status(404).json({
          error: 'Task not found',
        });
      }

      const updatedTask: UpdateResult = await taskRepository.update(
        id,
        plainToInstance(Task, { status })
      );

      const plain = instanceToPlain(updatedTask) as Task[];

      return res.json(plain);
    } catch (err) {
      return res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
}

export const tasksController = new TasksController();
