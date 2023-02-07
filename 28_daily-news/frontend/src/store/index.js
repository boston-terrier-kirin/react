import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './reducers/postsSlice';
import usersSlice from './reducers/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
  },
});
