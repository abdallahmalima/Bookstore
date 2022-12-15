import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksThunk';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };
  return <div className='book-wrapper'>
             <div>
              <h4>Action</h4>
              <h2>{ title }</h2>
              <p>{ author }</p>
              <ul>
                <li><button>Comments</button></li>
                <li><button onClick={handleRemoveBook}>Remove</button></li>
                <li><button>Edit</button></li>
              </ul>
              </div>
              <div>
              <h4>64%</h4>
              <p>completed</p>
              </div>
              <div>
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
              <button>UPDATE PROGRESS</button>
              </div>
         </div>;
};

export default Book;