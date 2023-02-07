import { createSlice } from '@reduxjs/toolkit';
import { addToNewsletter } from './usersThunk';

const initialState = {
  action: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToNewsletter.fulfilled, (state, action) => {
      state.action = action.payload;
    });
  },
});

export default usersSlice.reducer;
