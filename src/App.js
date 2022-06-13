import './App.css';
import { Navbar } from 'components';
import MockmanEs from 'mockman-js';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Cart from 'pages/Cart';
import Wishlist from 'pages/Wishlist';
import Listing from 'pages/Listing';
import { ProductDetail } from 'pages/ProductDetail';
import { PrivateRoute } from 'components/PrivateRoute';
import CheckoutPage from 'pages/CheckoutPage';
import { Helmet } from 'react-helmet';

function App() {
  const location = useLocation();
  const routeCheck = location.pathname === '/login';
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BrainShop</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Ecommerce" />
      </Helmet>
      {!routeCheck && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/mock" element={<MockmanEs />} />

        <Route
          path="*"
          element={
            <main>
              <p className="heading-3 t-c-3 p-4">There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
