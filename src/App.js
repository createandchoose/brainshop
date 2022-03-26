import './App.css';
import { Navbar } from 'components';
import MockmanEs from 'mockman-js';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Listing from './pages/Listing';
import { PrivateRoute } from 'components/PrivateRoute';

function App() {
  const location = useLocation();
  const routeCheck =
    location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className="App">
      {!routeCheck && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

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
        <Route path="/mock" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
