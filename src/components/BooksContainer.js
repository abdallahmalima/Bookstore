import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksThunk';
import BookList from './BookList';

const BooksContainer = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="flex flex-col gap-12 items-center w-fit m-auto md:w-full  md:flex-col justify-between py-8">
    <BookList books={books}/>
  </div>
  );
};

export default BooksContainer;