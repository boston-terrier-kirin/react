import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootRoute = () => {
  return (
    <div className="container p-3">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default RootRoute;
