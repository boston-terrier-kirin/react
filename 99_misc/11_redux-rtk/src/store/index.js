import { configureStore } from '@reduxjs/toolkit';
import moviesReduer from './moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReduer,
  },
});
