import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
gsap.registerPlugin(ScrollTrigger);
function Footer() {
  return (
    <div className="min-h-[80vh] bg-slate-950 flex-wrap items-center justify-center flex gap-5 sm:gap-20 py-10">
      <div className="pb-5 f min-h-[40vh] sm:min-h-[80vh] w-11/12 sm:w-72  text-white">
        <div className=" flex items-center justify-center min-h-24">
          <h1 className="text-4xl font-bold">WebLocker</h1>
          <img className="h-24" src={logo} alt="" />
        </div>
        <div className=" text-neutral-300 font-semibold py-3">
          Open source password management for teams. Built for team
          collaboration, open source, self-hosted, api-centric, privacy-focused,
          developer-first.
        </div>
        <div className=" text-neutral-300 font-semibold py-5">
          See you around:
        </div>
        <div className="flex gap-5">
          <img
            className="bg-white cursor-pointer h-12 rounded-full"
            src={github}
            alt="error"
            onClick={() => {
              window.open("https://github.com/suraj-auth", "_blank");
            }}
          />
          <img
            className="bg-white cursor-pointer h-12 rounded-lg"
            src={linkedin}
            alt="error"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/suraj-kumar-a940a1285",
                "_blank"
              );
            }}
          />
        </div>
      </div>
      <div className="min-h-[22vh] f sm:min-h-[80vh] w-[45vw] sm:w-28 ">
        <div className="min-h-20 flex items-center">
          <h1 className="text-white text-lg font-bold">Legal</h1>
        </div>
        <div className="text-zinc-300 flex flex-col gap-2">
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Privacy Policy
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Legal terms
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Credits
          </h1>
        </div>
      </div>
      <div className="min-h-[22vh] f sm:min-h-[80vh] w-[45vw] sm:w-28 ">
        <div className="min-h-20 flex items-center">
          <h1 className="text-white text-lg font-bold">Product</h1>
        </div>
        <div className="text-zinc-300 flex flex-col gap-2">
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Security
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Roadmap
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Downloads
          </h1>
        </div>
      </div>
      <div className="min-h-[80vh] f w-[55vw] sm:w-48 ">
        <div className="min-h-20 flex items-center">
          <h1 className="text-white text-lg font-bold">Resources</h1>
        </div>
        <div className="text-zinc-300 flex flex-col gap-2">
          <h1 className="font-medium text-zinc-500">COMPARE</h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Passbolt vs KeePass
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Passbolt vs Bitwarden
          </h1>
          <h1 className="font-medium text-zinc-500">CASE STUDIES</h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            ZIT-RLP
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Municipality of Macerata
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Copan Group
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            TU Graz
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Numadic
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Dr. Metschkoll GmbH
          </h1>
          <h1 className="font-medium text-zinc-500">SOLUTIONS</h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            For universities
          </h1>
        </div>
      </div>
      <div className="min-h-[88vh] f w-[35vw] sm:w-28 ">
        <div className="min-h-20 flex items-center">
          <h1 className="text-white text-lg font-bold">Company</h1>
        </div>
        <div className="text-zinc-300 flex flex-col gap-2">
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            About
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Careers
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Contact us
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Press
          </h1>
          <h1 className="hover:text-red-600 font-medium cursor-pointer">
            Partnerships
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
