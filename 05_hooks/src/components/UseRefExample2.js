import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function UseRefExample2() {
  const renders = useRef(1);
  const prevName = useRef('');
  const [name, setName] = useState('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <Link className="btn btn-primary mb-4" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name: {prevName.current}</h2>
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
