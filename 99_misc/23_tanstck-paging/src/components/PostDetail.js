import { useQuery } from '@tanstack/react-query';

async function fetchComments(postId) {
  console.log('★Posts.fetchComments');
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

export function PostDetail({ post }) {
  // クエリキーにidを入れているのがポイント
  // idを入れないと初回しかfetchしてくれない。
  const { data, isLoading, isError } = useQuery({
    queryKey: ['comments', post.id],
    queryFn: () => fetchComments(post.id),
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
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
