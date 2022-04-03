import Homepage from './components/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import Category from './components/cateogry/category.component';
import Cart from './components/cart/cart.component';
import Wishlist from './components/wishlist/wishlist.component';

import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login.component';
import Register from './components/register/register.component';
import { useUser } from './context/user-context';

function App() {
  const { stateUser } = useUser();

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<Category />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path='login' element={stateUser.user ? <Navigate to="/" />   : <Login />} />
        <Route path='register' element={stateUser.user ? <Navigate to="/" />   : <Register />} />
      </Routes>
    </>
  );
}

export default App;
