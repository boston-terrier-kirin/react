import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ page = 1, order = 'asc', limit = 10 }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${API_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
      );

      const data = res.data;

      // thunkAPIで今のステートをGETできる。
      const prevState = thunkAPI.getState().posts;

      return {
        items: [...prevState.articles.items, ...data],
        page,
        end: data.length === 0 ? true : false,
      };
    } catch (err) {
      throw err;
    }
  }
);

export const fetchPostById = createAsyncThunk(
  'posts/fetchById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${API_URL}/posts/${id}`);
      const data = res.data;

      return data;
    } catch (err) {
      throw err;
    }
  }
);
