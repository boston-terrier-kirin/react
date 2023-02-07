import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { fetchPostById } from '../store/reducers/postsThunk';
import Spinner from './Spinner';
import { postsActions } from '../store/reducers/postsSlice';

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.posts.article);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  useEffect(() => {
    // 画面から離れるタイミングで、articleをクリアする。
    // articleが残ったままだと、次回表示時に一瞬表示される。
    return () => {
      dispatch(postsActions.clearArticle());
    };
  }, [dispatch]);

  if (loading || !article) {
    return <Spinner />;
  }

  return (
    <div className="article_container">
      <h1>{article.title}</h1>
      <div
        className="image"
        style={{ background: `url(${article.imagexl})` }}
      ></div>
      <div className="author">
        Created by: <span>{article.author} - </span>
        <Moment format="DD MMMM">{article.createdAt}</Moment>
      </div>
      <div className="mt-3 content">
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </div>
  );
};

export default Post;
