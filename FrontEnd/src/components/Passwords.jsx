import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Passwords() {
  const navigate = useNavigate();
  const addRef = useRef();
  const inp1Ref = useRef();
  const inp2Ref = useRef();
  const inp3Ref = useRef();
  const [errtext, setErrtext] = useState("");
  const [passwordlist, setPasswordlist] = useState([]);
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
        "https://suraj-web-locker-backend.vercel.app/api/v1/addpassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inpobj),
        }
      );
      let response = await res.text();
      if (response == "false") alert(`error in adding password`);
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
  async function getdata() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    const token = parts.pop().split(";").shift();
    let res = await fetch(
      `https://suraj-web-locker-backend.vercel.app/api/v1/getallpassword?token=${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    let response = await res.json();
    let arr = new Array(response.userpasswords.length);
    for (let index = 0; index < response.userpasswords.length; index++) {
      const element = response.userpasswords[index].website;
      arr.push(element);
    }
    setPasswordlist(arr);
  }
  useEffect(() => {
    if (passwordlist.length == 0) getdata();
  }, []);
  return (
    <>
      <div className="min-h-[87vh] relative flex-col gap-5 flex items-center justify-start py-10">
        <div className="w-5/6 flex items-center justify-between sm:w-2/4 min-h-[10vh]">
          <div className="text-2xl font-semibold text-gray-300">Passwords</div>
          <div>
            <button
              className="border h-10 w-24 rounded-full border-blue-700 text-blue-300"
              onClick={() => {
                addRef.current.classList.remove("hidden");
                addRef.current.classList.add("flex");
              }}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="shadow-slate-500 shadow-md w-5/6 sm:w-2/4 min-h-[10vh] py-5 flex flex-col gap-3 border">
          {passwordlist.map((password) => (
            <div
              key={password}
              className="cursor-pointer hover:bg-neutral-800 flex items-center h-14 w-full"
              onClick={() => {
                navigate(`/passwords/${password}`);
              }}
            >
              <div className="flex items-center justify-center h-full w-14">
                <img
                  className="h-2/4"
                  src={`https://${password}/favicon.ico`}
                />
              </div>
              <div className="flex items-center justify-between border-zinc-500 border-b h-full w-full pr-5">
                <div className="text-white text-lg font-semibold">
                  {password}
                </div>
                <div>
                  <i className="fa-solid fa-caret-right text-slate-500"></i>
                </div>
              </div>
            </div>
          ))}
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
              className="w-full p-2 bg-zinc-600 rounded-t-lg text-white"
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
      </div>
    </>
  );
}
export default Passwords;
