import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function Part2() {
  useGSAP(() => {
    gsap.from(".her", {
      opacity: 0,
      y: 50,
      delay: 0.3,
      duration: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".her",
        scroller: "body",
        start: "top 70%",
      },
    });
    gsap.from(".this1", {
      opacity: 0,
      x: -50,
      delay: 0.3,
      duration: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".this1",
        scroller: "body",
        start: "top 70%",
      },
    });
    gsap.from(".this2", {
      opacity: 0,
      x: -50,
      delay: 0.3,
      duration: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".this2",
        scroller: "body",
        start: "top 70%",
      },
    });
    gsap.from(".this3", {
      opacity: 0,
      x: -50,
      delay: 0.3,
      duration: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".this3",
        scroller: "body",
        start: "top 70%",
      },
    });
  });
  return (
    <div className=" pt-5 flex flex-col pb-10 min-h-[80vh]">
      <div className="px-5 flex  items-center justify-center w-full min-h-14">
        <h1 className="text-white her  max-md:text-center text-3xl sm:text-4xl font-bold">
          Ultimate password security
        </h1>
      </div>
      <div className="px-5 mt-2 flex  items-center justify-center w-full min-h-14">
        <h1 className="text-white her  max-md:text-center text-xl font-light">
          Explore the many layers of defense we use to protect your passwords
          and private data.
        </h1>
      </div>
      <div className=" flex sm:flex-row flex-col justify-center gap-7 pt-12 item-center w-full min-h-96">
        <div className="text-white hover:shadow-[0_2px_15px_rgba(128,_0,_128,_0.7)] shadow-[0_2px_15px_rgba(8,_112,_184,_0.7)]  flex justify-center flex-col gap-2 sm:gap-5 min-h-52 sm:min-h-4/5 p-5 w-[75vw] max-md:m-auto sm:w-1/4 ">
          <h1 className="h-24 w-28">
            <i className="fa-solid fa-desktop this1 text-white text-7xl"></i>
          </h1>
          <h1 className="text-2xl this1 min-h-16 font-medium ">
            Zero-knowledge principle
          </h1>
          <h1 className="text-lg this1 font-thin ">
            Nobody can view your passwords or data – not even WebLocker.
          </h1>
        </div>
        <div className="text-white hover:shadow-[0_2px_15px_rgba(128,_0,_128,_0.7)] shadow-[0_2px_15px_rgba(8,_112,_184,_0.7)]  flex justify-center flex-col gap-2 sm:gap-5 min-h-52 sm:min-h-4/5 p-5 w-[75vw] max-md:m-auto sm:w-1/4 ">
          <h1 className="h-24 w-28">
            <i className="fa-solid fa-lock this2 text-white text-7xl"></i>
          </h1>
          <h1 className="text-2xl this2 font-medium min-h-16">
            Private Digital Vault
          </h1>
          <h1 className="text-lg this2 font-thin">
            Enjoy a secure, encrypted password vault that only you can unlock.
          </h1>
        </div>
        <div className="text-white hover:shadow-[0_2px_15px_rgba(128,_0,_128,_0.7)] shadow-[0_2px_15px_rgba(8,_112,_184,_0.7)]  flex justify-center sm:gap-5 gap-2 flex-col min-h-52 sm:min-h-4/5 p-5 w-[75vw] max-md:m-auto sm:w-1/4 ">
          <h1 className="h-24 w-28">
            <i className="fa-solid fa-shield-halved this3 text-7xl text-white"></i>
          </h1>
          <h1 className="min-h-16 text-2xl this3 font-medium">
            Advanced encryption technology
          </h1>
          <h1 className="text-lg font-thin this3">
            Experience hacker-proof AES-256-bit encryption used by leading
            banks.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Part2;
