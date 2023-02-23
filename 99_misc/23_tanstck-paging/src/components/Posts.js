import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

import { PostDetail } from './PostDetail';

const maxPostPage = 20;

async function fetchPosts(page) {
  console.log('★Posts.fetchPosts', page);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return response.json();
}

export function Posts() {
  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (currentPage === maxPostPage) {
      return;
    }

    // [消化不良]staleTimeを入れても、効いていないように見える
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      queryKey: ['posts', nextPage],
      queryFn: () => fetchPosts(nextPage),
      staleTime: 30000,
    });
  }, [currentPage, queryClient]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: () => fetchPosts(currentPage),
    keepPrevioutData: true,
  });

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

      <button
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        Previous page
      </button>

      <span>Page {currentPage}</span>

      <button
        disabled={currentPage === maxPostPage}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Next page
      </button>

      <hr />

      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
