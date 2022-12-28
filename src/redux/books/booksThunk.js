import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const BOOK_ADDED = 'book-store/books/BOOK_ADDED';
const BOOK_REMOVED = 'book-store/books/BOOK_REMOVED';
const BOOK_FETCHED = 'book-store/books/BOOK_FETCHED';

export const fetchBooks = createAsyncThunk(BOOK_FETCHED, async () => {
  const res = await axios.get(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books`);
  const books = Object.entries(res.data).map((arr) => {
    const [id, [{ title, author, category }]] = arr;
    return {
      id, title, author, category,
    };
  });
  return books;
});

export const createBook = createAsyncThunk(BOOK_ADDED, async (book, thunkAPI) => {
  const res = await axios.post(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books`, book);
  thunkAPI.dispatch(fetchBooks());
  return { data: res.data, book };
});

export const deleteBook = createAsyncThunk(BOOK_REMOVED, async (id) => {
  const res = await axios.delete(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books/${id}`);
  const metaData = { book_id: id, res_text: res.data };
  return metaData;
});
