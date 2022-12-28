import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import 'react-toastify/dist/ReactToastify.css';

const BookPage = () => {
  const { loading, error } = useSelector((state) => state.books);
  return (
    <div className='book-page'>
      <ToastContainer />
      <BookList />
     {!loading && !error && <BookForm />}
    </div>

  );
};

export default BookPage;