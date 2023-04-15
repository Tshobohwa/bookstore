import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const { itemId, title, author } = book;
  const dispatch = useDispatch();
  return (
    <div className="Book-container" key={itemId}>
      <h3 className="book-title">{title}</h3>
      <h3 className="book-author">{author}</h3>
      <button
        className="Remove-book__btn"
        type="button"
        onClick={() => dispatch(removeBook(book.itemId))}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
