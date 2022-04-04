import logo from '../../assets/logo.png';
import './navbar.styles.css';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-context';
import { useUser } from '../../context/user-context';

function Navbar() {
    let navigate = useNavigate();

    const { state } = useCart();
    const { stateWishlist } = useWishlist();
    const { stateUser, dispatchUser } = useUser();

    return ( 
        <nav className="bui-navbar">
          <div className="bui-navbar-container bui-container">
            <Link to="/">
                <div className="bui-navbar-logo">
                    <img src={logo} alt="zenkart" />
                </div>
            </Link>
            <div className="bui-navbar-menu bui-navbar-search bui-mobile-search" id="mobileSearchBlock">
                <i className="bi bi-search"></i>
                <input type="text" className="bui-form-control" placeholder="Search" id="mobileSearchInput" />
            </div>
            <div className="bui-navbar-menu">
                <div className="bui-mobile-menu">
                    <a className="bui-navbar-icon" id="mobileSearchMenu"><i className="bi bi-search"></i></a>
                </div>
                <div className="bui-mobile-menu">
                    <a className="bui-navbar-icon"><i className="bi bi-box-arrow-in-right"></i></a>
                </div>
                <div className="bui-navbar-menu-item bui-desktop">
                    {
                        (stateUser.user) 
                        ? <a href='#' style={{ textDecoration: "none", color: "#7C3AED" }} onClick={() => dispatchUser({type: "LOGGED_OUT_USER",payload: null})}>Logout <i className="bi bi-box-arrow-right"></i></a>
                        : <button className="bui-btn bui-btn-info" onClick={() => navigate('login')}>Login</button>
                    }
                </div>
                <div className="bui-navbar-menu-item">
                    <NavLink to='wishlist' className="bui-navbar-icon"><i className="bi bi-heart"></i><span className="bui-badge-round bui-badge-absolute bui-bg-info">{stateWishlist.wishlistItems.length}</span></NavLink>
                </div>
                <div className="bui-navbar-menu-item">
                    <NavLink to="cart" className="bui-navbar-icon"><i className="bi bi-cart"></i><span className="bui-badge-round bui-badge-absolute bui-bg-info">{state.totalQty}</span></NavLink>
                </div>
            </div>
          </div>
      </nav>
     );
}

export default Navbar;