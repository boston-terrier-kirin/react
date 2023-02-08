import { useDispatch } from 'react-redux';
import { notesActions } from '../../store/notes/notes-slice';
import { NoteApi } from '../../api/note-api';
import NoteForm from '../../components/note-form/NoteForm';
import { useNavigate } from 'react-router-dom';

const NoteCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    const note = await NoteApi.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });

    dispatch(notesActions.addNote(note));
    navigate('/');
  };

  return (
    <>
      <NoteForm title="New note" onSubmit={handleSubmit} />
    </>
  );
};

export default NoteCreate;
