import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload;
    },
    addNote: (state, action) => {
      state.noteList.push(action.payload);
    },
    updateNote: (state, action) => {
      const noteToUpdate = action.payload;
      const indexToUpdate = state.noteList.findIndex(
        (note) => note.id === noteToUpdate.id
      );

      state.noteList[indexToUpdate] = noteToUpdate;
    },
    deleteNote: (state, action) => {
      console.log(action);
      const filtered = state.noteList.filter(
        (note) => note.id !== action.payload
      );

      state.noteList = filtered;
    },
  },
});

export const notesActions = notesSlice.actions;
export default notesSlice.reducer;
