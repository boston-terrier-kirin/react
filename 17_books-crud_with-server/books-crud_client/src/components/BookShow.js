import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDeleteBook, onEditBook }) => {
  const [editMode, setEditMode] = useState(false);

  const handleToggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleDeleteBook = () => {
    onDeleteBook(book);
  };

  let content = (
    <>
      <h5 className="card-title">{book.title}</h5>
      <div className="d-flex">
        <button
          onClick={handleToggleEditMode}
          className="btn btn-warning flex-grow-1 me-2"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteBook}
          className="btn btn-danger flex-grow-1"
        >
          Delete
        </button>
      </div>
    </>
  );

  if (editMode) {
    content = (
      <BookEdit
        book={book}
        onEditBook={onEditBook}
        onToggleEditMode={handleToggleEditMode}
      />
    );
  }

  return (
    <div className="col-3">
      <div className="card">
        <img
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt="book"
          className="card-img-top"
        />
        <div className="card-body">{content}</div>
      </div>
    </div>
  );
};

export default BookShow;
