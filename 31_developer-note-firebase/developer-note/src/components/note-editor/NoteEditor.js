import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { BsLink45Deg } from 'react-icons/bs';

import style from './style.module.css';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import Spinner from '../spinner/Spinner';

const NoteEditor = ({ note, onSubmit, onCancel, defaultEditable }) => {
  const [formData, setFormData] = useState({
    id: note?.id || '',
    title: note?.title || '',
    link: note?.link || '',
    tags: note?.tags || '',
  });

  const [favorite, setFavorite] = useState(note?.favorite || false);
  const [content, setContent] = useState(note?.content || '');
  const [isEditable, setIsEditable] = useState(defaultEditable);

  const { loggedIn, checkingStatus } = useAuthStatus();

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...formData, content, favorite });
  };

  if (checkingStatus) {
    return <Spinner />;
  }

  return (
    <>
      <form>
        <div className="text-end mb-3">
          {loggedIn && (
            <button className="btn btn-primary me-2" onClick={handleSubmit}>
              Save
            </button>
          )}
          {!isEditable && (
            <button className="btn btn-secondary" onClick={onCancel}>
              Back
            </button>
          )}
        </div>

        <div className="d-flex gap-3 mb-3">
          <div className={`${style.item} flex-grow-1`}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={`${style.item} flex-grow-1`}>
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              className="form-control"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
          <div className={`${style.item}`}>
            <label>Favorite</label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="favorite"
                name="favorite"
                checked={favorite}
                onChange={() => setFavorite((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        <div className={`${style.item} mb-3`}>
          <div className="d-flex align-items-center gap-1">
            <label>Link</label>

            {formData.link && (
              <a
                href={formData.link}
                target="_blank"
                rel="noreferrer"
                className={style.link}
              >
                <BsLink45Deg size={20} />
              </a>
            )}
          </div>

          <input
            type="text"
            name="link"
            className="form-control"
            value={formData.link}
            onChange={handleChange}
          />
        </div>

        <div className={`${style.content} mb-3`}>
          <label>Content</label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isEditable}
              onChange={() => setIsEditable(!isEditable)}
            />
          </div>

          {isEditable ? (
            <MDEditor height={500} value={content} onChange={setContent} />
          ) : (
            <MDEditor.Markdown source={content} linkTarget="_blank" />
          )}
        </div>
      </form>
    </>
  );
};

export default NoteEditor;
