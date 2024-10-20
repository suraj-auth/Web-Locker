import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import girl from "../../assets/girl-logo.webp";
import React from "react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function Part1() {
  useGSAP(() => {
    gsap.from(".i", {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".i",
        scroller: "body",
        start: "top 90%",
      },
    });
    gsap.from(".ha", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      delay: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".ha",
        scroller: "body",
        start: "top 90%",
      },
    });
  });
  return (
    <div className="min-h-[75vh] flex sm:flex-row flex-col-reverse">
      <div className=" sm:p-0 p-5 min-h-[45vh] sm:h-[75vh] flex items-center justify-center w-full sm:w-[50vw]">
        <img className="i" src={girl} alt="girl logo" />
      </div>
      <div className=" flex items-center justify-center flex-col text-white min-h-[40vh] sm:px-0 px-5 sm:py-0 py-5 sm:min-h-[75vh] w-full sm:w-[50vw] gap-10">
        <h1 className="sm:px-0 px-5 ha w-full pl-5 text-3xl sm:text-4xl sm:font-semibold font-bold text-stone-400">
          Faster sign-in across devices
        </h1>
        <h1 className=" sm:pr-24 max-md:text-center ha w-full text-lg font-extralight text-zinc-400">
          Life online is easier with auto-filled logins, card payment details,
          and personal data for forms on any website or app – all thanks to your
          Password Manager data and vault syncing up across devices.
        </h1>
      </div>
    </div>
  );
}

export default Part1;
