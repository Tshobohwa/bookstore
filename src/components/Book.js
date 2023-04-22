import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import BookProgress from './BookProgress';
import CurrentChapter from './CurrentChapter';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="Book-container" key={book.item_id}>
      <section className="book-section left-section">
        <h3 className="book-category">Category</h3>
        <h3 className="book-title">{book.title}</h3>
        <h3 className="book-author">{book.author}</h3>
        <ul className="buttons-list">
          <li className="button-container">
            <button className="book-btn" type="button">
              Comments
            </button>
          </li>
          <li className="button-container">
            <button
              className="book-btn"
              type="button"
              onClick={() => dispatch(removeBook(book.item_id))}
            >
              Remove
            </button>
          </li>
          <li className="button-container">
            <button className="book-btn" type="button">
              Edit
            </button>
          </li>
        </ul>
      </section>
      <section className="book-section right-section">
        <BookProgress />
        <CurrentChapter />
      </section>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
