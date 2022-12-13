const BOOK_ADDED = 'book-store/books/BOOK_ADDED';
const BOOK_REMOVED = 'book-store/books/BOOK_REMOVED';

export const bookCreator = (book) => ({
  type: BOOK_ADDED,
  payload: book,
});

export const bookRemover = (id) => ({
  type: BOOK_REMOVED,
  payload: id,
});

const initialState = [
  { id: 1, title: 'The Hunger Games', author: 'Julius John' },
  { id: 2, title: 'War and Peace', author: 'Abdallah Malima' },
  { id: 3, title: 'The Adventures of Huckleberry Finn ', author: 'Irene Jackson' },
  { id: 4, title: 'Hamlet', author: 'James Jackson' },
  { id: 5, title: 'In Search of Lost Time', author: 'Ester Jackson' },
];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, {
        id: action.payload.id,
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
