import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../firebase.config';

export const getNoteList = createAsyncThunk('note/getNoteList', async () => {
  try {
    const notesRef = collection(db, 'notes');
    const q = query(notesRef, orderBy('tags', 'asc'), orderBy('title', 'asc'));
    const querySnap = await getDocs(q);

    const notes = [];
    querySnap.forEach((doc) => {
      notes.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    return notes;
  } catch (err) {
    throw err;
  }
});

export const getNote = createAsyncThunk(
  'note/getNote',
  async (id, thunkAPI) => {
    try {
      const docRef = doc(db, 'notes', id);
      const docSnap = await getDoc(docRef);

      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } catch (err) {
      throw err;
    }
  }
);

export const createNote = createAsyncThunk(
  'note/createNote',
  async (note, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, 'notes'), note);
      const docSnap = await getDoc(docRef);

      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } catch (err) {
      throw err;
    }
  }
);

export const updateNote = createAsyncThunk(
  'note/updateNote',
  async (note, thunkAPI) => {
    try {
      const docRef = doc(db, 'notes', note.id);
      await updateDoc(docRef, note);

      const docSnap = await getDoc(docRef);

      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } catch (err) {
      throw err;
    }
  }
);

export const deleteNote = createAsyncThunk(
  'note/deleteNote',
  async (note, thunkAPI) => {
    try {
      const docRef = doc(db, 'notes', note.id);
      await deleteDoc(docRef);

      return note.id;
    } catch (err) {
      throw err;
    }
  }
);
