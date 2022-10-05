import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoService from './todoService';

const initialState = {
  todos: [],
};

export const addTodo = createAsyncThunk(
  'todos/add',
  async (todoId, thunkAPI) => {
    try {
      return await todoService.getTodo(todoId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.message = action.payload;
      });
  },
});

export const { deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
