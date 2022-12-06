import { useState } from 'react';

const BookCreate = ({ onAddBook }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title });
    setTitle('');
  };

  return (
    <div
      className="p-3"
      style={{ backgroundColor: '#f3f4f6', borderRadius: '5px' }}
    >
      <h6 className="lead">Add a Book</h6>
      <form onSubmit={handleSubmit}>
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
