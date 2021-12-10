// import axios from "axios";
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';
const app_id = 'iRVk75KxTjNsxepoOmxr';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return (state.filter((book) => book.item_id !== action.item_id));
    case LOAD_BOOKS:
      return (action.books);
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  item_id: id,
});

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

const fetchBooks = async () => {
  const response = await fetch(`${BASE_URL}/${app_id}/books/`);
  const obj = await response.json();
  const keys = Object.keys(obj);
  const list = [];
  keys.forEach((key) => {
    list.push({ ...obj[key][0], item_id: key});
  });
  return list;
}

export const loadAsync = () => async (dispatch) => {
  dispatch(loadBooks(await fetchBooks()));
};

export const addAsync = (book) => (dispatch) => {
  fetch(`${BASE_URL}/${app_id}/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  dispatch(addBook(book));
};

export const removeAsync = (id) => (dispatch) => {
  fetch(`${BASE_URL}/${app_id}/books/${id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(id));
};

export default reducer;
