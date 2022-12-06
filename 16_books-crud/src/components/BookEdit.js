import { useState } from 'react';

const BookEdit = ({ book, onEditBook, onToggleEditMode }) => {
  const [title, setTitle] = useState(book.title);

  const editBookHandler = (e) => {
    e.preventDefault();
    onEditBook({ ...book, title });
    onToggleEditMode();
  };

  const toggleEditModeHandler = () => {
    onToggleEditMode();
  };

  return (
    <form onSubmit={editBookHandler}>
      <div className="mb-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Enter a Title"
        />
      </div>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary flex-grow-1 me-2">Save</button>
        <button
          onClick={toggleEditModeHandler}
          className="btn btn-secondary flex-grow-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookEdit;
