import { ToastContainer } from 'react-toastify';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import 'react-toastify/dist/ReactToastify.css';

const BookPage = () => (
    <div className='book-page'>
       <ToastContainer />
      <BookList />
      <BookForm />
    </div>

);

export default BookPage;