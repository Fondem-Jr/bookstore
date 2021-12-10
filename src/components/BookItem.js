/* eslint-disable  */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAsync } from '../redux/books/books';

const BookItem = (props) => {
    const { book } = props
    const {
      title, author, category, progress, currentChapter, item_id
    } = book;
    const dispatch = useDispatch();

    const deleteBook = (e) => {
      e.preventDefault();
      dispatch(removeAsync(item_id));
    };
  return (
    <div className="bookItem-container">
      <div className="bookDetail">
        <div className="bookCategory">{category}</div>
        <div className="bookTitle">{title}</div>
        <div className="bookAuthor">{author}</div>
        <div className="bookModifications">
          <div>
            <span className='Comments'>Comments</span>
            <span className='Remove' onClick={(e) => deleteBook(e)}>Remove</span>
            <span className='Edit'>Edit</span>
          </div>
        </div>
      </div>
      <div className="bookProgressContainer">
        <div className="bookProgress">
          <div className="bookProgressIcon" />
          <div className="bookProgressStatus">
            <span className='percentageProgress'>{progress}64%</span>
           
            <p className='Completed'>Completed</p>
          </div>
        </div>
        <div className="bookCurrentChapterContainer">
          <div className="bookCurrentChapter">
            <p className='Current-Chapter'>CURRENT CHAPTER</p>
            <p className='Current-Lesson'>{currentChapter}Introduction</p>
          </div>
          <div className="bookUpdateProgress">
            <button className='button-2'>UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
