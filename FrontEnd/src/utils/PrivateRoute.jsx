import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  // setted isauthenticated as null , so until fetch call is completed i can show the user a loading page.
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    // taking token from the browser cookies
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2) {
      const token = parts.pop().split(";").shift();
      const verifyToken = async () => {
        const response = await fetch(
          `https://suraj-web-locker-backend.vercel.app/api/v1/checktoken?token=${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        // if user token is valid then isauthenticated is set to true and page will show .
        // else isauthenticated is set to false and user will be directed to login page.
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
