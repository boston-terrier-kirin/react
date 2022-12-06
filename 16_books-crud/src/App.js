import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBookHandler = (book) => {
    setBooks((prev) => [...prev, book]);
  };

  const deleteBookHandler = (bookToDelete) => {
    const newBooks = books.filter((book) => book.id !== bookToDelete.id);
    setBooks(newBooks);
  };

  const editBookHandler = (bookToEdit) => {
    const newBooks = books.map((book) => {
      if (book.id !== bookToEdit.id) {
        return book;
      }

      return {
        ...book,
        ...bookToEdit,
      };
    });
    setBooks(newBooks);
  };

  return (
    <div className="container mt-3">
      <h1 className="display-5">Book CRUD</h1>

      <div className="mb-3">
        <BookCreate onAddBook={addBookHandler} />
      </div>

      <div className="mb-3">
        <BookList
          books={books}
          onDeleteBook={deleteBookHandler}
          onEditBook={editBookHandler}
        />
      </div>
    </div>
  );
};

export default App;
