import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { NoteApi } from '../../api/note-api';
import NoteForm from '../../components/note-form/NoteForm';
import { notesActions } from '../../store/notes/notes-slice';

const Note = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const note = useSelector((state) =>
    state.notes.noteList.find((note) => note.id === parseInt(id))
  );

  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = async (note) => {
    const updatedNote = await NoteApi.updateById(id, note);

    dispatch(notesActions.updateNote(updatedNote));
    navigate('/');
  };

  const handleDelete = async () => {
    await NoteApi.deleteById(id);

    dispatch(notesActions.deleteNote(parseInt(id)));
    navigate('/');
  };

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? 'Edit note' : note.title}
          note={note}
          onSubmit={isEditable && handleSubmit}
          onClickEdit={() => setIsEditable((prev) => !prev)}
          onClickDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Note;
