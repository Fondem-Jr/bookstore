import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import InputBook from '../components/InputBook';
import { loadAsync } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const [loadBook, setLoadBook] = useState('idle');

  useEffect(() => {
    if (loadBook === 'idle')
    return () => {
      dispatch(loadAsync());
      setLoadBook('done')
    }
  })

  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
};

export default Books;
