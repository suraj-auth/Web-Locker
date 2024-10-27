import React, { useState } from "react";
import male from "../assets/male.png";
import female from "../assets/female.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Profile() {
  const [userg, setUserg] = useState();
  const [user, setUser] = useState({
    name: "*****",
    username: "*****",
    gender: "****",
    email: "*****",
    plan: "****",
  });
  const navigate = useNavigate();
  function cookieRemover() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
    location.reload();
  }
  async function findUser() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2) {
      const token = parts.pop().split(";").shift();
      let response = await fetch(
        `https://suraj-web-locker-backend.vercel.app/api/v1/userprofile?token=${token}`
      );
      let res = await response.json();
      if (res.userP.gender == "male") setUserg(male);
      else setUserg(female);
      await setUser(res.userP);
    } else {
      alert("Invalid User");
    }
  }
  useEffect(() => {
    findUser();
  }, []);

  return (
    <div className="flex sm:flex-row flex-col box-border min-h-[85vh] min-w-[100%]">
      <div className="box-border gap-5 min-h-[20vh] sm:min-h-[85vh] flex items-center flex-col justify-around w-full sm:w-[50%] py-5">
        <div className="flex items-center justify-evenly h-[29vh] w-[95%] bg-zinc-900 rounded-3xl">
          <div className="h-28 w-28 xl:h-40 xl:w-40 border-2 border-green-500 rounded-full">
            <img src={userg} alt="" />
          </div>
          <h1 className="text-white text-2xl xl:text-5xl font-bold">
            {user.name}
          </h1>
        </div>
        <div className="text-white hidden sm:flex items-center justify-center flex-col h-[49vh] w-[95%] bg-zinc-900 rounded-3xl">
          <div className="flex gap-10 items-center justify-center">
            <img src={logo} alt="" className="h-32 xl:h-56" />
            <h1 className=" flex items-center justify-center text-xl xl:text-3xl font-semibold px-5 w-2/4">
              Your Privacy is our Responsibility
            </h1>
          </div>
        </div>
      </div>
      <div className="box-border min-h-[78vh] sm:min-h-[85vh] w-full sm:w-[50%] flex items-center justify-center">
        <div className="min-h-[70vh] sm:h-[80vh] bg-zinc-900 flex-col gap-10 sm:gap-20 flex items-center justify-center w-[95%] rounded-3xl">
          <div className="flex text-white flex-col gap-5 sm:gap-10 w-3/4">
            <h1 className="text-xl xl:text-3xl font-semibold">
              Username : <span className="text-teal-500">{user.username}</span>
            </h1>
            <h1 className="text-xl xl:text-3xl font-semibold">
              Gender : <span className="text-teal-500">{user.gender}</span>
            </h1>
            <h1 className="text-xl xl:text-3xl font-semibold">
              Email :
              <span className="text-teal-500 flex flex-wrap">{user.email}</span>
            </h1>
            <h1 className="text-xl xl:text-3xl font-semibold">
              Plan : <span className="text-teal-500">{user.plan}</span>
            </h1>
          </div>
          <div>
            <button
              className="text-xl xl:text-2xl font-semibold p-3 xl:p-5 text-red-500 rounded-full border-2"
              onClick={() => {
                cookieRemover();
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
