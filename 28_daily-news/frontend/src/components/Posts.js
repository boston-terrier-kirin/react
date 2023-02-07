import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';
import Moment from 'react-moment';
import { fetchPosts } from '../store/reducers/postsThunk';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts.articles.items.length <= 0) {
      dispatch(fetchPosts({ page: 1, order: 'asc', limit: 6 }));
    }
  }, [dispatch, posts.articles.items.length]);

  const articlesToRender = posts.articles.items.map((item) => (
    <div key={item.id}>
      <img
        src={`${item.image}?${item.id}`}
        style={{ width: '100%', height: '200px' }}
        alt={item.title}
      />
      <div className="author">
        <span>{item.author} - </span>
        <Moment format="DD MMMM">{item.createdAt}</Moment>
      </div>
      <div className="content">
        <div className="title">{item.title}</div>
        <div className="excerpt mb-1">{item.excerpt}</div>
        <Link to={`/article/${item.id}`} className="btn btn-light">
          Read More
        </Link>
      </div>
    </div>
  ));

  if (posts.loading) {
    return <Spinner />;
  }

  const loadMorePosts = () => {
    dispatch(
      fetchPosts({ page: posts.articles.page + 1, order: 'asc', limit: 6 })
    );
  };

  return (
    <>
      {/* https://www.npmjs.com/package/react-masonry-css */}
      <Masonry
        breakpointCols={{ default: 3, 800: 2, 400: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {articlesToRender}
      </Masonry>

      {!posts.articles.end && (
        <button className="btn btn-outline-dark" onClick={loadMorePosts}>
          Load More
        </button>
      )}
    </>
  );
};

export default Posts;
