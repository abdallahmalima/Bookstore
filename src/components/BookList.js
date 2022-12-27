import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksThunk';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('hello');
    dispatch(fetchBooks());
  }, []);

  return <div className="flex flex-col gap-12 items-center w-fit m-auto md:w-full  md:flex-col justify-between py-8">
   {books.map((book) => (
      <Book key={book.id} {...book} />
   ))}
    </div>;
};

export default BookList;