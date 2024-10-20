import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2) {
      const token = parts.pop().split(";").shift();
      const verifyToken = async () => {
        const response = await fetch(
          `http://localhost:5000/api/v1/checktoken?token=${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setIsAuthenticated(data.valid);
      };
      verifyToken();
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  if (isAuthenticated === null) {
    return (
      <div className="h-[85vh] w-full flex items-center justify-center">
        <h1 className="text-white text-5xl">Loading...</h1>
      </div>
    );
  }
  return isAuthenticated ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
