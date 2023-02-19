import { FC, ReactElement, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { Status } from './enums/Status';
import DateInput from './DateInput';

const Inputs: FC = (): ReactElement => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  console.log(username);

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
        Login
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TextInput
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <DateInput
          label="Birth Date"
          value={date}
          onChange={(e) => setDate(e)}
        />

        <SelectInput
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
      </Stack>
    </Box>
  );
};

export default Inputs;
