import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 className="display-5 mb-3">React18 New Features</h1>
      <ul className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to="auto-batch-1"
        >
          EventHandlerでのAutoBatch
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          to="auto-batch-2"
        >
          EventHandler以外のでAutoBatch
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          to="transition"
        >
          useTransition
        </Link>

        <Link className="list-group-item list-group-item-action" to="deffered">
          useDeferredValue
        </Link>
      </ul>
    </>
  );
}

export default Home;
