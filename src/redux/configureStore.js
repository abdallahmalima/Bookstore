import { combineReducers } from 'redux';
import {reducer as books} from './books/books';
import {reducer as categories} from './categories/categories';

const configureStore = () => combineReducers({ books, categories });

export default configureStore;