import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import style from './style.module.css';

const Favorite = ({ favorite, onClickFavorite }) => {
  return (
    <>
      {favorite ? (
        <BsSuitHeartFill
          size={20}
          className={style.favorite}
          onClick={onClickFavorite}
        />
      ) : (
        <BsSuitHeart
          size={20}
          className={style.heart}
          onClick={onClickFavorite}
        />
      )}
    </>
  );
};

export default Favorite;
