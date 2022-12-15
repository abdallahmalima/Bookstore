import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/APICall';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return <div className='book-list'>
   {books.map((book) => (
      <Book key={book.id} {...book} />
   ))}
    </div>;
};

export default BookList;