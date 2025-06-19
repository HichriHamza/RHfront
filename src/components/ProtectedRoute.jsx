import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authenticated'); // Check localStorage flag
  console.log('ProtectedRoute isAuthenticated:', isAuthenticated);

  return isAuthenticated === 'true' ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;