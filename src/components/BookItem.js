/* eslint-disable  */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import InputBook from './InputBook';


const BookItem = (props) => {
  return (
    <div className="bookItem-container">
      <div className="bookDetail">
        <div className="bookCategory">{props.book.category}</div>
        <div className="bookTitle">{props.book.title}</div>
        <div className="bookAuthor">{props.book.author}</div>
        <div className="bookModifications">
          <div>
            <button>Comments</button>
            <button>Button</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="bookProgressContainer">
        <div className="bookProgress">
          <div className="bookProgressIcon" />
          <div className="bookProgressStatus">
            {props.book.progress}
            %
            <p>Completed</p>
          </div>
        </div>
        <div className="bookCurrentChapterContainer">
          <div className="bookCurrentChapter">
            <p>CURRENT CHAPTER</p>
            {props.book.currentChapter}
          </div>
          <div className="bookUpdateProgress">
            <button>UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
