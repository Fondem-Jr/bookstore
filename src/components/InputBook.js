import React from 'react';

const InputTodo = (props) => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input
        type="text"
        className="input-BookTitle"
        placeholder="Book Title"
      />
      <input
        type="text"
        className="input-Catergory"
        placeholder="Catergory"
      />
      <button className="input-submit">ADD BOOK</button>
    </form>
  </div>
);

export default InputTodo;
