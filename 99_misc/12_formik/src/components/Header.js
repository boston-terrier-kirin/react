import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 me-auto font-weight-normal">My app</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/">
          Form One
        </Link>
        <Link className="p-2 text-dark" to="/formtwo">
          Form Two
        </Link>
        <Link className="p-2 text-dark" to="/formthree">
          Form Three
        </Link>
        <Link className="p-2 text-dark" to="/formfour">
          Form Four
        </Link>
      </nav>
    </div>
  );
};

export default Header;
