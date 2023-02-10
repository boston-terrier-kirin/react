import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getNoteList = createAsyncThunk('note/getNoteList', async () => {
  try {
    const res = await axios.get(`${API_URL}/notes`);
    return res.data;
  } catch (err) {
    throw err;
  }
});

export const getNote = createAsyncThunk(
  'note/getNote',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`${API_URL}/notes/${id}`);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
);

export const createNote = createAsyncThunk(
  'note/createNote',
  async (note, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/notes`, note);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
);

export const updateNote = createAsyncThunk(
  'note/updateNote',
  async (note, thunkAPI) => {
    try {
      const res = await axios.patch(`${API_URL}/notes/${note.id}`, note);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
);

export const deleteNote = createAsyncThunk(
  'note/deleteNote',
  async (note, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/notes/${note.id}`);
      return note.id;
    } catch (err) {
      throw err;
    }
  }
);
