import { useState } from 'react';

const BookEdit = ({ book, onEditBook, onToggleEditMode }) => {
  const [title, setTitle] = useState(book.title);

  const handleEditBook = (e) => {
    e.preventDefault();
    onEditBook({ ...book, title });
    onToggleEditMode();
  };

  const handleToggleEditMode = (e) => {
    // これをやらないと、Form submission canceled because the form is not connected が表示される。
    e.preventDefault();
    onToggleEditMode();
  };

  return (
    <form onSubmit={handleEditBook}>
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
          onClick={handleToggleEditMode}
          className="btn btn-secondary flex-grow-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookEdit;
