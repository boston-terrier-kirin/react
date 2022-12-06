import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import './App.css';
import AutoBatchEventHandler from './components/AutoBatchEventHandler';
import AutoBatchOthers from './components/AutoBatchOthers';
import Transition from './components/Transition';
import DeferredValue from './components/DeferredValue';

function App() {
  console.log('[18] App rendered');

  useEffect(() => {
    // strict mode
    // https://ja.reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html#offscreen
    // 将来的にはオフスクリーンなる機能が追加されて、タブの切り替えで戻って来た時に、切り替え前のステートが復元できたりするらしい。
    // そうなるとuseEffect(..., [])が1回しか呼ばれないという前提が崩れる。
    console.log('[18] useEffect');
  }, []);

  return (
    <Router>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto-batch-1" element={<AutoBatchEventHandler />} />
          <Route path="/auto-batch-2" element={<AutoBatchOthers />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/deffered" element={<DeferredValue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
