import './BookList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { books, isLoading } = useSelector((store) => store.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section className="book-list">
      {isLoading && <div className="loading">Loading ...</div>}
      {books && books.map((book) => <Book book={book} key={book.item_id} />)}
    </section>
  );
};

export default BookList;
