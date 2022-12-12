const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const idCounter = 0;

const books = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { id: idCounter + 1, title: action.title }];
    case REMOVE_BOOK:
      return state.filter((stateItem) => stateItem.id !== action.id);
    default: return state;
  }
};

export const bookCreator = (title) => ({
  type: ADD_BOOK,
  title,
});

export const bookRemover = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default books;
