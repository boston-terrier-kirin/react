import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Task } from './src/tasks.entity';

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

AppDataSource.initialize()
  .then(async () => {
    const taskRepository = AppDataSource.getRepository(Task);

    const allTasks: Task[] = await taskRepository.find({
      order: {
        date: 'ASC',
      },
    });

    console.log(allTasks);
  })
  .catch((err) => {
    console.log('Error', err);
  });
