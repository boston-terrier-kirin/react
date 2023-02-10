import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteList } from '../../store/note/noteThunk';
import Spinner from '../../components/spinner/Spinner';
import NoteList from '../../components/note-list/NoteList';
import { Link } from 'react-router-dom';
import TagList from '../../components/tag-list/TagList';

const NoteBrowse = () => {
  const dispatch = useDispatch();

  const [filterTag, setFilterTag] = useState('');
  const { noteList, isLoading } = useSelector((state) => state.note);

  const filteredNoteList = noteList.filter((note) => {
    return note.tags.toUpperCase().includes(filterTag.toUpperCase());
  });

  useEffect(() => {
    dispatch(getNoteList());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleClickTag = (tag) => {
    setFilterTag(tag);
  };

  return (
    <>
      <div className="row mb-2">
        <div className="text-end">
          <Link to="/note/new" className="btn btn-primary">
            New Note
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <TagList noteList={noteList} onClickTag={handleClickTag} />
        </div>
        <div className="col-10">
          <NoteList noteList={filteredNoteList} />
        </div>
      </div>
    </>
  );
};

export default NoteBrowse;
