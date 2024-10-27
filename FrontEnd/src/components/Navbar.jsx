import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import web from "../assets/web-lock.png";
import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Navbar() {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.from(".nv", {
      y: -100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
    });
  });
  function cookset() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2) setValid(true);
    else setValid(false);
  }
  useEffect(() => {
    cookset();
  }, []);
  return (
    <div className="bg-black nv sticky top-0 z-50">
      <div className="border-b flex items-center justify-around">
        <div
          className="w-32 sm:w-44"
          onClick={() => {
            setMobileDrawer(false);
            navigate("/");
          }}
        >
          <img
            className="h-24 m-auto hover:cursor-pointer "
            src={web}
            alt="Web-Locker"
          />
        </div>
        {valid ? (
          <div className=" text-white sm:flex items-center justify-center sm:gap-8 md:gap-12 lg:gap-20  hidden">
            <NavLink
              className={(e) => {
                return `${
                  e.isActive && "text-teal-500"
                } text-base hover:text-teal-500 sm:text-xl font-medium hover:border-b-2`;
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={(e) => {
                return `${
                  e.isActive && "text-teal-500"
                } text-base hover:text-teal-500 sm:text-xl font-medium hover:border-b-2`;
              }}
              to="/passwords"
            >
              Passwords
            </NavLink>
            <NavLink
              className={(e) => {
                return `${
                  e.isActive && "text-teal-500"
                } text-base hover:text-teal-500 sm:text-xl font-medium hover:border-b-2`;
              }}
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className={(e) => {
                return `${
                  e.isActive && "text-teal-500"
                } text-base hover:text-teal-500 sm:text-xl font-medium hover:border-b-2`;
              }}
              to="/profile"
            >
              Profile
            </NavLink>
          </div>
        ) : (
          <div className="flex gap-5">
            <NavLink
              className="text-white bg-zinc-700 rounded-3xl sm:rounded-full py-3 sm:px-8 font-semibold text-lg sm:text-xl px-5"
              to="/signup"
            >
              Sign Up
            </NavLink>
            <NavLink
              className="text-black bg-white rounded-3xl sm:rounded-full py-3 px-5 sm:px-8 font-semibold text-xl"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        )}
        {valid && (
          <div
            className="w-20 h-20 sm:hidden flex items-center justify-center"
            onClick={() => {
              setMobileDrawer(!mobileDrawer);
            }}
          >
            {mobileDrawer ? (
              <i className="fa-solid fa-xmark text-white text-3xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-white text-2xl"></i>
            )}
          </div>
        )}
      </div>
      {mobileDrawer && (
        <div className="text-white sm:hidden flex items-center justify-center gap-5 flex-col bg-black">
          <NavLink
            className={(e) => {
              return `${
                e.isActive && "text-teal-500"
              } text-base border-t pt-4 w-full text-center sm:text-xl font-medium`;
            }}
            to="/home"
            onClick={() => {
              setMobileDrawer(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => {
              return `${
                e.isActive && "text-teal-500"
              } text-base border-t pt-4 w-full text-center sm:text-xl font-medium`;
            }}
            to="/passwords"
            onClick={() => {
              setMobileDrawer(false);
            }}
          >
            DashBoard
          </NavLink>
          <NavLink
            className={(e) => {
              return `${
                e.isActive && "text-teal-500"
              } text-base border-t pt-4 w-full text-center sm:text-xl font-medium`;
            }}
            to="/contact"
            onClick={() => {
              setMobileDrawer(false);
            }}
          >
            Contact
          </NavLink>
          <NavLink
            className={(e) => {
              return `${
                e.isActive && "text-teal-500"
              } text-base border-t pt-4 pb-4 w-full text-center sm:text-xl font-medium border-b`;
            }}
            to="/profile"
            onClick={() => {
              setMobileDrawer(false);
            }}
          >
            Profile
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
