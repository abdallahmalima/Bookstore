const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default: return state;
  }
};

export const statusChecker = () => ({
  type: CHECK_STATUS,
});

export default reducer;
