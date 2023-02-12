import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../store/authSlice';

const AsyncThunkLogin = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await dispatch(loginAsync(username));
    console.log(result);

    if (loginAsync.fulfilled.match(result)) {
      alert('loginに成功しました');
    }

    if (loginAsync.rejected.match(result)) {
      alert('loginに失敗しました');
    }
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

export default AsyncThunkLogin;
