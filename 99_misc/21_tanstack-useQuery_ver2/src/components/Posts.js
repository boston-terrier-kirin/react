import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { Post } from './Post';

async function fetchPosts() {
  console.log('★Posts.fetchPosts');
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
  );
  return response.json();
}

// PostsとPostは親子関係になっていて、画面遷移(unmount)しない。
// posts: slateTimeはないが、unmountしないので、初回のみfetchする。
// comments: キャッシュキーにIDを指定しているので、毎回fetchする。
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
      {selectedPost && <Post post={selectedPost} />}
    </>
  );
}
