import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(1);

  // numberが変わった時だけ、getSqrtが呼ばれる。
  const sqrt = useMemo(() => {
    getSqrt(number);
  }, [number]);

  const onReRender = () => {
    setInc((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
  };

  return (
    <div>
      <Link className="btn btn-primary mb-4" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>

      <div>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          className="form-control w-25 mb-3"
        />

        <h2 className="my-2">
          The sqrt of {number} is {sqrt}
        </h2>

        {/* このボタンは何もやっていないのに、再レンダリングが走って、getSqrtが呼ばれる。 */}
        <button onClick={onReRender} className="btn btn-primary mb-3">
          ReRender
        </button>
      </div>
    </div>
  );
}

function getSqrt(number) {
  console.log('Expensive Calc Start!');
  delay(1000);
  console.log('Expensive Calc End!');

  return Math.sqrt(number);
}

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

export default UseMemoExample;
