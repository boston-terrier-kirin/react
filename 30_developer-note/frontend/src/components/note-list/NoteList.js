import style from './style.module.css';
import NoteListItem from '../note-list-item/NoteListItem';

const NoteList = ({ noteList }) => {
  const rowsToRender = noteList.map((note) => {
    return <NoteListItem key={note.id} note={note} />;
  });

  return (
    <>
      <ul className={style.noteList}>{rowsToRender}</ul>
    </>
  );
};

export default NoteList;
