import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  user: undefined,
  // ローディング状態はRTK Queryのカスタムフックで管理
  // status: 'idle',
};

export const authApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const rtkAuthSlice = createSlice({
  name: 'rtkAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );
  },
});

export const { useLoginMutation } = authApi;
export default rtkAuthSlice.reducer;
