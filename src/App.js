import Homepage from './components/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import Category from './components/cateogry/category.component';
import Cart from './components/cart/cart.component';
import Wishlist from './components/wishlist/wishlist.component';

import {Routes, Route} from 'react-router-dom';
import Login from './components/login/login.component';
import Register from './components/register/register.component';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="category" element={<Category />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
