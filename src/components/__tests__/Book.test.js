import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Book from '../Book';
import store from '../../redux/configureStore';

describe('Book component', () => {
  it('renders book details correctly', () => {
    const id = '123';
    const title = 'The Great Gatsby';
    const author = 'F. Scott Fitzgerald';
    const category = 'Classics';

    const { getByText } = render(
    <Provider store={store}>
      <Book
        id={id}
        title={title}
        author={author}
        category={category}
      />
      </Provider>,
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(author)).toBeInTheDocument();
    expect(getByText(category)).toBeInTheDocument();
  });
});
