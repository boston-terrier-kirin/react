import { Box } from '@mui/material';

const BoxExample = () => {
  const style = {
    height: '100px',
    backgroundColor: '#f3f4f6',
    border: '1px solid #9ca3af',
  };

  return (
    <Box sx={style} display="flex" justifyContent="center" alignItems="center">
      Box
    </Box>
  );
};

export default BoxExample;
