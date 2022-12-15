const BOOK_ADDED = 'book-store/books/BOOK_ADDED';
const BOOK_REMOVED = 'book-store/books/BOOK_REMOVED';
const BOOK_FETCHED = 'book-store/books/BOOK_FETCHED';

export const bookFetcher = (books) => ({
  type: BOOK_FETCHED,
  payload: books,
});

export const bookCreator = (book) => ({
  type: BOOK_ADDED,
  payload: book,
});

export const bookRemover = (id) => ({
  type: BOOK_REMOVED,
  payload: id,
});

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK_FETCHED:
      return action.payload;
    case BOOK_ADDED:
      return [...state, {
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      },
      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export default reducer;
