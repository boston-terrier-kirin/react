import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  list: [
    {
      id: 1,
      title: 'Pulp fiction',
    },
    {
      id: 2,
      title: 'Rambo',
    },
  ],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialCounterState,
  reducers: {
    addMovie: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
