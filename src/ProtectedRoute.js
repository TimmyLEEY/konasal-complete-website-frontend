import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    // if no user in localStorage → redirect to login
    return <Navigate to="/login" replace />;
  }

  // if logged in → allow access
  return children;
};

export default ProtectedRoute;
