import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { BsLink45Deg } from 'react-icons/bs';

import style from './style.module.css';

const NoteEditor = ({ note, onSubmit, onCancel, onClickEdit, isEditable }) => {
  const [formData, setFormData] = useState({
    id: note?.id || '',
    title: note?.title || '',
    link: note?.link || '',
    tags: note?.tags || '',
  });

  const [favorite, setFavorite] = useState(note?.favorite || false);
  const [content, setContent] = useState(note?.content || '');

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

  return (
    <>
      <form>
        <div className="text-end mb-2">
          <button className="btn btn-primary me-2" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            Back
          </button>
        </div>

        <div className={`${style.item} mb-3`}>
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className={`${style.item} mb-3`}>
          <div className="d-flex align-items-center gap-1 form-label">
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

        <div className={`${style.item} mb-3`}>
          <label className="form-label">Tags</label>
          <input
            type="text"
            name="tags"
            className="form-control"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className={`${style.item} mb-3`}>
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

        <div className={`${style.content} mb-3`}>
          <label>Content</label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isEditable}
              onClick={onClickEdit}
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
