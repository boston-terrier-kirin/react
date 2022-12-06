import { useState } from 'react';

const AutoBatchEventHandler = () => {
  // Automatic Batching
  // イベントハンドラーで複数回ステート更新すると、1回にまとめてステート更新してくれる。
  console.log('[17] AutoBatchEventHandler rendered');

  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const clickHandler = () => {
    // Automatic Batching
    console.log('state1 before: ', state1);
    setState1((state1) => state1 + 1);
    console.log('state1 after: ', state1); // まだstate1は変わっていない

    setState2((state2) => state2 + 1);
  };

  return (
    <div>
      <p>AutoBatchEventHandler</p>
      <button onClick={clickHandler}>Update State</button>
      <p>State1: {state1}</p>
      <p>State2: {state2}</p>
    </div>
  );
};

export default AutoBatchEventHandler;
