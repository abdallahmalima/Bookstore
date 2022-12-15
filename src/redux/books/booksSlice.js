import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, createBook, deleteBook } from './booksThunk';

const initialState = {
  books: [],
  loading: true,
  error: '',
  created: false,

};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(createBook.fulfilled, (state, action) => {
      const { book } = action.payload;
      state.books = [...state.books, {
        id: book.item_id,
        title: book.title,
        author: book.author,
      }];
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.book_id);
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;