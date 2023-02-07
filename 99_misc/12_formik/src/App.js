import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormFour from './components/FormFour';
import FormOne from './components/FormOne';
import FormThree from './components/FormThree';
import FormTwo from './components/FormTwo';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<FormOne />}></Route>
          <Route path="/formtwo" element={<FormTwo />}></Route>
          <Route path="/formthree" element={<FormThree />}></Route>
          <Route path="/formfour" element={<FormFour />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
