import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostById } from './postsThunk';

const initialState = {
  loading: true,
  articles: {
    items: [],
    page: 1,
    end: false,
  },
  article: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    clearArticle: (state) => {
      state.article = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
      })
      .addCase(fetchPostById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
