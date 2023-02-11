import { Link } from 'react-router-dom';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import style from './style.module.css';
import { useAuthStatus } from '../../hooks/useAuthStatus';

const Header = () => {
  const { loggedIn } = useAuthStatus();

  return (
    <div className="container d-flex">
      <Link to="/" className={style.headerLink}>
        <BsFillBookmarkHeartFill className={style.icon} /> Developer Note
      </Link>

      {loggedIn || (
        <Link to="/sign-in" className="btn btn-primary ms-auto">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
