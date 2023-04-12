import './Book.css';
import PropTypes from 'prop-types';

const Book = ({ bookInfo }) => (
  <div className="Book-container" key={bookInfo.id}>
    <h3 className="book-title">{bookInfo.title}</h3>
    <h3 className="book-author">{bookInfo.author}</h3>
    <button className="Remove-book__btn" type="button">
      Remove
    </button>
  </div>
);

Book.propTypes = {
  bookInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
