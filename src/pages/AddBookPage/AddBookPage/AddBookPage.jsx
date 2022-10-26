import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/booksSlice';
// import { addBook } from 'redux/books/booksActions';

export const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [img, setImg] = useState('');
  const [plot, setPlot] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'img':
        setImg(value);
        break;
      case 'plot':
        setPlot(value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newBook = {
      id: nanoid(),
      title,
      author,
      img,
      plot,
    };

    dispatch(addBook(newBook))

    setTitle('');
    setAuthor('');
    setImg('');
    setPlot('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input value={title} type="text" name="title" onChange={handleChange} />
        </label>
        <label>
          <input value={author} type="text" name="author" onChange={handleChange} />
        </label>
        <label>
          <input value={img} type="url" name="img" onChange={handleChange} />
        </label>
        <label>
          <input value={plot} type="text" name="plot" onChange={handleChange} />
        </label>
        <button>Save</button>
      </form>
    </>
  );
};
