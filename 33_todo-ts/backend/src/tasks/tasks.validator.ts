import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Task title is mandatory')
    .trim()
    .isString()
    .withMessage('Task title needs to be in text format'),
  body('description')
    .trim()
    .isString()
    .withMessage('Task description needs to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('Task date is mandatory')
    .trim()
    .isString()
    .withMessage('Task date needs to be a valid date format'),
  body('priority')
    .trim()
    .isIn([Priority.normal, Priority.high, Priority.low])
    .withMessage('Priority can only be normal, high, or low'),
  body('status')
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage('Status can only be todo, inProgress, or completed'),
];

export const updateValidator: ValidationChain[] = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('Task id is mandatory')
    .trim()
    .isString()
    .withMessage('Task id needs to be in uuid format'),
  body('status')
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage('Status can only be todo, inProgress, or completed'),
];
