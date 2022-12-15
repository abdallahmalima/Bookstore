import { configureStore, combineReducers } from '@reduxjs/toolkit';
import books from './books/booksSlice';
import categories from './categories/categories';

const rootReducer = combineReducers({ books, categories });

const store = configureStore({ reducer: rootReducer });

export default store;