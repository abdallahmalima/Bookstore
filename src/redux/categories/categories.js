const CHECK_STATUS = 'CHECK_STATUS';

const categories = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default: return state;
  }
};

export const statusChecker = () => ({
  type: CHECK_STATUS,
});

export default categories;
