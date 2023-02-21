import { FC, ReactElement, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import TaskTitleField from './TaskTitleField';
import TaskDescription from './TaskDescription';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';
import { ICreateTask } from '../task-area/interfaces/ICreateTask';

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const createTaskMutation = useMutation((data: ICreateTask) => {
    return sendApiRequest('http://localhost:3200/tasks', 'POST', data);
  });

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  const handleSubmit = () => {
    if (!title || !date || !description) {
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };

    createTaskMutation.mutate(task);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          Task created successfully
        </Alert>
      )}

      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField onChange={(e) => setTitle(e.target.value)} />
        <TaskDescription onChange={(e) => setDescription(e.target.value)} />
        <TaskDateField onChange={(date) => setDate(date)} />
        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              {
                value: Priority.high,
                label: Priority.high.toLocaleUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toLocaleUpperCase(),
              },
              {
                value: Priority.low,
                label: Priority.low.toLocaleUpperCase(),
              },
            ]}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </Stack>

        {createTaskMutation.isLoading && <LinearProgress />}

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleSubmit}
        >
          Create a Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
