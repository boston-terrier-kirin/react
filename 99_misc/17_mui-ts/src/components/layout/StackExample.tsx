import { Box, Stack } from '@mui/material';

const StackExample = () => {
  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
          TEST1
        </Box>
        <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
          TEST2
        </Box>

        <Stack
          sx={{ width: '100%' }}
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
            TEST1
          </Box>
          <Box sx={{ border: 1, borderColor: 'primary.main', padding: '1rem' }}>
            TEST2
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default StackExample;
