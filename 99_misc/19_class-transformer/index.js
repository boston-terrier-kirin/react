const { instanceToPlain, plainToInstance } = require('class-transformer');

class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

{
  const plainTasks = [
    {
      id: 1,
      title: 'test1',
    },
    {
      id: 2,
      title: 'test2',
    },
  ];

  const results = plainToInstance(Task, plainTasks);
  console.log(results);

  for (const r of results) {
    console.log(r instanceof Task);
  }

  console.log('-----');
}

{
  const tasks = [];
  const task1 = new Task(1, 'テスト1');
  const task2 = new Task(2, 'テスト2');

  tasks.push(task1);
  tasks.push(task2);

  const results = instanceToPlain(tasks);
  console.log(results);
}
