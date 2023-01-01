import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBook } from '../redux/books/booksThunk';
import { resetDeletedError } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorAuthor, setErrorAuthor] = useState(null);
  const [errorCategory, setErrorCategory] = useState(null);

  const dispatch = useDispatch();

  const { deletedError } = useSelector((state) => state.books);

  useEffect(() => {
    if (deletedError) {
      toast.error(deletedError);
      dispatch(resetDeletedError());
    }
  }, [deletedError]);

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  const isValid = (title, author, category) => {
    let validStatus = true;
    if (title.length === 0) {
      setErrorTitle('Title field is required');
      validStatus = false;
    }
    if (author.length === 0) {
      setErrorAuthor('Author field is required');
      validStatus = false;
    }

    if (category.length === 0) {
      setErrorCategory('Category field is required');
      validStatus = false;
    }

    return validStatus;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mTitle = title.trim();
    const mAuthor = author.trim();

    if (!isValid(mTitle, mAuthor, category)) {
      return;
    }

    dispatch(createBook({
      item_id: uuidv4(), title: mTitle, author: mAuthor, category,
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
            required
          />
          {errorTitle && <span className="text-red-700">*{errorTitle}*</span>}
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
            required
          />
           {errorAuthor && <span className="text-red-700">*{errorAuthor}*</span>}
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
          {errorCategory && <span className="text-red-700">*{errorCategory}*</span>}
        </label>
        <button type="submit" className="text-dirty-white app-bg-primary rounded w-fit font-light font-roboto px-12 py-3 text-base font-bold">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BookForm;