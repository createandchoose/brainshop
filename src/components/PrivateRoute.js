import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'context/auth-context';

function PrivateRoute({ children }) {
  let location = useLocation();
  const { auth } = useAuth();
  return auth.isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
