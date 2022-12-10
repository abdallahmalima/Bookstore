import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BookPage = () => (
    <div className='book-page'>
      <BookList />
      <BookForm />
    </div>

);

export default BookPage;