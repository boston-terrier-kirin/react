import { FC, ReactElement } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customeTheme } from './theme/customeTheme';
import BoxExample from './components/layout/BoxExample';
import GridExample from './components/layout/GridExample';
import StackExample from './components/layout/StackExample';
import Home from './components/Home';
import Inputs from './components/inputs/Inputs';
import DataDisplay from './components/data-display/DataDisplay';
import Feedback from './components/feedback/Feedback';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customeTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/box" element={<BoxExample />} />
            <Route path="/grid" element={<GridExample />} />
            <Route path="/stack" element={<StackExample />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/data-display" element={<DataDisplay />} />
            <Route path="/feedback" element={<Feedback />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
