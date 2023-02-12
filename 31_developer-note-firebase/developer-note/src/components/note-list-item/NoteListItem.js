import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsLink45Deg, BsThreeDots, BsTrashFill } from 'react-icons/bs';

import Tag from '../tag/Tag';
import Favorite from '../favorite/Favorite';
import style from './style.module.css';
import { deleteNote, updateNote } from '../../store/note/noteThunk';
import { useAuthStatus } from '../../hooks/useAuthStatus';

const NoteListItem = ({ note, tagColorMap }) => {
  const dispatch = useDispatch();
  const { loggedIn } = useAuthStatus();

  const handleClickFavorite = (note) => {
    dispatch(
      updateNote({
        id: note.id,
        favorite: !note.favorite,
      })
    );
  };

  const handleClickDelete = (note) => {
    dispatch(deleteNote(note));
  };

  return (
    <li key={note.id} className={`${style.noteListItem}`}>
      {note.link ? (
        <a
          className={`${style.link}`}
          href={note.link}
          target="_blank"
          rel="noreferrer"
        >
          <BsLink45Deg size={20} />
        </a>
      ) : (
        <BsThreeDots size={20} />
      )}

      <Favorite
        favorite={note.favorite}
        onClickFavorite={() => handleClickFavorite(note)}
      />

      <Link to={`/note/${note.id}`} className={`${style.noteTitle}`}>
        {note.title}
      </Link>

      <div className="ms-auto">
        <Tag tags={note.tags} tagColorMap={tagColorMap} />
      </div>

      {loggedIn && (
        <BsTrashFill
          size={20}
          className={style.delete}
          onClick={() => handleClickDelete(note)}
        />
      )}
    </li>
  );
};

export default NoteListItem;
