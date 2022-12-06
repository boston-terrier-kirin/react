import './App.css';
import AutoBatchEventHandler from './components/AutoBatchEventHandler';
import AutoBatchOthers from './components/AutoBatchOthers';

function App() {
  console.log('[17] App rendered');

  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOthers />
    </div>
  );
}

export default App;
