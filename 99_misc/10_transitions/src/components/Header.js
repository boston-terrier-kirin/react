import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Transitions</h5>
        <nav className="ms-auto my-2 my-md-0 mr-md-3">
          <NavLink
            to="/csstransition"
            className={({ isActive }) => (isActive ? 'p-2 fw-bold' : 'p-2')}
          >
            CSSTransition
          </NavLink>
          <NavLink
            to="/tgroup"
            className={({ isActive }) => (isActive ? 'p-2 fw-bold' : 'p-2')}
          >
            Tgroup
          </NavLink>
          <NavLink
            to="/transition"
            className={({ isActive }) => (isActive ? 'p-2 fw-bold' : 'p-2')}
          >
            Transition
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
