import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoteEditor from '../../components/note-editor/NoteEditor';
import { createNote } from '../../store/note/noteThunk';
import { showSuccessMessage } from '../../utils/message';

const NoteCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    dispatch(createNote(data));
    showSuccessMessage('Note Created');
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      <NoteEditor
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        defaultEditable={true}
      />
    </>
  );
};

export default NoteCreate;
