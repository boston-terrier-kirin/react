import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, updateNote } from '../../store/note/noteThunk';
import NoteEditor from '../../components/note-editor/NoteEditor';

const Note = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [isEditable, setIsEditable] = useState(false);
  const { note, isLoading } = useSelector((state) => state.note);

  useEffect(() => {
    dispatch(getNote(id));
  }, [dispatch, id]);

  if (isLoading || !note) {
    return null;
  }

  const handleSubmit = (data) => {
    dispatch(updateNote(data));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleClickEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <NoteEditor
        note={note}
        isEditable={isEditable}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onClickEdit={handleClickEdit}
      />
    </>
  );
};

export default Note;
