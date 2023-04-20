import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HwaydmaQRiBw3WcY50QK/';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const url = `${baseUrl}books`;
    const response = await axios.get(url);
    const { data } = response;
    return data || [];
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  try {
    const url = `${baseUrl}books`;
    const response = await axios.post(url, data);
    if (!response) throw new Error('Enable to add a new book');
    return data;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    try {
      const url = `${baseUrl}books/${bookId}`;
      const response = await axios.delete(url);
      if (!response) throw new Error('Enable to delete the book');
      return bookId;
    } catch (error) {
      return error.message;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => ({ ...state, isLoading: true }),
    [getBooks.fulfilled]: (state, { payload }) => {
      const newBooks = [];
      const gotBooks = payload;
      const booksId = Object.keys(gotBooks);
      booksId.forEach((book) => newBooks.push({
        item_id: book,
        title: gotBooks[book][0].title,
        author: gotBooks[book][0].author,
        category: gotBooks[book][0].category,
      }));
      return {
        ...state,
        isLoading: false,
        books: newBooks,
      };
    },
    [addBook.rejected]: (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
    [addBook.pending]: (state) => ({ ...state, isLoading: true, error: false }),
    [addBook.fulfilled]: (state, { payload }) => ({
      books: [...state.books, payload],
      isLoading: false,
      error: false,
    }),
    [addBook.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [removeBook.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }),
    [removeBook.fulfilled]: (state, { payload }) => {
      const updatedBooks = state.books.filter(
        (book) => book.item_id !== payload,
      );
      return { error: false, books: updatedBooks, isLoading: false };
    },
  },
});

export default booksSlice.reducer;
