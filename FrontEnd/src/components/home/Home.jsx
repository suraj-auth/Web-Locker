import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import animation from "../../assets/animation.webm";
import p1 from "../../assets/people/p1.jpg";
import p2 from "../../assets/people/p2.jpg";
import p3 from "../../assets/people/p3.jpg";
import { useGSAP } from "@gsap/react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import gsap from "gsap";
function Home() {
  const [text, setText] = useState(["Effortless", "Secure", "Reliable"]);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const ref = useRef();
  useGSAP(() => {
    gsap.from(".hero", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
    });
    gsap.from(".zero", {
      x: -100,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
    });
    gsap.from(".vid", {
      y: -200,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
    });
  });
  const changer = function () {
    gsap.fromTo(
      ref.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      changer();
      setValue((prevValue) => (prevValue >= 2 ? 0 : prevValue + 1));
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <div className="min-h-[80vh] bg-black flex sm:flex-row flex-col items-center justify-center sm:gap-10">
        <div className=" min-h-[85vh] w-full sm:w-7/12 flex items-center justify-center flex-col gap-5 sm:pt-0 pt-10">
          <h1
            ref={ref}
            className=" bg-gradient-to-r from-green-500 to-purple-950 text-transparent bg-clip-text max-md:text-center text-6xl w-full sm:pl-40 font-medium px-5"
          >
            {text[value]}
          </h1>
          <h1 className="hero max-md:text-center text-5xl px-5 sm:pl-40 text-white sm:text-6xl">
            Personalized Password Security
          </h1>
          <h1 className="hero max-md:text-center px-4 sm:pl-32 text-neutral-300">
            Protect and manage all your passwords in one place with our
            easy-to-use and secure platform.
          </h1>
          <div className="zero flex s:flex-row flex-col items-center w-full sm:pl-40 gap-10 max-md:gap-5 sm:my-0 my-12">
            <div className="text-white w-28 ">
              <h1 className="text-5xl font-bold text-purple-300 ">1.2K</h1>
              <p className="text-zinc-400">Users Already</p>
              <p className="text-zinc-400">Use the App</p>
            </div>
            <div className="bg-purple-300 flex items-center justify-center min-h-24 sm:w-80 w-64 rounded-full relative">
              <div className="h-20 absolute left-2 -z-0 w-20 overflow-hidden rounded-full border-2 ">
                <img className="h-full w-full object-cover" src={p2} alt="" />
              </div>
              <div className="h-20 absolute left-16 z-10 w-20 overflow-hidden rounded-full border-2 ">
                <img className="h-full w-full object-center" src={p3} alt="" />
              </div>
              <div className="h-20 absolute left-32 z-20 w-20 overflow-hidden rounded-full border-2 ">
                <img className="h-full w-full object-center" src={p1} alt="" />
              </div>
              <div
                className="h-20 cursor-pointer absolute right-2 z-40 w-20 overflow-hidden rounded-full bg-neutral-800 flex items-center justify-center"
                onClick={() => {
                  navigate("/users");
                }}
              >
                <i className="fa-solid fa-arrow-right-long text-4xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="vid min-h-[35vh]  sm:min-h-[85vh] w-full  sm:w-2/6 flex items-center justify-center flex-col gap-5">
          <video
            className="h-60 sm:h-72 shadow-2xl"
            autoPlay
            muted
            loop
            src={animation}
          ></video>
        </div>
      </div>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
    </div>
  );
}

export default Home;
