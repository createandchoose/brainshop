import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'context/cart-context';
import { useAuth } from 'context/auth-context';
import { SearchBar } from 'components/input/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useCart();
  const { auth, setAuth } = useAuth();

  console.log(auth, ' - navbar');

  const loginUserHandler = () => {
    navigate('/login');
  };

  const logoutUserHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    setAuth({ token: '', isAuth: false });
    navigate('/');
  };

  return (
    <header className="main-head ecom-navbar z-index-lg">
      <nav className="nav-component">
        <div className="logo-wrapper">
          <span className="hamburger-icon">
            <i className="fa fa-bars f-6 p-h-4"></i>
          </span>
          <Link to="/" className="heading-4 t-c-1">
            Brain Store
          </Link>
        </div>
        {location.pathname !== '/' && <SearchBar />}
        <div className="link-wrapper">
          {auth.isAuth ? (
            <Link
              onClick={logoutUserHandler}
              to="/"
              className="t-c-2 f-5 p-v-3 p-h-8 m-h-3 sign-in-button"
            >
              Log Out{' '}
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={loginUserHandler}
              className="t-c-2 f-5 p-v-3 p-h-8 m-h-3 sign-in-button"
            >
              Log in{' '}
            </Link>
          )}
          <div className="badge-wrapper p-h-4 m-h-3">
            <span className="badge-icon f-8 m-2">
              <Link to="/wishlist" className="t-c-1">
                <i className="fa fa-heart"></i>
              </Link>
            </span>
            <div className="badge centered-row ecom-badge f-bold">
              {state.wishlist.length}
            </div>
          </div>
          <Link className="t-c-1" to="/wishlist">
            <span className="f-7 p-h-1 pointer badge-caption">Wishlist</span>
          </Link>

          <div className="badge-wrapper p-h-4 m-h-3">
            <span className="badge-icon f-8 m-2">
              <Link to="/cart" className="t-c-1">
                <i className="fa fa-shopping-cart"></i>
              </Link>
            </span>
            <div className="badge centered-row ecom-badge">
              {state.cart.length}
            </div>
          </div>
          <Link className="t-c-1" to="/cart">
            <span className="f-7 p-h-1 pointer badge-caption">Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
