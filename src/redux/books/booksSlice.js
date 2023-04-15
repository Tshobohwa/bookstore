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
    return response;
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
      return response;
    } catch (error) {
      return error.message;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      const newItem = {
        item_id: `item_${Math.floor(Math.random() * 1000)}`,
        title,
        author,
        category: 'Category',
      };
      return { ...state, books: [...state.books, newItem] };
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const updatedBooks = state.books.filter((book) => book.itemId !== bookId);
      return { ...state, books: updatedBooks };
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => ({ ...state, isLoading: true }),
    [getBooks.fulfilled]: (state, action) => {
      const newBooks = [];
      const gotBooks = action.payload;
      Object.keys(action.payload).forEach((book) => newBooks.push({
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
    [addBook.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [addBook.pending]: (state) => ({ ...state, isLoading: true, error: false }),
    [addBook.fulfilled]: (state) => ({
      ...state,
      isLoading: false,
      error: false,
    }),
    [addBook.rejected]: (state) => ({ ...state, error: true }),
    [removeBook.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }),
    [removeBook.fulfilled]: (state, { payload }) => {
      const id = payload;
      const bookSliceState = state;
      bookSliceState.books = state.books.filter((book) => book.item_id !== id);
      bookSliceState.error = false;
    },
  },
});

export default booksSlice.reducer;
