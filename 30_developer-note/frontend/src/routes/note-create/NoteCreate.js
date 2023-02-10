import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoteEditor from '../../components/note-editor/NoteEditor';
import { createNote } from '../../store/note/noteThunk';

const NoteCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditable, setIsEditable] = useState(true);

  const handleSubmit = (data) => {
    dispatch(createNote(data));
    navigate('/');
  };

  const handleClickEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      <NoteEditor
        isEditable={isEditable}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onClickEdit={handleClickEdit}
      />
    </>
  );
};

export default NoteCreate;
