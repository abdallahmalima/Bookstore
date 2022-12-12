import { combineReducers } from 'redux'
import { bookCreator } from './books/books'
import { statusChecker } from './categories/categories'

export default configureStore=()=>combineReducers({bookCreator,statusChecker})
 