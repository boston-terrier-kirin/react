import { useRef } from 'react';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

function UseRefExample1() {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current);
  };

  return (
    <div>
      <BackBtn />

      <Desc title="UseRefExample1">
        <DescItem>ref.currentでHTMLがGETできる。</DescItem>
      </Desc>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseRefExample1;
