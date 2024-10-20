import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import l1 from "../../assets/company-logo/l1.svg";
import l2 from "../../assets/company-logo/l2.png";
import l3 from "../../assets/company-logo/l3.jpg";
import l4 from "../../assets/company-logo/l4.svg";
import l5 from "../../assets/company-logo/l5.webp";
import l6 from "../../assets/company-logo/l6.jpg";
import l7 from "../../assets/company-logo/l7.svg";
import l8 from "../../assets/company-logo/l8.svg";
gsap.registerPlugin(ScrollTrigger);
function Part3() {
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.from(".ii", {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      delay: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".ii",
        scroller: "body",
        start: "top 90%",
      },
    });
    gsap.from(".haa", {
      opacity: 0,
      y: 100,
      duration: 0.3,
      delay: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".haa",
        scroller: "body",
        start: "top 80%",
      },
    });
  });
  return (
    <div className="min-h-[80vh] sm:py-0 py-4 flex flex-col items-center justify-center text-white gap-5">
      <div className=" w-[90vw] haa sm:w-[70vw] sm:pr-60">
        <h1 className="text-3xl sm:text-6xl max-md:text-center font-bold sm:font-semibold">
          Vault readily integrates with your everyday apps.
        </h1>
      </div>
      <div className="w-[90vw] haa sm:w-[70vw] sm:pr-48">
        <h1 className="text-lg max-md:text-center font-light">
          Simplify onboarding and password management using our ready-made
          integrations with popular third-party and Zoho applications.
        </h1>
      </div>
      <div className=" haa w-[90vw] sm:w-[70vw]">
        <h1
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="border-b text-blue-500 hover:text-blue-900 hover:cursor-pointer text-xl font-medium max-md:text-center sm:border-b-blue-500 sm:w-28"
        >
          Learn more
        </h1>
      </div>
      <div className="min-h-40 border border-neutral-700 flex-wrap w-[90vw] sm:w-[80vw] sm:ml-28 py-5 sm:py-0 sm:gap-2 gap-4 flex items-center justify-center">
        <div className="h-32 w-32 ii  flex items-center justify-center">
          <img src={l7} alt="" />
        </div>
        <div className="h-32 w-32 ii flex-col flex items-center justify-center">
          <img src={l1} alt="" className="h-4/5" />
          <h1 className="text-white  text-sm">Azure AD</h1>
        </div>
        <div className="h-32 w-32 ii  flex-col flex items-center justify-center">
          <img src={l2} alt="" className="h-4/5" />
          <h1 className="text-white  text-sm">Windows AD</h1>
        </div>
        <div className="h-32 w-32 ii gap-2 pt-2  flex-col flex items-center justify-center">
          <img src={l5} alt="" className="h-4/6 rounded-lg" />
          <h1 className="text-white text-sm">Google Workspace</h1>
        </div>
        <div className="h-32 w-32 ii  flex-col flex items-center justify-center">
          <img src={l4} alt="" className="h-4/5 p-2" />
          <h1 className="text-white text-sm">Microsoft 365</h1>
        </div>
        <div className="h-32 w-32 ii  flex-col flex items-center justify-center">
          <img src={l3} alt="" className="rounded-lg h-4/5 p-2" />
          <h1 className="text-white text-sm">Dropbox</h1>
        </div>
        <div className="h-32 w-32 ii  flex-col flex items-center justify-center">
          <img src={l6} alt="" className="rounded-lg h-4/5 p-2" />
          <h1 className="text-white  text-sm">ServiceNow</h1>
        </div>
        <div className="h-32 w-32 ii  flex-col flex items-center justify-center">
          <img src={l8} alt="" className="rounded-lg h-4/5" />
          <h1 className="text-white  text-sm">Zoho Apps</h1>
        </div>
      </div>
    </div>
  );
}

export default Part3;
