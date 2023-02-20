import express, { Express } from 'express';
import { DataSource } from 'typeorm';
import cors from 'cors';
import dotenv from 'dotenv';
import { tasksRouter } from './src/tasks/taks.route';
import { Task } from './src/tasks/tasks.entity';

const app: Express = express();
app.use(express.json());
app.use(cors());

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

const PORT = process.env.PORT;

app.use('/tasks', tasksRouter);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server listening on port 3200');
    });
  })
  .catch((err) => {
    console.log('Error', err);
  });
