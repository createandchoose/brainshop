import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'context/auth-context';

function PrivateRoute({ children }) {
  const { auth } = useAuth();
  return auth.isAuth ? children : <Navigate to="/login" />;
}

export { PrivateRoute };
