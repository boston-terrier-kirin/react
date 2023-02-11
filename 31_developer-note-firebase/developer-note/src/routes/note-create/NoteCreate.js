import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoteEditor from '../../components/note-editor/NoteEditor';
import { createNote } from '../../store/note/noteThunk';

const NoteCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    dispatch(createNote(data));
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
