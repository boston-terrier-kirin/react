import style from './style.module.css';
import NoteListItem from '../note-list-item/NoteListItem';

const NoteList = ({ noteList, tagColorMap }) => {
  const rowsToRender = noteList.map((note) => {
    return <NoteListItem key={note.id} note={note} tagColorMap={tagColorMap} />;
  });

  return (
    <>
      <ul className={style.noteList}>{rowsToRender}</ul>
    </>
  );
};

export default NoteList;
