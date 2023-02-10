import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteList } from '../../store/note/noteThunk';
import Spinner from '../../components/spinner/Spinner';
import NoteList from '../../components/note-list/NoteList';
import { Link } from 'react-router-dom';
import TagList from '../../components/tag-list/TagList';

const COLOR_MAP = {
  0: { backgroundColor: '#3b82f6', color: '#f9fafb' },
  1: { backgroundColor: '#22c55e', color: '#f9fafb' },
  2: { backgroundColor: '#eab308', color: '#f9fafb' },
  3: { backgroundColor: '#6366f1', color: '#f9fafb' },
  4: { backgroundColor: '#14b8a6', color: '#f9fafb' },
  5: { backgroundColor: '#f43f5e', color: '#f9fafb' },
  6: { backgroundColor: '#f97316', color: '#f9fafb' },
  7: { backgroundColor: '#8b5cf6', color: '#f9fafb' },
  8: { backgroundColor: '#84cc16', color: '#f9fafb' },
  9: { backgroundColor: '#64748b', color: '#f9fafb' },
  10: { backgroundColor: '#dbeafe', color: '#4b5563' },
};

function computeTagColor(noteList, colorMap) {
  // map[key:tag, value:cnt]
  const map = new Map();
  for (const note of noteList) {
    note.tags.split(',').forEach((tag) => {
      const cnt = map.get(tag) || 0;
      map.set(tag, cnt + 1);
    });
  }

  // ソートしたいので、配列に入れる
  const tagRank = [];
  for (const m of map) {
    // m[0]:tag, m[1]:cnt
    tagRank.push(m);
  }

  // ソート
  tagRank.sort((a, b) => {
    // m[1]:cnt でソート
    if (a[1] > b[1]) {
      return -1;
    }
    return 1;
  });

  // objectに詰めなおす
  // {
  //   react: {backgroundColor:'#3b82f6', color:'#f9fafb', cnt:3 },
  //   javascript: {backgroundColor:'#16a34a', color:'#f9fafb', cnt:3 }
  // }
  const tagColorMap = {};
  for (const [index, tag] of tagRank.entries()) {
    tagColorMap[tag[0]] = {
      backgroundColor: colorMap[index].backgroundColor,
      color: index < 10 ? colorMap[index].color : colorMap[10].color,
      cnt: tag[1],
    };
  }

  return tagColorMap;
}

const NoteBrowse = () => {
  const dispatch = useDispatch();

  const [filterTag, setFilterTag] = useState('');
  const { noteList, isLoading } = useSelector((state) => state.note);
  const tagColorMap = computeTagColor(noteList, COLOR_MAP);

  const filteredNoteList = noteList.filter((note) => {
    if (filterTag === 'FAVORITE') {
      return note.favorite;
    }
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
          <TagList tagColorMap={tagColorMap} onClickTag={handleClickTag} />
        </div>
        <div className="col-10">
          <NoteList noteList={filteredNoteList} tagColorMap={tagColorMap} />
        </div>
      </div>
    </>
  );
};

export default NoteBrowse;
