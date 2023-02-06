import { useParams, useLocation } from 'react-router-dom';

const PostItem = () => {
  const params = useParams();
  const location = useLocation();

  console.log(params);
  console.log(location);

  return <div>Post ID: XXX</div>;
};

export default PostItem;
