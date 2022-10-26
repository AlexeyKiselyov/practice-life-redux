import { selectBooks } from 'redux/books/booksSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from 'redux/books/booksSlice';
// import { deleteBook } from 'redux/books/booksActions';

export const HomePage = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  console.log(books);
  return (
    <>
      <ul>
        {books.map(({ id, title, author, img, plot }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{author}</p>
            <img src={img} alt={title} />
            <p>{plot}</p>
            <button onClick={() => dispatch(deleteBook(id))} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};