import { Router } from 'express';
import { tasksController } from './tasks.controller';
import { createValidator, updateValidator } from './tasks.validator';

export const tasksRouter: Router = Router();

tasksRouter.get('/', tasksController.getAll);

tasksRouter.post('/', createValidator, tasksController.create);

tasksRouter.put('/', updateValidator, tasksController.update);
