import { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customeTheme } from './theme/customeTheme';
import Dashboard from './pages/dashboard/Dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customeTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
