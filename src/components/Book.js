import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="Book-container" key={book.item_id}>
      <h3 className="book-title">{book.title}</h3>
      <h3 className="book-author">{book.author}</h3>
      <button
        className="Remove-book__btn"
        type="button"
        onClick={() => dispatch(removeBook(book.item_id))}
      >
        Remove
      </button>
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
