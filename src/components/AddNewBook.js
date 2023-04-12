import './AddNewBook.css';

const AddNewBook = () => (
  <footer className="page-footer">
    <h2 className="footer-title">ADD NEW BOOK</h2>
    <form className="footer-form">
      <input placeholder="Book title" type="text" className="book-input" />
      <input placeholder="Author" type="text" className="author-input" />
      <button className="add-book__btn" type="submit">
        ADD BOOK
      </button>
    </form>
  </footer>
);

export default AddNewBook;
