import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
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

// movie/addMovie を直接書きたくなった場合、これでGETできる。
console.log(moviesSlice.actions.addMovie.toString());

export const moviesReducer = moviesSlice.reducer;
export const { addMovie, removeMovie } = moviesSlice.actions;
