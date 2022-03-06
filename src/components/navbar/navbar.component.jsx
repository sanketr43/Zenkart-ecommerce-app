import logo from '../../logo.png';
import './navbar.styles.css';

function Navbar() {
    return ( 
        <nav className="bui-navbar">
          <div className="bui-navbar-container bui-container">
            <div className="bui-navbar-logo">
              <img src={logo} alt="zenkart" />
            </div>
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
                    <button className="bui-btn bui-btn-info"  onclick="redirectPage('login.html');">Login</button>
                </div>
                <div className="bui-navbar-menu-item">
                    <a className="bui-navbar-icon"  onclick="redirectPage('wishlist.html');"><i className="bi bi-heart"></i><span className="bui-badge-round bui-badge-absolute bui-bg-info">0</span></a>
                </div>
                <div className="bui-navbar-menu-item">
                    <a className="bui-navbar-icon"  onclick="redirectPage('cart.html');"><i className="bi bi-cart"></i><span className="bui-badge-round bui-badge-absolute bui-bg-info">0</span></a>
                </div>
            </div>
          </div>
      </nav>
     );
}

export default Navbar;