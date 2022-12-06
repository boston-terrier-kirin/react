import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:3001/books');
      setBooks(res.data);
    };

    fetchBooks();
  }, []);

  const createBook = async (book) => {
    const res = await axios.post('http://localhost:3001/books', {
      title: book.title,
    });

    setBooks((prev) => [...prev, res.data]);
  };

  const editBook = async (bookToEdit) => {
    const res = await axios.put(
      `http://localhost:3001/books/${bookToEdit.id}`,
      {
        title: bookToEdit.title,
      }
    );

    const newBooks = books.map((book) => {
      if (book.id !== bookToEdit.id) {
        return book;
      }

      return {
        ...book,
        ...res.data,
      };
    });

    setBooks(newBooks);
  };

  const deleteBook = async (bookToDelete) => {
    await axios.put(`http://localhost:3001/books/${bookToDelete.id}`);
    const newBooks = books.filter((book) => book.id !== bookToDelete.id);

    setBooks(newBooks);
  };

  return (
    <div className="container mt-3">
      <h1 className="display-5">Reading List</h1>

      <div className="mb-3">
        <BookCreate onAddBook={createBook} />
      </div>

      <div className="mb-3">
        <BookList
          books={books}
          onDeleteBook={deleteBook}
          onEditBook={editBook}
        />
      </div>
    </div>
  );
};

export default App;
