import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import AsyncThunkLogin from './components/AsyncThunkLogin';
import RtkQueryLogin from './components/RtkQueryLogin';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap py-3 mb-4 border-bottom">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/asyncThunk"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                AsyncThunkLogin
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/rtkQuery"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                RtkQueryLogin
              </NavLink>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/asyncThunk" element={<AsyncThunkLogin />}></Route>
          <Route path="/rtkQuery" element={<RtkQueryLogin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
