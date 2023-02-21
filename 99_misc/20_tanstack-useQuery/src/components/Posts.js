import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/postApi';

const Posts = () => {
  // https://tanstack.com/query/v4/docs/react/reference/useQuery
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    staleTime: 3000,
  });

  console.log(
    `status = ${postQuery.status}`,
    `fetchStatus = ${postQuery.fetchStatus}`
  );

  if (postQuery.isLoading) {
    return <h1>Loading</h1>;
  }

  if (postQuery.isError) {
    return <p>{JSON.stringify(postQuery.error)}</p>;
  }

  return (
    <div>
      {postQuery.data.map((post) => (
        <div key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
