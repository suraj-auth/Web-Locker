import bgsignup from "../assets/bg-signup.jpg";
import React, { useState } from "react";
import Rloader from "../utils/Ringloader";
import { useForm } from "react-hook-form";
const Signup = () => {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = async (data) => {
    let check = await fetch("http://localhost:5000/api/v1/userdetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    let checkResponse = await check.json();
    if (checkResponse.stat == "1")
      setError("username", { message: checkResponse.message });
    else if (checkResponse.stat == "2")
      setError("email", { message: checkResponse.message });
    else {
      let res = await fetch("http://localhost:5000/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      let response = await res.text();
      reset();
      setDone(true);
      console.log("response = " + response);
    }
  };
  return (
    <div className="flex flex-col relative md:flex-row min-h-screen">
      <div className="md:w-1/2 w-full bg-purple-600 flex items-center justify-center">
        <div className="hidden md:block h-full w-full bg-purple-600">
          <img
            src={bgsignup}
            alt="Signup Illustration"
            className="object-cover h-[100%] w-[100%] "
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full flex items-center min-h-screen justify-center bg-black text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-3/4 md:w-1/2 space-y-4 p-4"
        >
          <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md"
              placeholder="Create a username. example-[sam.123]"
            />
            {errors.username && (
              <div className="text-red-500">{errors.username.message}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium ">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <div className="mt-1">
              <select
                {...register("gender", { required: true })}
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="block w-full text-black p-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          {isSubmitting ? (
            <Rloader />
          ) : (
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500"
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
      {done && (
        <div className="absolute inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
          <div className="bg-white h-36 flex items-center justify-center w-40 sm:h-96 sm:w-96 rounded-lg shadow-lg">
            <h3 className="text-black text-xl text-center font-semibold">
              Verification Mail Sent
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};
export default Signup;
