import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksThunk';
import BookProgress from './bookprogress';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const maxChapter = 77;
  const randomProgress = Math.random();
  const currentChapter = maxChapter * randomProgress;
  const chapter = Math.floor(currentChapter);
  const percent = Math.floor(100 * randomProgress);

  const showToastr = (msg) => {
    toast(msg);
  };

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };
  return (
  <div className="flex flex-col gap-12 items-center bg-white w-fit m-auto book-card  md:flex-row justify-between rounded-sm px-7 py-8 shadow-lg">
  <li className="flex flex-col gap-6 justify-between items-start w-72 ">
    <div className="flex flex-col gap-0">
      <span className="font-bold text-sm text-black-two opacity-50">
        {category}
      </span>
      <h3 className="text-xl font-bold font-roboto">
        {title}
      </h3>
      <span className="text-sm font-light app-color-primary font-roboto">
        {author}
      </span>
    </div>
    <div className="flex gap-2 justify-center items-center text-gray-300">
      <button type="button" className="text-m font-light app-color-primary font-roboto cursor-pointer">Comments</button>
      <span className="text-black-border px-1">|</span>
      <button type="button" onClick={handleRemoveBook} className="text-m font-light app-color-primary font-roboto cursor-pointer">Remove</button>
      <span className="text-black-border px-1">|</span>
      <button type="button" className="text-m font-light app-color-primary font-roboto cursor-pointer">Edit</button>
    </div>
  </li>
  <BookProgress percent={percent} chapter={`Chapter ${chapter}`} />
</div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;