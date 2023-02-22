import { Alert, AlertTitle, Box, LinearProgress } from '@mui/material';

const Feedback = () => {
  return (
    <>
      <Box sx={{ width: '100%', marginBottom: '1rem' }}>
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          Task created successfully
        </Alert>
      </Box>

      <Box sx={{ width: '100%', marginBottom: '1rem' }}>
        <Alert severity="error">There was an error fetching your tasks.</Alert>
      </Box>

      <Box>
        <LinearProgress />
      </Box>
    </>
  );
};

export default Feedback;
