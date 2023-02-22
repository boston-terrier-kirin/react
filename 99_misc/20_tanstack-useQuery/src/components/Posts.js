import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/postApi';

// posts: staleTime長め -> unmountされてもキャッシュが残っているからfetchが走らない
// post : staleTime長め -> unmountされてもキャッシュが残っているから同じIDであればfetchが走らない
// user : staleTimeなし -> 毎回fetchが走る
const Posts = () => {
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      console.log('★Posts.getPosts');
      return getPosts();
    },
    staleTime: 300000,
  });

  useEffect(() => {
    return () => {
      console.log('★Posts.unmount');
    };
  }, []);

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
