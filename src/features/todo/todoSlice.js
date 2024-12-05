import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{id: '', text: ''}],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: initialState.todos,
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => 
      todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;  // Deconstructing the payload
      const todo = state.todos.find((todo) => todo.id === id);  // Find the todo by id
      if (todo) {
        todo.text = text;  // Update the text of the todo
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
