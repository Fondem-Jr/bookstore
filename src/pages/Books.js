import React from 'react';
import BookList from '../components/BookList';
import InputBook from '../components/InputBook';
import { v4 as uuidv4 } from "uuid";

const Books = () => {
  const books = [
    {
      id: uuidv4(),
      category: 'Action',
      title: 'Ruby',
      author: 'Rails',
      progress: 64,
      currentChapter: 'Chapter 17',
    },
    {
      id: uuidv4(),
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
      <InputBook />
    </div>
  );
};

export default Books;
