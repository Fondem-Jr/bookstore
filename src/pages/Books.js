import React from 'react';
import BookList from '../components/BookList';
import InputTodo from '../components/InputBook';

const Books = () => {
  const books = [
    {
      id: 1,
      category: 'Action',
      title: 'Ruby',
      author: 'Rails',
      progress: 64,
      currentChapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Economy',
      title: 'JS',
      author: 'React',
      progress: 64,
      currentChapter: 'Chapter 17',
    },
  ];
  return (
    <div>
      <BookList books={books} />
      <InputTodo />
    </div>
  );
};

export default Books;
