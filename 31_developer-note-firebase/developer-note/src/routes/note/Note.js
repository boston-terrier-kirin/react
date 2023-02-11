import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, updateNote } from '../../store/note/noteThunk';
import NoteEditor from '../../components/note-editor/NoteEditor';
import { showSuccessMessage } from '../../utils/message';

const Note = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { note, isLoading } = useSelector((state) => state.note);

  useEffect(() => {
    dispatch(getNote(id));
  }, [dispatch, id]);

  if (isLoading || !note) {
    return null;
  }

  const handleSubmit = (data) => {
    dispatch(updateNote(data));
    showSuccessMessage('Note Updated');
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      <NoteEditor
        note={note}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        defaultEditable={false}
      />
    </>
  );
};

export default Note;
