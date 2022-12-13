import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { bookCreator } from '../redux/books/books';

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
    dispatch(bookCreator({ id: uuidv4(), title, author }));
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