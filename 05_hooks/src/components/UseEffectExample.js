import { useState, useEffect } from 'react';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

function UseEffectExample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // cleanUpしない場合、Click をクリックするたびに新しいリスナーが登録されてしまう。
    const listener = () => {
      console.log(counter);
    };
    document.body.addEventListener('click', listener);

    return () => {
      // cleanUpは2回目の初期処理として呼ばれる。
      // なので、初回のcleanUpは呼ばれない。
      console.log('cleanUp');

      // cleanUpでremoveEventListenerすれば、リスナーの重複登録が防げる。
      document.body.removeEventListener('click', listener);
    };
  }, [counter]);

  return (
    <div>
      <BackBtn />

      <Desc title="useEffect cleanUp">
        <DescItem>
          cleanUpは2回目の初期処理として呼ばれる。なので、初回のcleanUpは呼ばれない。
        </DescItem>
      </Desc>

      <div className="mb-2">
        <span className="badge bg-success">{counter}</span>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default UseEffectExample;