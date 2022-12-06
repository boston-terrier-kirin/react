import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDeleteBook, onEditBook }) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditModeHandler = () => {
    setEditMode((prev) => !prev);
  };

  const deleteBookHandler = () => {
    onDeleteBook(book);
  };

  let content = (
    <>
      <h5 className="card-title">{book.title}</h5>
      <div className="d-flex">
        <button
          onClick={toggleEditModeHandler}
          className="btn btn-warning flex-grow-1 me-2"
        >
          Edit
        </button>
        <button
          onClick={deleteBookHandler}
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
        onToggleEditMode={toggleEditModeHandler}
      />
    );
  }

  return (
    <div className="col-3">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
          alt="book"
          className="card-img-top"
        />
        <div className="card-body">{content}</div>
      </div>
    </div>
  );
};

export default BookShow;
