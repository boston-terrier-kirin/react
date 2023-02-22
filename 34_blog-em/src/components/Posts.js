import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { PostDetail } from './PostDetail';

async function fetchPosts() {
  console.log('★Posts.fetchPosts');
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
  );
  return response.json();
}

export function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  });

  console.log('Posts.rerender');

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h3>Something went wrong...</h3>
      </div>
    );
  }

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
