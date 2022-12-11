import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      return state.filter((song) => {
        return song !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    // app/resetがdispatchされたら、moviesSliceとsongsSliceの両方でresetする。
    builder.addCase(reset, (state, action) => {
      // state = []; だとimmerが認識してくれない。
      return [];
    });
  },
});

export const songsReducer = songsSlice.reducer;
export const { addSong, removeSong } = songsSlice.actions;
