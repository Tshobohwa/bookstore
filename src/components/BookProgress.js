import './BookProgress.css';

const BookProgress = () => (
  <div className="book-progress">
    <div className="book-progress__circle">
      <div className="progress-inner__circle" />
    </div>
    <div className="book-progress__info">
      <h3 className="book-progress__percent">64%</h3>
      <p className="book-progress__status">completed</p>
    </div>
  </div>
);

export default BookProgress;
