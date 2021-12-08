import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../BookStore.css';
import Books from '../pages/Books';
import Categories from '../pages/Categories';
import Navbar from './Navbar';

const BookContainer = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </div>
);

export default BookContainer;
