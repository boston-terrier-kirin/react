import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsLink45Deg, BsTrashFill } from 'react-icons/bs';

import Tag from '../tag/Tag';
import Favorite from '../favorite/Favorite';
import style from './style.module.css';
import { deleteNote, updateNote } from '../../store/note/noteThunk';

const NoteListItem = ({ note, tagColorMap }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickFavorite = (note) => {
    dispatch(
      updateNote({
        id: note.id,
        favorite: !note.favorite,
      })
    );

    navigate('/');
  };

  const handleClickDelete = (note) => {
    dispatch(deleteNote(note));
  };

  return (
    <li key={note.id} className={`${style.noteListItem}`}>
      <a
        className={`${style.link}`}
        href={note.link}
        target="_blank"
        rel="noreferrer"
      >
        <BsLink45Deg size={20} />
      </a>

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

      <BsTrashFill
        size={20}
        className={style.delete}
        onClick={() => handleClickDelete(note)}
      />
    </li>
  );
};

export default NoteListItem;
