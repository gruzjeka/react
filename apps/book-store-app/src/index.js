import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from "react-router";

import App from './App';
import Cart from "./Cart";
import Checkout from "./Checkout";
import Modal from "./Modal";
import Product from "./Product";
import Products from "./Products";

const PRODUCTS = [
  { id: 0, src: 'images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly' },
  { id: 4, src: 'images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504' }
];

let cartItems = [];
const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Products} products={PRODUCTS} />
      <Route path="/products/:id" component={Product} products={PRODUCTS} addToCart={addToCart} />
      <Route path="/cart" component={Cart} cartItems={cartItems} />
    </Route>
    <Route path="/checkout" component={Checkout} cartItems={cartItems} />
  </Router>,
  document.getElementById('root')
);