import { useSelector } from 'react-redux';

const withLoadingAndError = (BookList) => function withLoadingAndError({ books }) {
  const { error, loading } = useSelector((state) => state.books);
  return (
       <>
        {loading && <h3 className="textError">Loading...</h3>}
        {error && <h3 className="textError">{error}</h3>}
        {!loading && !error && <BookList books={books} />}
        </>
  );
};

export default withLoadingAndError;