import { useRef } from 'react';
import { Link } from 'react-router-dom';

function UseRefExample1() {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current);
  };

  return (
    <div>
      <Link className="btn btn-primary mb-4" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>
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
