import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import PostItem from './components/PostItem';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Admins from './nested/Admins';
import Guests from './nested/Guests';
import Users from './nested/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">My app</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="posts"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Posts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="posts/:id" element={<PostItem />}></Route>
          <Route path="profile" element={<Profile />}></Route>

          <Route path="users" element={<Users />}>
            <Route path="guests" element={<Guests />}></Route>
            <Route path="admins" element={<Admins />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
          {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
