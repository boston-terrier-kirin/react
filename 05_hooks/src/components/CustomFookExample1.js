import { useEffect } from 'react';
import useFetch1 from '../hooks/useFetch1';
import BackBtn from './BackBtn';
import Desc from './Desc';
import DescItem from './DescItem';

function CustomFookExample1() {
  const { fetchData, data, loading, error } = useFetch1();

  useEffect(
    () => {
      fetchData('https://jsonplaceholder.typicode.com/posts', {});
    },
    // useCallbackが効いて、無限ループにならない。
    // React Hook useEffect has a missing dependency: 'fetchData'. Either include it or remove the dependency array.
    [fetchData]
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

      <Desc title="Custom Hook - useFetch1()">
        <DescItem>カスタムHookでuseCallbackを使い、無限ループを防ぐ。</DescItem>
      </Desc>

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

export default CustomFookExample1;
