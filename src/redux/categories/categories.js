const STATUS_CHECKED = 'book-store/categories/STATUS_CHECKED';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';

    default: return state;
  }
};

export const statusChecker = () => ({
  type: STATUS_CHECKED,
});

export default reducer;
