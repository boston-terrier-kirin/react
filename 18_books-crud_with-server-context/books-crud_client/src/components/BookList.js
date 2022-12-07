import useBooksContext from '../hooks/use-books-context';
import BookShow from './BookShow';

const BookList = () => {
  const { books } = useBooksContext();

  const booksToRender = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="row gy-3 gx-3">{booksToRender}</div>;
};

export default BookList;
