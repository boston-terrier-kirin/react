import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="sticky-top">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="display-6">
          <span>React Hooks</span>
        </h1>
      </div>

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
        <Link
          className="list-group-item list-group-item-action"
          to="useEffect-example"
        >
          useEffect cleanUp Example
        </Link>
      </ul>
    </div>
  );
}

export default Home;
