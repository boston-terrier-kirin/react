import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from './pause';

const addUser = createAsyncThunk('users/add', async (name) => {
  await pause(1000);

  const res = await axios.post('http://localhost:3005/users', {
    name,
  });
  return res.data;
});

export { addUser };
