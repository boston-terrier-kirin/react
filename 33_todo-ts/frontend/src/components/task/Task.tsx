import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import { ITask } from './interfaces/ITask';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
import { Priority } from '../create-task-form/enums/Priority';
import { Status } from '../create-task-form/enums/Status';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    id,
    title,
    date,
    description,
    priority = Priority.high,
    status = Status.todo,
    onStatusChange,
    onMarkComplete,
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={3}
      p={2}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onStatusChange={onStatusChange}
        onMarkComplete={onMarkComplete}
      />
    </Box>
  );
};

export default Task;
