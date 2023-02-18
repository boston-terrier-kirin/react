import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import { getNoteList } from '../../store/note/noteThunk';
import { noteActions } from '../../store/note/noteSlice';
import Spinner from '../../components/spinner/Spinner';
import NoteList from '../../components/note-list/NoteList';
import TagList from '../../components/tag-list/TagList';
import SearchBox from '../../components/search-box/SearchBox';

import { computeTagColor, filterTag, getFavoritesCnt } from './computeTag';
import { TOP30_COLOR_MAP } from './colorMap';
import { filterNote } from './filterNote';

const NoteBrowse = () => {
  const dispatch = useDispatch();

  const { loggedIn, checkingStatus } = useAuthStatus();

  const { noteList, searchTag, filterNoteByTag, filterNoteByTitle, isLoading } =
    useSelector((state) => state.note);

  const filteredNoteList = filterNote(
    noteList,
    filterNoteByTag,
    filterNoteByTitle
  );

  // 全カラーマップ
  const tagColorMap = computeTagColor(noteList, TOP30_COLOR_MAP, 30);

  // 左側に表示するタグ用
  const filteredTagColorMap = filterTag(tagColorMap, searchTag);

  const favoritesCnt = getFavoritesCnt(noteList);

  useEffect(() => {
    dispatch(getNoteList());
  }, [dispatch]);

  if (isLoading || checkingStatus) {
    return <Spinner />;
  }

  const handleSearchTag = (event) => {
    dispatch(noteActions.setSearchTag(event.target.value));
  };

  const handleFilterNoteByTag = (tag) => {
    if (tag === '') {
      // ALLがクリックされたら、初期状態に戻す。
      dispatch(noteActions.setSearchTag(''));
      dispatch(noteActions.setFilterTag(''));
      dispatch(noteActions.setFilterTitle(''));
    } else {
      // タグがクリックされたら、タイトルの検索は初期状態に戻す。
      dispatch(noteActions.setFilterTag(tag));
      dispatch(noteActions.setFilterTitle(''));
    }
  };

  const handleFilterNoteByTitle = (event) => {
    dispatch(noteActions.setFilterTitle(event.target.value));
  };

  return (
    <>
      <div className="row mb-3 align-items-end">
        <div className="col-2">
          <SearchBox
            placeholder="Search tags"
            value={searchTag}
            onChange={handleSearchTag}
          />
        </div>

        <div className="col-10 d-flex gap-3 align-items-end">
          <div className="flex-grow-1">
            <SearchBox
              placeholder="Search titles"
              value={filterNoteByTitle}
              onChange={handleFilterNoteByTitle}
            />
          </div>

          {loggedIn && (
            <div className="text-end">
              <Link to="/note/new" className="btn btn-primary">
                New Note
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-2">
          <TagList
            tagColorMap={filteredTagColorMap}
            activeTag={filterNoteByTag}
            onClickTag={handleFilterNoteByTag}
            allCnt={noteList.length}
            favoritesCnt={favoritesCnt}
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
