import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookUpdated, setBookUpdated] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:3001/books');
      setBooks(res.data);
      console.log('State UPDATED!!');
    };

    fetchBooks();
  }, [bookUpdated]);

  const stateUpdate = () => {
    // 更新されるたびに最新の状態を取り直す方式を採用。
    setBookUpdated((prev) => prev + 1);
  };

  const createBook = async (book) => {
    await axios.post('http://localhost:3001/books', {
      title: book.title,
    });

    stateUpdate();
  };

  const editBook = async (bookToEdit) => {
    await axios.put(`http://localhost:3001/books/${bookToEdit.id}`, {
      title: bookToEdit.title,
    });

    stateUpdate();
  };

  const deleteBook = async (bookToDelete) => {
    await axios.delete(`http://localhost:3001/books/${bookToDelete.id}`);

    stateUpdate();
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
