import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../api/posts';

const Post = ({ postId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => {
      console.log('fetchPost');
      return fetchPost(postId);
    },
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
    <div className="card">
      <div className="card-body">
        <div className="card-title">{data.title}</div>
        <div className="card-text">{data.description}</div>
      </div>
    </div>
  );
};

export default Post;
