import Passwords from "./components/Passwords.jsx";
import Profile from "./components/Profile.jsx";
import Contact from "./components/Contact.jsx";
import { createRoot } from "react-dom/client";
import Home from "./components/home/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { Route } from "react-router-dom";
import Usepassword from "./components/Usepassword.jsx";
import User from "./components/User.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import { StrictMode } from "react";
import Layout from "./Layout";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="users" element={<User />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="passwords"
          element={
            <PrivateRoute>
              <Passwords />
            </PrivateRoute>
          }
        />
        <Route
          path="passwords/:id"
          element={
            <PrivateRoute>
              <Usepassword />
            </PrivateRoute>
          }
        />
        <Route
          path="contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
