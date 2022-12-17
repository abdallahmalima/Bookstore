import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksThunk';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({
      item_id: uuidv4(), title, author, category,
    }));
    resetForm();
  };

  return (

    <form onSubmit={handleSubmit} className="book-form  flex mt-10 flex-col gap-7 justify-between p-7 border-t-2 border-t-grey-border">
      <h2 className="text-xl font-bold text-warm-grey">ADD NEW BOOK</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-base">
        <label
          htmlFor="title"
          className="h-12 w-full lg:w-1/5"
        >
          <input
            type="text"
            name="title"
            className="h-full w-full shadow-inner border-grey-border placeholder:text-dark-grey px-4 py-3 border-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
          />
        </label>
        <label
          htmlFor="author"
          className="h-12 w-full lg:w-1/5"
        >
          <input
            type="text"
            name="author"
            className="h-full w-full shadow-inner border-grey-border placeholder:text-dark-grey px-4 py-3 border-2 rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Book Author"
          />
        </label>
        <label
          htmlFor="category"
          className="h-12 w-full lg:w-1/5"
        >
          <select
            name="category"
            id="category"
            className="h-full w-full px-4 bg-white text-pinkish-grey border-gray-50 shadow-inner rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Book category"
          >
            <option disabled value="">
              Category
            </option>
            <option
              className=" text-black-two"
              value="Adventure stories"
            >
              Adventure stories
            </option>

            <option
              className=" text-black-two"
              value="Classics"
            >
              Classics
            </option>
            <option
              className=" text-black-two"
              value="Crime"
            >
              Crime
            </option>
            <option
              className=" text-black-two"
              value="Adventure"
            >
              Adventure
            </option>
            <option
              className=" text-black-two"
              value="Fantasy"
            >
              Fantasy
            </option>
            <option
              className=" text-black-two"
              value="Historical fiction"
            >
              Historical fiction
            </option>
          </select>
        </label>
        <button type="submit" className="text-dirty-white app-bg-primary rounded w-fit font-light font-roboto px-12 py-3 text-base font-bold">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BookForm;