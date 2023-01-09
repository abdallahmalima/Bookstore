import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import BookForm from '../components/BookForm';
import 'react-toastify/dist/ReactToastify.css';
import BooksContainer from '../components/BooksContainer';

const BookPage = () => {
  const { loading, error } = useSelector((state) => state.books);
  return (
    <div className='book-page'>
      <ToastContainer />
      <BooksContainer />
     {!loading && !error && <BookForm />}
    </div>

  );
};

export default BookPage;