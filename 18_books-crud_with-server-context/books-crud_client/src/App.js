import { useEffect } from 'react';
import useBooksContext from './hooks/use-books-context';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mt-2">
      <h1 className="display-5">Reading List</h1>

      <div className="mb-3">
        <BookCreate />
      </div>

      <div className="mb-3">
        <BookList />
      </div>
    </div>
  );
};

export default App;
