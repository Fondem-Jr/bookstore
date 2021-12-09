import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
};

export default BookList;
