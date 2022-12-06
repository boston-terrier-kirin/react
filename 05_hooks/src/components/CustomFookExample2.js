import useFetch2 from '../hooks/useFetch2';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

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
      <BackBtn />

      <Desc title="Custom Hook - useFetch2()">
        <DescItem>カスタムHookでuseEffectする場合。</DescItem>
      </Desc>

      <ul className="list-group mt-3 ps-0">
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
