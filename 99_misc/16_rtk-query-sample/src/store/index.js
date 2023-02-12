import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReduer from './authSlice';
import { authApi } from './rtkAuthSlice';
import rtkAuthReducer from './rtkAuthSlice';

export const store = configureStore({
  reducer: {
    auth: authReduer,
    rtkAuth: rtkAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

setupListeners(store.dispatch);
