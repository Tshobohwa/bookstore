import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        id: Math.floor(Math.random() * 100),
        title: action.payload.title,
        author: action.payload.author,
      });
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
