import { useState, useEffect, useRef } from 'react';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

function UseRefExample2() {
  const renders = useRef(1);
  const prevName = useRef('');
  const [name, setName] = useState('');

  useEffect(() => {
    // ref.currentを応用すると、1つ前のステートをGETできる。
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <BackBtn />

      <Desc title="UseRefExample2">
        <DescItem>
          ref.currentを応用すると、1つ前のステートをGETできる。
        </DescItem>
        <DescItem>使いどころはイマイチ不明。</DescItem>
      </Desc>

      <p>Renders: {renders.current}</p>
      <p>Prev Name: {prevName.current}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefExample2;
