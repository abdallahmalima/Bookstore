import { combineReducers } from 'redux';
import books from './books/books';
import categories from './categories/categories';

const configureStore = () => combineReducers({ books, categories });

export default configureStore;