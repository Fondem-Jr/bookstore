import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const InputBook = () => {
  const [title, setTitle] = useState("");
  const [catergory, setcatergory] = useState("");

  const books = useSelector(state =>  state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !catergory) {
      return <p>Please fill in all spaces</p>
    }
    const data = {
      id: uuidv4(),
      title,
      catergory
    }
    dispatch({type: "ADD_BOOK", payload:data})
  }
  console.log(books);
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form
        onSubmit={handleSubmit}
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
          placeholder="Catergory"
          value={catergory}
          onChange={e => setcatergory(e.target.value)}
        />
        <button className="input-submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBook;
