import { Avatar, Box, Chip, Typography } from '@mui/material';

const DataDisplay = () => {
  return (
    <>
      <Box sx={{ width: '100%', marginBottom: '1rem' }}>
        {/* h3の大きさで、htmlはh1にする。 */}
        <Typography variant="h3" component="h1" gutterBottom>
          h1. Heading
        </Typography>
      </Box>

      <Box sx={{ width: '100%', marginBottom: '1rem' }}>
        <Chip variant="outlined" label="2023/2/21" />
      </Box>

      <Box sx={{ width: '100%', marginBottom: '1rem' }}>
        <Avatar
          sx={{
            width: '96px',
            height: '96px',
            backgroundColor: 'primary.main',
            marginBottom: '16px',
          }}
        >
          <Typography variant="h4" color="text.primary">
            M
          </Typography>
        </Avatar>
      </Box>
    </>
  );
};

export default DataDisplay;
