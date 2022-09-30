import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Top</Link>
    </div>
  );
};

export default NotFound;
