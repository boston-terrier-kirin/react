import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootRoute from './routes/root-route/RootRoute';
import NoteBrowse from './routes/note-browse/NoteBrowse';
import Note from './routes/note/Note';
import NoteCreate from './routes/note-create/NoteCreate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRoute />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
