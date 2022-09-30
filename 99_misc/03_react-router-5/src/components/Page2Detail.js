import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Page2Detail = () => {
  const { id } = useParams();

  const location = useLocation();
  console.log(location);

  const { search } = location;
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>Page2Detail</h1>
      <p>{id}</p>
      <p>{query.get('name')}</p>
    </div>
  );
};

export default Page2Detail;
