import { useState } from 'react';
import { flushSync } from 'react-dom';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

const AutoBatchEventHandler = () => {
  // Automatic Batching
  // イベントハンドラーで複数回ステート更新すると、1回にまとめてステート更新してくれる。
  console.log('[18] AutoBatchEventHandler rendered');

  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const clickHandler = () => {
    // flushSyncを使えばAutomatic Batchingされなくなるらしいが、どうも効いていない。
    flushSync(() => {
      console.log('flushSync');

      // Automatic Batching
      console.log('state1 before: ', state1);
      setState1((state1) => state1 + 1);
      console.log('state1 after: ', state1); // まだstate1は変わっていない

      setState2((state2) => state2 + 1);
    });
  };

  return (
    <div>
      <BackBtn />

      <Desc title="AutoBatchEventHandler">
        <DescItem>
          React17の時点で、イベントハンドラーの中ではAutoBatchingが効いている。
        </DescItem>
        <DescItem>
          flushSyncを使えばAutomaticBatchingされなくなるらしいが、どうも効いていない。
        </DescItem>
      </Desc>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={clickHandler}>
          Update State
        </button>
      </div>

      <p>State1: {state1}</p>
      <p>State2: {state2}</p>
    </div>
  );
};

export default AutoBatchEventHandler;
