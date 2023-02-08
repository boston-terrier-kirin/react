import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Child from './Child';

// https://fkhadra.github.io/react-toastify/introduction/
function App() {
  return (
    <div className="container p-3">
      <ToastContainer />
      <Child />
    </div>
  );
}

export default App;
