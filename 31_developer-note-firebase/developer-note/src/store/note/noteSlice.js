import { createSlice } from '@reduxjs/toolkit';
import {
  createNote,
  deleteNote,
  getNote,
  getNoteList,
  updateNote,
} from './noteThunk';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    isLoading: false,
    noteList: [],
    note: null,
    searchTag: '',
    filterNoteByTag: '',
    filterNoteByTitle: '',
  },
  reducers: {
    setSearchTag: (state, action) => {
      state.searchTag = action.payload;
    },
    setFilterTag: (state, action) => {
      state.filterNoteByTag = action.payload;
    },
    setFilterTitle: (state, action) => {
      state.filterNoteByTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNoteList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNoteList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.noteList = action.payload;
      })
      .addCase(getNoteList.rejected, (state, action) => {
        state.isLoading = false;
      });

    builder
      .addCase(getNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.note = action.payload;
      })
      .addCase(getNote.rejected, (state, action) => {
        state.isLoading = false;
      });

    builder
      .addCase(createNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.isLoading = false;

        // /notes/new -> / に遷移して、NoteBrowseが再レンダリングされて、getNoteListが呼ばれるので、不要。
        // state.noteList.push(action.payload);
      })
      .addCase(createNote.rejected, (state, action) => {
        state.isLoading = false;
      });

    builder
      .addCase(updateNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        state.isLoading = false;

        // / で favoriteをクリックした場合は、/ -> / なので、NoteBrowseが再レンダリングされない。
        // stateを手動で更新する必要あり。
        state.note = action.payload;
        const idx = state.noteList.findIndex((note) => {
          return note.id === action.payload.id;
        });

        state.noteList[idx] = action.payload;
      })
      .addCase(updateNote.rejected, (state, action) => {
        state.isLoading = false;
      });

    builder
      .addCase(deleteNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.isLoading = false;

        // POINT: action.payload は、thunkからの戻り値になっている。
        // deleteの時はaxiosから何も返ってこないので、thunk側でidを戻すようにする。
        const updatedNote = state.noteList.filter((note) => {
          return note.id !== action.payload;
        });

        state.noteList = updatedNote;
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const noteActions = noteSlice.actions;
export default noteSlice.reducer;
