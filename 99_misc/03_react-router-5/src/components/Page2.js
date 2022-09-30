import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=john">Query Parameter</Link>
    </div>
  );
};

export default Page2;
