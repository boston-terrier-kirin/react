import { Link, Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="guests">Guests</Link>
        </li>
        <li>
          <Link to="admins">Adminss</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Users;
