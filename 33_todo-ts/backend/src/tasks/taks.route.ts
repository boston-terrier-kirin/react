import { Router, Request, Response } from 'express';
import { TasksController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/', async (req: Request, res: Response) => {
  const tasksController = new TasksController();
  const allTasks = await tasksController.getAll();

  res.json(allTasks).status(200);
});

tasksRouter.post('/', async (req: Request, res: Response) => {
  const task = req.body;
  console.log(task);

  const tasksController = new TasksController();
  const allTasks = await tasksController.getAll();

  res.json(allTasks).status(200);
});
