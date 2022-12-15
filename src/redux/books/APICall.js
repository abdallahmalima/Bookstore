import axios from 'axios';
import { bookFetcher, bookCreator, bookRemover } from './books';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const fetchBooks = () => {
  const formatedBooks = (response) => Object.entries(response.data).map((arr) => {
    const [id, [{ title, author }]] = arr;
    return { id, title, author };
  });

  return (dispatch) => {
    axios.get(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books`)
      .then((response) => {
        const books = formatedBooks(response);
        dispatch(bookFetcher(books));
      });
  };
};

export const postBook = (book) => (dispatch) => (
  axios.post(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books`, book)
    .then((response) => {
      if (response.status === 201) dispatch(bookCreator(book));
    })
);

export const deleteBook = (id) => (dispatch) => {
  axios.delete(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books/${id}`)
    .then((response) => {
      if (response.status === 201) dispatch(bookRemover(id));
    });
};