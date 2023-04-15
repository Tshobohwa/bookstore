import { useState } from 'react';
import './AddNewBook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookTitle && !bookAuthor) return;
    dispatch(
      addBook({
        item_id: `item${Math.floor(Math.random() * 1000)}`,
        author: bookAuthor,
        title: bookTitle,
        category: 'category',
      }),
    );
    setBookAuthor('');
    setBookTitle('');
  };
  return (
    <footer className="page-footer">
      <h2 className="footer-title">ADD NEW BOOK</h2>
      <form className="footer-form" onSubmit={handleSubmit}>
        <input
          placeholder="Book title"
          type="text"
          className="book-input"
          onChange={(e) => {
            setBookTitle(e.target.value);
          }}
          value={bookTitle}
        />
        <input
          placeholder="Author"
          type="text"
          className="author-input"
          onChange={(e) => {
            setBookAuthor(e.target.value);
          }}
          value={bookAuthor}
        />
        <button className="add-book__btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </footer>
  );
};

export default AddNewBook;
