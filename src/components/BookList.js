import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksThunk';
import Book from './Book';

const BookList = () => {
  const { books, error, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return <div className="flex flex-col gap-12 items-center w-fit m-auto md:w-full  md:flex-col justify-between py-8">
    {loading && <h3 className="textError">Loading...</h3>}
    {error && <h3 className="textError">{error}</h3>}
    {!loading && !error && (books.length === 0) && <h3 className="textError">Please Add Book</h3>}
    {!loading && !error && books.map((book) => (
      <Book key={book.id} {...book} />
    ))}
    </div>;
};

export default BookList;