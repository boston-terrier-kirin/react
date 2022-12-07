import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({ title });
    setTitle('');
  };

  return (
    <div
      className="p-3"
      style={{ backgroundColor: '#f3f4f6', borderRadius: '5px' }}
    >
      <h6 className="lead">Add a Book</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter a Title"
          />
        </div>
        <button className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
