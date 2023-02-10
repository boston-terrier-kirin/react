import { Link } from 'react-router-dom';
import Tag from '../tag/Tag';
import { BsLink45Deg, BsTrashFill } from 'react-icons/bs';
import style from './style.module.css';
import Favorite from '../favorite/Favorite';

const NoteList = ({ noteList, onClickFavorite, onClickDelete }) => {
  const handleClickFavorite = (note) => {
    onClickFavorite(note);
  };

  const handleClickDelete = (note) => {
    onClickDelete(note);
  };

  const rowsToRender = noteList.map((note) => {
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
          <Tag tags={note.tags} />
        </div>

        <BsTrashFill
          size={20}
          className={style.delete}
          onClick={() => handleClickDelete(note)}
        />
      </li>
    );
  });

  return (
    <>
      <ul className={style.noteList}>{rowsToRender}</ul>
    </>
  );
};

export default NoteList;
