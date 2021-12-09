/* eslint-disable  */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
    const { book } = props
    const {
      title, author, category, progress, currentChapter,
    } = book;
    const dispatch = useDispatch();

    const deleteBook = (e) => {
      e.preventDefault();
      dispatch(removeBook(title));
    };
  return (
    <div className="bookItem-container">
      <div className="bookDetail">
        <div className="bookCategory">{category}</div>
        <div className="bookTitle">{title}</div>
        <div className="bookAuthor">{author}</div>
        <div className="bookModifications">
          <div>
            <button>Comments</button>
            <button type="button" onClick={(e) => deleteBook(e)}>Remove</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="bookProgressContainer">
        <div className="bookProgress">
          <div className="bookProgressIcon" />
          <div className="bookProgressStatus">
            {progress}
            %
            <p>Completed</p>
          </div>
        </div>
        <div className="bookCurrentChapterContainer">
          <div className="bookCurrentChapter">
            <p>CURRENT CHAPTER</p>
            {currentChapter}
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
