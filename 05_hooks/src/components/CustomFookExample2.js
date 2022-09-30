import { Link } from 'react-router-dom';
import useFetch2 from '../hooks/useFetch2';

function CustomFookExample2() {
  const { data, loading, error } = useFetch2(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Oops...</h3>;
  }

  return (
    <div>
      <Link className="btn btn-primary mb-4" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>
      <ul className="mt-3 ps-0">
        {data.map((post) => (
          <li className="list-group-item list-group-item-action" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomFookExample2;
