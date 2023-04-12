import './BookList.css';
import Book from './Book';

const BookList = () => {
  const bookList = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <section className="book-list">
      {bookList.map((book) => (
        <Book bookInfo={book} key={book.id} />
      ))}
    </section>
  );
};

export default BookList;
