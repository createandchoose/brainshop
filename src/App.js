import { lazy, Suspense } from 'react';
import './App.css';
import { Navbar } from 'components';
import MockmanEs from 'mockman-js';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { Helmet } from 'react-helmet';
import { BigLoader } from 'components';
import { ProductDetail } from 'pages/ProductDetail';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Cart = lazy(() => import('pages/Cart'));
const Wishlist = lazy(() => import('pages/Wishlist'));
const Listing = lazy(() => import('pages/Listing'));
const CheckoutPage = lazy(() => import('pages/CheckoutPage'));

function App() {
  const location = useLocation();
  const routeCheck = location.pathname === '/login';

  return (
    <Suspense fallback={<BigLoader />}>
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
    </Suspense>
  );
}

export default App;
