import './BookList.css';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <section className="book-list">
      {books.map((book) => (
        <Book book={book} key={book.itemId} />
      ))}
    </section>
  );
};

export default BookList;
