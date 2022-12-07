import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
  const [editMode, setEditMode] = useState(false);
  const { deleteBook } = useBooksContext();

  const handleToggleEdit = () => {
    setEditMode((prev) => !prev);
  };

  const handleDeleteBook = () => {
    deleteBook(book);
  };

  let content = (
    <div className="d-flex">
      <button onClick={handleToggleEdit} className="btn btn-warning w-50 me-2">
        Edit
      </button>
      <button onClick={handleDeleteBook} className="btn btn-danger w-50">
        Delete
      </button>
    </div>
  );

  if (editMode) {
    content = <BookEdit book={book} onToggleEdit={handleToggleEdit} />;
  }

  return (
    <div className="col-3">
      <div className="card position-relative">
        <div className="position-relative">
          <div className="overlay"></div>
          <img
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            alt="book"
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title position-absolute top-0 start-0 text-light p-3 fw-bold">
            {book.title}
          </h5>
          {content}
        </div>
      </div>
    </div>
  );
};

export default BookShow;
