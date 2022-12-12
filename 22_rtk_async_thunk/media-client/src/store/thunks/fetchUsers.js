import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from './pause';

const fetchUsers = createAsyncThunk('users/fetch', async (_, thunkAPI) => {
  await pause(3000);

  const res = await axios.get('http://localhost:3005/users');
  return res.data;

  // thunkAPIも使える
  // return thunkAPI.rejectWithValue('ERROR');
});

export { fetchUsers };
