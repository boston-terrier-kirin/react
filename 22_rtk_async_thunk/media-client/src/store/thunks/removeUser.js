import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from './pause';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  await pause(500);

  await axios.delete(`http://localhost:3005/users/${user.id}`);
  return user;
});

export { removeUser };
