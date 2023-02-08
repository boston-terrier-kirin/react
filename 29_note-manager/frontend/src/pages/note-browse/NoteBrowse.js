import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NotesContainer from '../../components/notes-container/NotesContainer';
import SearchIcon from '../../components/search-bar/SearchBar';

const NoteBrowse = () => {
  const [searchTerm, setSearchterm] = useState('');
  const noteList = useSelector((state) => state.notes.noteList);
  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title
      .toUpperCase()
      .includes(searchTerm.toUpperCase());
    return containsTitle;
  });

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4">
          <SearchIcon
            placeholder="Search Your notes..."
            onChange={(value) => setSearchterm(value)}
          />
        </div>
      </div>

      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            Yon don't have any note, <Link to="/note/new">create one ?</Link>
          </span>
        </div>
      )}

      <NotesContainer noteList={filteredNoteList} />
    </>
  );
};

export default NoteBrowse;
