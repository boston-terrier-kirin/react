import { createAction } from '@reduxjs/toolkit';

// moviesSliceとsongsSliceの両方のresetを動かす。
export const reset = createAction('app/reset');
