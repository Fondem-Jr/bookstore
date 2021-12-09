import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/BookList';
import InputBook from '../components/InputBook';

const Books = () => {
  const books = useSelector(state => state.booksReducer);
  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
};

export default Books;
