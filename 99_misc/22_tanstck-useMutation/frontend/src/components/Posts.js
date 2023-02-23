import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/posts';

const Posts = ({ onClickPost }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
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

  const handleClickPost = (id) => {
    onClickPost(id);
  };

  const postsToRender = data.map((post) => (
    <li
      key={post.id}
      className="list-group-item link-primary"
      style={{ cursor: 'pointer' }}
      onClick={() => handleClickPost(post.id)}
    >
      {post.title}
    </li>
  ));

  return <ul className="list-group">{postsToRender}</ul>;
};

export default Posts;
