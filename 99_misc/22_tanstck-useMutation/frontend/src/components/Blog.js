import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Posts from './Posts';

const Blog = () => {
  const [postId, setPostId] = useState('');

  const handleClickPost = (id) => {
    setPostId(id);
  };

  return (
    <div className="container mt-3">
      <h1>Blog</h1>
      <div className="mb-3">
        <NewPost />
      </div>
      <div className="row mb-3">
        <div className="col-2">
          <Posts onClickPost={handleClickPost} />
        </div>
        <div className="col-10">
          <Post postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
