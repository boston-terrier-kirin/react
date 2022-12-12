import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async (_, thunkAPI) => {
  await pause(2000);

  const res = await axios.get('http://localhost:3005/users');
  return res.data;

  // thunkAPIも使える
  // return thunkAPI.rejectWithValue('ERROR');
});

function pause(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export { fetchUsers };
