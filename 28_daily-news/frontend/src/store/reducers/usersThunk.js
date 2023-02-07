import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const addToNewsletter = createAsyncThunk(
  'users/addToNewsletter',
  async (email, thunkAPI) => {
    try {
      const userRes = await axios.get(`${API_URL}/newsletter?email=${email}`);
      const userData = userRes.data;

      if (userData.length !== 0) {
        return {
          newsletter: 'failed',
        };
      }

      await axios.post(`${API_URL}/newsletter`, {
        email,
      });

      return {
        newsletter: 'added',
        email,
      };
    } catch (err) {
      throw err;
    }
  }
);
