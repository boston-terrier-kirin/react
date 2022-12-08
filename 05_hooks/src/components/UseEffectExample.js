import { useState, useEffect } from 'react';
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

  useEffect(() => {
    return () => {
      // こっちはBackボタンを押して、別の画面に遷移するタイミングで呼ばれる。
      console.log('cleanUp2');
    };
  }, []);

  return (
    <div>
      <Desc title="useEffect cleanUp">
        <DescItem>
          cleanUpは2回目の初期処理として呼ばれる。なので、初回のcleanUpは呼ばれない。
        </DescItem>
        <DescItem>
          依存関係が[]のuseEffectは、別の画面に遷移するタイミングでcleanUpが呼ばれる。
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
