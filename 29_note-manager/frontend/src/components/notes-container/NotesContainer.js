import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NoteApi } from '../../api/note-api';
import { notesActions } from '../../store/notes/notes-slice';
import TextCard from '../text-card/TextCard';
import style from './style.module.css';

const NotesContainer = ({ noteList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await NoteApi.deleteById(id);

    dispatch(notesActions.deleteNote(parseInt(id)));
    navigate('/');
  };

  const noteListToRender = noteList.map((note) => (
    <div className={style.container} key={note.id}>
      <TextCard
        id={note.id}
        title={note.title}
        subtitle={note.created_at}
        content={note.content}
        onClick={() => navigate(`/note/${note.id}`)}
        onClickTrash={() => handleDelete(note.id)}
      />
    </div>
  ));

  return (
    <div className="row justify-content-center gap-4">{noteListToRender}</div>
  );
};

export default NotesContainer;
