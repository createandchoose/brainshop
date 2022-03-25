import './App.css';
import { Navbar } from 'components';
import MockmanEs from 'mockman-js';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Listing from './pages/Listing';
function App() {
  const location = useLocation();
  const routeCheck =
    location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className="App">
      {!routeCheck && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/mock" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
