import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample1 from './components/UseCallbackExample1';
import UseCallbackExample2 from './components/UseCallbackExample2';
import CustomFookExample1 from './components/CustomFookExample1';
import CustomFookExample2 from './components/CustomFookExample2';
import CustomFookExample3 from './components/CustomFookExample3';
import UseReducerExample from './components/UseReducerExample';
import UseEffectExample from './components/UseEffectExample';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useref-example-1" element={<UseRefExample1 />} />
          <Route path="/useref-example-2" element={<UseRefExample2 />} />
          <Route path="/useref-example-3" element={<UseRefExample3 />} />
          <Route path="/usememo-example" element={<UseMemoExample />} />
          <Route
            path="/usecallback-example-1"
            element={<UseCallbackExample1 />}
          />
          <Route
            path="/usecallback-example-2/:id"
            element={<UseCallbackExample2 />}
          />
          <Route
            path="/custom-hook-example-1"
            element={<CustomFookExample1 />}
          />
          <Route
            path="/custom-hook-example-2"
            element={<CustomFookExample2 />}
          />
          <Route
            path="/custom-hook-example-3"
            element={<CustomFookExample3 />}
          />
          <Route path="/usereducer-example" element={<UseReducerExample />} />
          <Route path="/useeffect-example" element={<UseEffectExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
