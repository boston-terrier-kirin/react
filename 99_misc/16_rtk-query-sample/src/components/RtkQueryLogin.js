import React, { useState } from 'react';
import { useLoginMutation } from '../store/rtkAuthSlice';

const RtkQueryLogin = () => {
  const [username, setUsername] = useState('');
  const [login, loginResult] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    login({ username });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default RtkQueryLogin;
