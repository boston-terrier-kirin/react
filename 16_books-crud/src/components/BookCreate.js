import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const BookCreate = ({ onAddBook }) => {
  const [title, setTitle] = useState('');

  const addBookHandler = (e) => {
    e.preventDefault();
    onAddBook({ id: uuid(), title });
    setTitle('');
  };

  return (
    <div
      className="p-3"
      style={{ backgroundColor: '#f3f4f6', borderRadius: '5px' }}
    >
      <h6 className="lead">Add a Book</h6>
      <form onSubmit={addBookHandler}>
        <div className="mb-3">
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
