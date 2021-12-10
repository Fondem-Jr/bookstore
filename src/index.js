import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/configureStore';
import BookContainer from './components/BookContainer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BookContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
