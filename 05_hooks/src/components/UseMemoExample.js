import { useState, useMemo, useRef, useEffect } from 'react';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(1);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  // こっちだと、ReRenderをクリックしてもnumberが変わっていないので、getSqrtが呼ばれない。
  // numberが変われば当然、再計算は走る。
  const sqrt = useMemo(() => {
    return getSqrt(number);
  }, [number]);

  // こっちだと、ReRenderをクリックするたびにステートが更新されてgetSqrtの計算が始まってしまう。
  // const sqrt = getSqrt(number);

  const onReRender = () => {
    setInc((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
  };

  return (
    <div>
      <BackBtn />

      <Desc>
        <DescItem>
          sqrtをmemo化していない場合、ReRenderをクリックしただけで、getSqrtが呼ばれてしまう。numberは変わっていないので再計算は不要。
        </DescItem>
        <DescItem>
          sqrtをmemo化した場合、ReRenderをクリックしただけでnumberが変わっていなければ、再計算は走らなくなる。
        </DescItem>
      </Desc>

      <div>
        <h2 className="my-2">
          The sqrt of {number} is {sqrt}
        </h2>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control w-25 mb-3"
        />

        {/* このボタンは何ステートを更新しているだけなのに、getSqrtが呼ばれる。 */}
        <button onClick={onReRender} className="btn btn-primary mb-3">
          ReRender
        </button>
        <p>Renders: {renders.current}</p>
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
