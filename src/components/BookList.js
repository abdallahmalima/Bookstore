import PropTypes from 'prop-types';
import Book from './Book';
import withLoadingAndError from './withLoadingAndError';

const BookList = ({ books }) => (
    <>
    {(books.length === 0) && <h3 className="textError">Please Add Book</h3>}
    {books.map((book) => (
      <Book key={book.id} {...book} />
    ))}
    </>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

export default withLoadingAndError(BookList);