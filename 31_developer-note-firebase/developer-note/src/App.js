import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RootRoute from './routes/root-route/RootRoute';
import NoteBrowse from './routes/note-browse/NoteBrowse';
import Note from './routes/note/Note';
import NoteCreate from './routes/note-create/NoteCreate';
import SignIn from './routes/sign-in/SignIn';
import ProtectedRoute from './routes/protected-route/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/new" element={<ProtectedRoute />}>
              <Route path="/note/new" element={<NoteCreate />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
