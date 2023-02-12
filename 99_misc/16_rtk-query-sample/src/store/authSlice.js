import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: undefined,
  status: 'idle',
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (username, { rejectWithValue }) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const result = await axios.post('/login', { username }, config);

      return result.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    } finally {
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
