import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteList } from '../../store/note/noteThunk';
import Spinner from '../../components/spinner/Spinner';
import NoteList from '../../components/note-list/NoteList';
import { Link } from 'react-router-dom';
import TagList from '../../components/tag-list/TagList';
import { computeTagColor } from './computeTagColor';

const TOP10_COLOR_MAP = {
  0: { backgroundColor: '#3b82f6', color: '#f9fafb' },
  1: { backgroundColor: '#22c55e', color: '#f9fafb' },
  2: { backgroundColor: '#eab308', color: '#f9fafb' },
  3: { backgroundColor: '#6366f1', color: '#f9fafb' },
  4: { backgroundColor: '#14b8a6', color: '#f9fafb' },
  5: { backgroundColor: '#0ea5e9', color: '#f9fafb' },
  6: { backgroundColor: '#f97316', color: '#f9fafb' },
  7: { backgroundColor: '#8b5cf6', color: '#f9fafb' },
  8: { backgroundColor: '#84cc16', color: '#f9fafb' },
  9: { backgroundColor: '#64748b', color: '#f9fafb' },
  10: { backgroundColor: '#dbeafe', color: '#4b5563' },
};

const NoteBrowse = () => {
  const dispatch = useDispatch();

  const [filterTag, setFilterTag] = useState('');
  const { noteList, isLoading } = useSelector((state) => state.note);
  const tagColorMap = computeTagColor(noteList, TOP10_COLOR_MAP);

  const filteredNoteList = noteList.filter((note) => {
    if (filterTag === 'FAVORITE') {
      return note.favorite;
    }
    return note.tags?.toUpperCase().includes(filterTag.toUpperCase());
  });

  useEffect(() => {
    console.log('useEffect');
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
          <TagList tagColorMap={tagColorMap} onClickTag={handleClickTag} />
        </div>
        <div className="col-10">
          {noteList?.length === 0 && (
            <div className="d-flex">
              <span>Yon don't have any note.</span>
            </div>
          )}

          <NoteList noteList={filteredNoteList} tagColorMap={tagColorMap} />
        </div>
      </div>
    </>
  );
};

export default NoteBrowse;
