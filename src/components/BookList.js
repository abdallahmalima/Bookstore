import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return <div className='book-list'>
   {books.map((book) => (
      <Book key={book.id} {...book} />
   ))}
    </div>;
};

export default BookList;