/* eslint-disable react/prop-types */
import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          book={book}
        />
      ))}
    </div>
  );
};

export default BookList;
