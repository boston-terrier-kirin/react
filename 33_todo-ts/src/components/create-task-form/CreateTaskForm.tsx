import { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import TaskTitleField from './TaskTitleField';
import TaskDescription from './TaskDescription';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField onChange={(e) => console.log(e.target.value)} />
        <TaskDescription onChange={(e) => console.log(e.target.value)} />
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
