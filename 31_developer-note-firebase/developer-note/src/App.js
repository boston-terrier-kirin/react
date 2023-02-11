import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RootRoute from './routes/root-route/RootRoute';
import NoteBrowse from './routes/note-browse/NoteBrowse';
import Note from './routes/note/Note';
import NoteCreate from './routes/note-create/NoteCreate';
import SignIn from './routes/sign-in/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRoute />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
