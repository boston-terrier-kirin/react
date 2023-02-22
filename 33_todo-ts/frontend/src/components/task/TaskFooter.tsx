import { ChangeEvent, MouseEvent } from 'react';
import { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../create-task-form/enums/Status';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e, id) => console.log(e),
    onMarkComplete = (e, id) => console.log(e),
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onStatusChange(event, id);
  };

  const handleClick = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    onMarkComplete(event, id);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            color="warning"
            onChange={handleChange}
            defaultChecked={status === Status.inProgress}
          />
        }
      ></FormControlLabel>

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fff' }}
        onClick={handleClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
