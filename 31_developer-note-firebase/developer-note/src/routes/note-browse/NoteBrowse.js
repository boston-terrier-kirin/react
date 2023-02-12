import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteList } from '../../store/note/noteThunk';
import Spinner from '../../components/spinner/Spinner';
import NoteList from '../../components/note-list/NoteList';
import { Link } from 'react-router-dom';
import TagList from '../../components/tag-list/TagList';
import { computeTagColor } from './computeTagColor';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import { noteActions } from '../../store/note/noteSlice';

const TOP30_COLOR_MAP = {
  0: { backgroundColor: '#3b82f6', color: '#f9fafb' }, // Blue 500
  1: { backgroundColor: '#22c55e', color: '#f9fafb' }, // Green 500
  2: { backgroundColor: '#eab308', color: '#f9fafb' }, // Yellow 500
  3: { backgroundColor: '#6366f1', color: '#f9fafb' }, // Indigo 500
  4: { backgroundColor: '#14b8a6', color: '#f9fafb' }, // Teal 500
  5: { backgroundColor: '#0ea5e9', color: '#f9fafb' }, // Sky 500
  6: { backgroundColor: '#f97316', color: '#f9fafb' }, // Orange 500
  7: { backgroundColor: '#8b5cf6', color: '#f9fafb' }, // Violet 500
  8: { backgroundColor: '#84cc16', color: '#f9fafb' }, // Lime 500
  9: { backgroundColor: '#64748b', color: '#f9fafb' }, // Slate 500

  10: {
    backgroundColor: '#fff',
    border: '1px solid #3b82f6',
    color: '#4b5563',
  }, // Blue 500
  11: {
    backgroundColor: '#fff',
    border: '1px solid #22c55e',
    color: '#4b5563',
  }, // Green 500
  12: {
    backgroundColor: '#fff',
    border: '1px solid #eab308',
    color: '#4b5563',
  }, // Yellow 500
  13: {
    backgroundColor: '#fff',
    border: '1px solid #6366f1',
    color: '#4b5563',
  }, // Indigo 500
  14: {
    backgroundColor: '#fff',
    border: '1px solid #14b8a6',
    color: '#4b5563',
  }, // Teal 500
  15: {
    backgroundColor: '#fff',
    border: '1px solid #0ea5e9',
    color: '#4b5563',
  }, // Sky 500
  16: {
    backgroundColor: '#fff',
    border: '1px solid #f97316',
    color: '#4b5563',
  }, // Orange 500
  17: {
    backgroundColor: '#fff',
    border: '1px solid #8b5cf6',
    color: '#4b5563',
  }, // Violet 500
  18: {
    backgroundColor: '#fff',
    border: '1px solid #84cc16',
    color: '#4b5563',
  }, // Lime 500
  19: {
    backgroundColor: '#fff',
    border: '1px solid #64748b',
    color: '#4b5563',
  }, // Slate 500

  20: { backgroundColor: '#93c5fd', color: '#4b5563' }, // Blue 300
  21: { backgroundColor: '#86efac', color: '#4b5563' }, // Green 300
  22: { backgroundColor: '#fde047', color: '#4b5563' }, // Yellow 300
  23: { backgroundColor: '#a5b4fc', color: '#4b5563' }, // Indigo 300
  24: { backgroundColor: '#5eead4', color: '#4b5563' }, // Teal 300
  25: { backgroundColor: '#7dd3fc', color: '#4b5563' }, // Sky 300
  26: { backgroundColor: '#fdba74', color: '#4b5563' }, // Orange 300
  27: { backgroundColor: '#c4b5fd', color: '#4b5563' }, // Violet 300
  28: { backgroundColor: '#bef264', color: '#4b5563' }, // Lime 300
  29: { backgroundColor: '#cbd5e1', color: '#4b5563' }, // Slate 300

  30: { backgroundColor: '#dbeafe', color: '#4b5563' },
};

const NoteBrowse = () => {
  const dispatch = useDispatch();

  const { noteList, filterTag, isLoading } = useSelector((state) => state.note);
  const tagColorMap = computeTagColor(noteList, TOP30_COLOR_MAP, 30);

  const { loggedIn, checkingStatus } = useAuthStatus();

  const filteredNoteList = noteList.filter((note) => {
    if (filterTag === 'FAVORITE') {
      return note.favorite;
    }
    return note.tags?.toUpperCase().includes(filterTag.toUpperCase());
  });

  useEffect(() => {
    dispatch(getNoteList());
  }, [dispatch]);

  if (isLoading || checkingStatus) {
    return <Spinner />;
  }

  const handleClickTag = (tag) => {
    dispatch(noteActions.setFilterTag(tag));
  };

  return (
    <>
      {loggedIn && (
        <div className="row mb-3">
          <div className="text-end">
            <Link to="/note/new" className="btn btn-primary">
              New Note
            </Link>
          </div>
        </div>
      )}

      <div className="row mb-3">
        <div className="col-2">
          <TagList
            tagColorMap={tagColorMap}
            activeTag={filterTag}
            onClickTag={handleClickTag}
          />
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
