import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      category
    }
    dispatch(addBook(newBook))
  }

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form
        onSubmit={submitBookToStore}
      >
        <input
          type="text"
          className="input-BookTitle"
          placeholder="Book Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input-Catergory"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button className="input-submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBook;
