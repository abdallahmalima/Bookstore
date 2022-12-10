const BookForm = () => (
    <div className='book-form'>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type='text' name='title' placeholder="title"/>
        <input type='text' name='author' placeholder="author"/>
        <button>Add Book</button>
      </form>
    </div>

);

export default BookForm;