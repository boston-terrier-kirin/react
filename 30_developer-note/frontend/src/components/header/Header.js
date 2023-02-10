import { Link } from 'react-router-dom';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import style from './style.module.css';

const Header = () => {
  return (
    <div className={`container ${style.header}`}>
      <Link to="/" className={style.headerLink}>
        <BsFillBookmarkHeartFill className={style.icon} /> Developer Note
      </Link>
    </div>
  );
};

export default Header;
