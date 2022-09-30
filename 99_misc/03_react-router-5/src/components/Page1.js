import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Page1 = () => {
  const history = useHistory();

  const data = {
    name: 'john',
    age: 25,
  };

  const onClickDetailA = () => {
    history.push('/page1/detailA');
  };

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: '/page1/detailA', state: data }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};

export default Page1;
