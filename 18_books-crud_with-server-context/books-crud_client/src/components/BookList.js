import BookShow from './BookShow';

const BookList = ({ books, onDeleteBook, onEditBook }) => {
  const booksToRender = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      onDeleteBook={onDeleteBook}
      onEditBook={onEditBook}
    />
  ));

  return <div className="row gy-3 gx-3">{booksToRender}</div>;
};

export default BookList;
