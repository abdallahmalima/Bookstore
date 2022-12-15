import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksThunk';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setTitle('');
    setAuthor('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({
      item_id: uuidv4(), title, author, category: 'Fiction',
    }));
    resetForm();
  };

  return <div className='book-form'>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
         type='text'
         name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          />
        <input
          type='text'
          name='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="author
          "/>
        <button>Add Book</button>
      </form>
    </div>;
};

export default BookForm;