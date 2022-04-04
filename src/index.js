import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './assets/boiler-ui.css';
import './assets/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { CartProvider } from './context/cart-context';
import { WishlistProvider } from './context/wishlist-context';
import { UserProvider } from './context/user-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
