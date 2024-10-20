import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rloader from "../utils/Ringloader";
import bgLog from "../assets/bg-login.jpg";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const obj = {
      username: data.username,
      password: data.password,
    };
    let check = await fetch(
      "https://suraj-web-locker-backend.vercel.app/api/v1/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      }
    );
    let res = await check.json();
    if (res.stat == "1") setError("username", { message: res.message });
    else if (res.stat == "2") setError("username", { message: res.message });
    else if (res.stat == "3") setError("password", { message: res.message });
    else if (res.stat == "0") {
      const days = 7;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      document.cookie = "token=" + res.tkn + ";" + expires + ";path=/";
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 w-full flex justify-center items-center p-8 bg-black text-white">
        <div className="max-w-md w-full">
          <div className="text-left">
            <h1 className="text-3xl font-semibold mb-6">Welcome back!</h1>
            <p className="text-sm font-medium mb-8">
              Enter to get unlimited access to data & information.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm mb-1" htmlFor="username">
                Username*
              </label>
              <input
                {...register("username", { required: true })}
                required
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="username"
                placeholder="Enter your email address"
              />
              {errors.username && (
                <div className="text-red-500">{errors.username.message}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1" htmlFor="password">
                Password*
              </label>
              <input
                {...register("password", { required: true })}
                required
                className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="password"
                id="password"
                placeholder="Enter password"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>
            {isSubmitting ? (
              <Rloader />
            ) : (
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Log In
              </button>
            )}
          </form>
          <div className="flex items-center my-6">
            <hr className="w-full border-t border-gray-300" />
            <span className="px-2 text-sm text-gray-500">Or</span>
            <hr className="w-full border-t border-gray-300" />
          </div>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <h1
              className="text-purple-600 cursor-pointer hover:underline"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Register here
            </h1>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full bg-purple-900 hidden md:block">
        <img className="h-[100vh] w-full" src={bgLog} alt="" />
      </div>
    </div>
  );
}

export default Login;
