import { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" />}
      ></FormControlLabel>

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
