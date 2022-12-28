import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, createBook, deleteBook } from './booksThunk';

const initialState = {
  books: [],
  loading: true,
  error: null,
  deletedError: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetDeletedError(state) {
      state.deletedError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.error = null;
      state.books = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(createBook.fulfilled, (state, action) => {
      const { book } = action.payload;
      state.books = [...state.books, {
        id: book.item_id,
        title: book.title,
        author: book.author,
      }];
    });

    builder.addCase(deleteBook.rejected, (state, action) => {
      state.deletedError = action.error.message;
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.book_id);
    });
  },
});

export const {
  addBook, removeBook, resetDeletedError,
} = booksSlice.actions;
export default booksSlice.reducer;