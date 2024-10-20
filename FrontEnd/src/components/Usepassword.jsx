import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import alternate from "../assets/alternate.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Usepassword() {
  const addRef = useRef();
  const inp1Ref = useRef();
  const inp2Ref = useRef();
  const inp3Ref = useRef();
  const [errtext, setErrtext] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [passwordobj, setPasswordobj] = useState({
    username: "",
    password: "",
  });
  const [imgSrc, setImgSrc] = useState(`https://${id}/favicon.ico`);
  const passRef = useRef();
  const userRef = useRef();
  const eyeRef = useRef();
  async function getpassword() {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; token=`);
    let token = parts.pop().split(";").shift();
    let res = await fetch(
      `https://suraj-web-locker-backend.vercel.app/api/v1/getsinglepassword?token=${token}&passwordID=${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    let response = await res.json();
    if (response.status == "true")
      setPasswordobj({
        username: response.userpassword.username,
        password: response.userpassword.password,
      });
    else alert(response.message);
  }
  async function deletepassword() {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; token=`);
    let token = parts.pop().split(";").shift();
    let res = await fetch(
      `https://suraj-web-locker-backend.vercel.app/api/v1/deletepassword?token=${token}&passwordID=${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    let response = await res.json();
    if (response.status == "true") navigate("/passwords");
    else alert("error in deleting password");
  }
  async function setData() {
    addRef.current.classList.remove("hidden");
    addRef.current.classList.add("flex");
    inp1Ref.current.value = id;
    inp2Ref.current.value = passwordobj.username;
    inp3Ref.current.value = passwordobj.password;
  }
  async function addData() {
    setErrtext("");
    if (
      inp1Ref.current.value.trim() != "" &&
      inp2Ref.current.value.trim() != "" &&
      inp3Ref.current.value.trim() != ""
    ) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; token=`);
      const token = parts.pop().split(";").shift();
      let inpobj = {
        website: inp1Ref.current.value,
        username: inp2Ref.current.value,
        password: inp3Ref.current.value,
        token: token,
      };
      let res = await fetch(
        "https://suraj-web-locker-backend.vercel.app/api/v1/updatepassword",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inpobj),
        }
      );
      let response = await res.text();
      if (response == "false") alert(`error in updating data`);
      else {
        window.location.reload();
        addRef.current.classList.remove("flex");
        addRef.current.classList.add("hidden");
        inp1Ref.current.value = "";
        inp2Ref.current.value = "";
        inp3Ref.current.value = "";
      }
    } else {
      setErrtext("Some Fields are missing!");
    }
  }
  useEffect(() => {
    getpassword();
  }, []);
  return (
    <div className="min-h-[85vh] w-[full] flex gap-5 flex-col items-center justify-center py-16 relative">
      <div className="pl-5 flex gap-5 items-center h-20 w-[90vw] sm:w-[40vw]">
        <img
          className="h-10"
          src={imgSrc}
          onError={() => {
            setImgSrc(alternate);
          }}
          alt=""
        />
        <h1 className="text-white font-semibold text-2xl">
          {id.split(".")[1]}
        </h1>
      </div>
      <div className="text-white border-2 min-h-[50vh] w-[90vw] sm:w-[40vw] bg-zinc-900 rounded-3xl flex items-center pt-10 justify-start flex-col gap-5">
        <div className="min-h-20 w-4/5">
          <h1 className="text-lg font-semibold text-gray-400">Username</h1>
          <div className="border rounded-xl bg-zinc-600 relative flex items-center">
            <input
              ref={userRef}
              readOnly
              className="w-full outline-none border-hidden p-2 bg-zinc-600 rounded-xl text-white pr-16 sm:pr-20"
              type="text"
              value={passwordobj.username}
              placeholder="username"
            />
            <i
              className="fa-regular absolute right-7 text-xl cursor-pointer fa-copy text-black"
              onClick={() => {
                navigator.clipboard.writeText(userRef.current.value);
                toast.success("Username copied");
              }}
            ></i>
          </div>
        </div>
        <div className="min-h-20 w-4/5">
          <h1 className="text-lg font-semibold text-gray-400">Password</h1>
          <div className="border rounded-xl bg-zinc-600 relative flex items-center">
            <input
              ref={passRef}
              readOnly
              className="w-full outline-none border-hidden p-2 bg-zinc-600 rounded-xl text-white pr-24 sm:pr-28"
              type="password"
              value={passwordobj.password}
              placeholder="password"
            />
            <i
              className="fa-regular absolute right-7 text-xl cursor-pointer fa-copy text-black"
              onClick={() => {
                navigator.clipboard.writeText(passRef.current.value);
                toast.success("Password copied");
              }}
            ></i>
            <i
              ref={eyeRef}
              className="fa-regular fa-eye absolute right-16 sm:right-20 text-xl cursor-pointer text-black"
              onClick={() => {
                if (passRef.current.type == "password") {
                  eyeRef.current.classList.remove("fa-eye");
                  eyeRef.current.classList.add("fa-eye-slash");
                  passRef.current.type = "text";
                } else {
                  eyeRef.current.classList.remove("fa-eye-slash");
                  eyeRef.current.classList.add("fa-eye");
                  passRef.current.type = "password";
                }
              }}
            ></i>
          </div>
        </div>
        <div className="flex items-center gap-10 min-h-20 w-4/5">
          <button
            className="h-10 w-24 border border-blue-800 text-blue-500 rounded-full text-lg"
            onClick={() => {
              setData();
            }}
          >
            Edit
          </button>
          <button
            className="h-10 w-24 border border-blue-800 text-blue-500 rounded-full text-lg"
            onClick={() => {
              deletepassword();
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        ref={addRef}
        className="absolute min-h-[70vh] min-w-[90vw] sm:min-w-[30vw] bg-zinc-800 rounded-2xl hidden items-start justify-start p-5 gap-5 flex-col"
      >
        <div className="text-xl font-semibold text-gray-400">
          Add new password
        </div>
        <div className="w-full">
          <h1 className="text-lg font-semibold text-gray-400">Site:</h1>
          <input
            ref={inp1Ref}
            readOnly
            className="w-full border-hidden outline-none p-2 bg-zinc-600 rounded-t-lg text-white"
            type="text"
            placeholder="example.com"
          />
        </div>
        <div className="w-full">
          <h1 className="text-lg font-semibold text-gray-400">Username:</h1>
          <input
            ref={inp2Ref}
            className="w-full p-2 bg-zinc-600 rounded-t-lg text-white"
            type="text"
          />
        </div>
        <div className="w-full">
          <h1 className="text-lg font-semibold text-gray-400">Password:</h1>
          <input
            ref={inp3Ref}
            className="w-full p-2 bg-zinc-600 rounded-t-lg text-white"
            type="text"
          />
        </div>
        <div className="flex gap-5 pt-10">
          <button
            className="h-10 w-24 border border-blue-800 text-blue-500 rounded-full text-lg"
            onClick={() => {
              addRef.current.classList.remove("flex");
              addRef.current.classList.add("hidden");
            }}
          >
            Cancel
          </button>
          <button
            className="h-10 w-24 text-blue-800 bg-blue-300 rounded-full text-lg"
            onClick={() => {
              addData();
            }}
          >
            Save
          </button>
        </div>
        <div className="text-red-600 text-lg font-semibold">{errtext}</div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Usepassword;
