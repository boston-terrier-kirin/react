import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 className="mb-3">React Hooks</h1>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="useref-example-1"
        >
          useRef Example 1
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="useref-example-2"
        >
          useRef Example 2
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="useref-example-3"
        >
          useRef Example 3
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="usememo-example"
        >
          useMemo Example
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="usecallback-example-1"
        >
          useCallback Example 1
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="usecallback-example-2/1"
        >
          useCallback Example 2
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="custom-hook-example-1"
        >
          Custom Hook - useFetch1()
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="custom-hook-example-2"
        >
          Custom Hook - useFetch2()
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="custom-hook-example-3"
        >
          Custom Hook - useLocalStrage()
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="usereducer-example"
        >
          useReducer Example
        </Link>
      </ul>
    </>
  );
}

export default Home;
