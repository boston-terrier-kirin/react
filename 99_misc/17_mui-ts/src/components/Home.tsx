import { Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const Home = () => {
  return (
    <Container sx={{ padding: '1rem' }}>
      <Grid container spacing={1}>
        <Grid item md={2}>
          <Menu />
        </Grid>

        <Grid item md={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
