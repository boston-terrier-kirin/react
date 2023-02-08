import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store';

import App from './App';
import NoteBrowse from './pages/note-browse/NoteBrowse';
import Note from './pages/note/Note';
import NoteCreate from './pages/note-create/NoteCreate';
import NotFound from './pages/not-found/NotFound';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<NoteBrowse />} />
          <Route path="/note/:id" element={<Note />} />
          <Route path="/note/new" element={<NoteCreate />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
