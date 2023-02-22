import { FC, ReactElement, ReactNode, ChangeEvent, MouseEvent } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import TaskCounter from '../task-counter/TaskCounter';
import Task from '../task/Task';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../create-task-form/enums/Status';
import { IUpdateTask } from './interfaces/IUpdateTask';

const TaskArea: FC = (): ReactElement => {
  const { data, isLoading, isError, refetch } = useQuery(
    ['tasks'],
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET'
      );
    }
  );

  const updateTaskMutation = useMutation((data: IUpdateTask) =>
    sendApiRequest('http://localhost:3200/tasks', 'PUT', data)
  );

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const checked = event.target.checked;
    updateTaskMutation.mutate({
      id,
      status: checked ? Status.inProgress : Status.todo,
    });
  };

  const onMarkComplete = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  };

  let loadingStatus: ReactNode;
  if (isError) {
    loadingStatus = (
      <Alert severity="error">There was an error fetching your tasks.</Alert>
    );
  } else if (Array.isArray(data) && data.length === 0) {
    loadingStatus = (
      <Alert severity="warning">
        You do not have any tasks created yet. Start by creating some tasks.
      </Alert>
    );
  } else if (isLoading) {
    loadingStatus = <LinearProgress />;
  }

  const tasksToRender = data
    ?.filter(
      (task) => task.status === Status.todo || task.status === Status.inProgress
    )
    .map((task) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        date={new Date(task.date)}
        priority={task.priority}
        status={task.status}
        onStatusChange={onStatusChange}
        onMarkComplete={onMarkComplete}
      />
    ));

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks As On {format(new Date(), 'PPPP')}</h2>
      </Box>

      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>

        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          {loadingStatus}
          {tasksToRender}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
