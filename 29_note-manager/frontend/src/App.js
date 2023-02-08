import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { NoteApi } from './api/note-api';
import Header from './components/header/Header';
import { notesActions } from './store/notes/notes-slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllNotes = async () => {
      const noteList = await NoteApi.fetchAll();
      dispatch(notesActions.setNoteList(noteList));
    };

    fetchAllNotes();
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;
