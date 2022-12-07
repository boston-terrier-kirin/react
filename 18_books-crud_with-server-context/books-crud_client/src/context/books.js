import { useState, useCallback, createContext } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const res = await axios.get('http://localhost:3001/books');
    setBooks(res.data);
  }, []);

  const createBook = useCallback(async (book) => {
    const res = await axios.post('http://localhost:3001/books', {
      title: book.title,
    });

    setBooks((prev) => [...prev, res.data]);
  }, []);

  const editBook = useCallback(
    async (bookToEdit) => {
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
    },
    [books]
  );

  const deleteBook = useCallback(
    async (bookToDelete) => {
      await axios.delete(`http://localhost:3001/books/${bookToDelete.id}`);
      const newBooks = books.filter((book) => book.id !== bookToDelete.id);

      setBooks(newBooks);
    },
    [books]
  );

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBook,
    deleteBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
