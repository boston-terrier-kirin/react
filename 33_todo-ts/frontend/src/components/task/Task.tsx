import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';

const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={2}
      p={4}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <TaskHeader />
      <TaskDescription />
      <TaskFooter />
    </Box>
  );
};

export default Task;
