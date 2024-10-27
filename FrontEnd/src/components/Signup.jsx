import bgsignup from "../assets/bg-signup.jpg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Rloader from "../utils/Ringloader";
import { useForm } from "react-hook-form";
const Signup = () => {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [otp, setOtp] = useState("");
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
  const handleChangeotp = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value);
  };
  const onSubmit = async (data) => {
    try {
      let check = await fetch(
        "https://suraj-web-locker-backend.vercel.app/api/v1/userdetails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      let checkResponse = await check.json();
      // username is in use
      if (checkResponse.stat == "1")
        setError("username", { message: checkResponse.message });
      // email is in use
      else if (checkResponse.stat == "2")
        setError("email", { message: checkResponse.message });
      // server error
      else if (checkResponse.stat == "3")
        alert("There is some server error, please try again later");
      // user details are valid
      else {
        let res = await fetch(
          "https://suraj-web-locker-backend.vercel.app/api/v1/signup",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        let response = await res.json();
        // server error
        if (response.stat == "2") {
          alert("There is some server error, please try again later");
          console.log("error is = " + response.message);
        }
        // email error
        else if (response.stat == "1") {
          alert("There is some error in sending token, try again later");
          console.log("error is = " + response.message);
        }
        // user saved successfully
        else {
          let databaseobj = {
            databaseid: response.databaseid,
            time: response.tokenexp,
          };
          localStorage.setItem("database", JSON.stringify(databaseobj));
          reset();
          setDone(true);
        }
      }
    } catch (error) {
      alert("There is some server error, please try again later");
      console.log(error);
    }
  };
  async function sendOtp() {
    try {
      let val = localStorage.getItem("database");
      if (val) {
        let obj = JSON.parse(val);
        let userID = obj.databaseid;
        const response = await fetch(
          `https://suraj-web-locker-backend.vercel.app/api/v1/verifyAccount?tid=${otp}&uid=${userID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let res = await response.json();
        if (res.stat == "0") {
          localStorage.removeItem("database");
          navigate("/login");
        } else {
          console.log(res);
          alert("OTP is Invalid!");
          setOtp("");
        }
      } else alert("Some Credentials are missing!");
    } catch (error) {
      alert("There is some server error");
    }
  }
  async function handleotpexpire(id) {
    try {
      let res = await fetch(
        `https://suraj-web-locker-backend.vercel.app/api/v1/deleteuser?userID=${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.removeItem("database");
    } catch (error) {
      localStorage.removeItem("database");
    }
  }
  useEffect(() => {
    let val = localStorage.getItem("database");
    if (val) {
      let obj = JSON.parse(val);
      const expirationDate = new Date(obj.time);
      const currentDate = new Date();
      if (expirationDate > currentDate) setDone(true);
      else handleotpexpire(obj.databaseid);
    }
  });
  return (
    <>
      {done ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xs">
            <p className="text-center font-semibold text-2xl">OTP SENT</p>
            <p className="text-emerald-400 text-center text-xl font-semibold">
              If OTP not Found, Check it in Spam Emails.
            </p>
            <hr className="my-4" />
            <h2 className="text-2xl font-semibold text-center mb-6">
              Enter OTP
            </h2>
            <div className="space-y-6">
              <div className="flex justify-center">
                <input
                  type="text"
                  maxLength="6"
                  value={otp}
                  onChange={handleChangeotp}
                  className="text-center w-full py-2 px-4 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg tracking-widest placeholder-gray-500"
                  placeholder="Enter 4-digit OTP"
                />
              </div>
              <button
                type="submit"
                onClick={() => {
                  sendOtp();
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200 ease-in-out font-semibold"
              >
                Submit OTP
              </button>
              <p className="text-red-600 font-semibold text-center">
                OTP is only valid for 1 Hour
              </p>
            </div>
          </div>
        </div>
      ) : (
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
        </div>
      )}
    </>
  );
};
export default Signup;
