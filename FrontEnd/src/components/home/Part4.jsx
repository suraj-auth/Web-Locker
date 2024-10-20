import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function Part4() {
  const ref1 = useRef();
  const ref11 = useRef();
  const ref2 = useRef();
  const ref22 = useRef();
  const ref3 = useRef();
  const ref33 = useRef();
  const ref4 = useRef();
  const ref44 = useRef();
  const ref5 = useRef();
  const ref55 = useRef();
  useGSAP(() => {
    gsap.from(".q", {
      opacity: 0,
      x: -500,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".q",
        scroller: "body",
        start: "top 80%",
      },
    });
  });
  return (
    <div className="min-h-[80vh] py-10 flex-col gap-5 flex items-center justify-center">
      <div>
        <h1 className="text-3xl sm:text-5xl max-md:text-center font-bold sm:font-semibold text-white mb-5 sm:mb-10">
          Frequently asked questions
        </h1>
      </div>
      <div className="select-none q min-h-20 flex-col gap-3 w-[95vw] sm:w-4/5 flex items-center justify-center border border-neutral-700 sm:px-0 px-3">
        <div className="flex items-center justify-between min-h-20 w-full sm:w-11/12">
          <h1 className="text-white text-lg sm:text-2xl">
            1. What is Weblocker, and how does it work?
          </h1>
          <div
            onClick={() => {
              ref1.current.classList.toggle("hidden");
              if (ref11.current.classList.contains("fa-plus")) {
                ref11.current.classList.remove("fa-plus");
                ref11.current.classList.add("fa-minus");
              } else {
                ref11.current.classList.remove("fa-minus");
                ref11.current.classList.add("fa-plus");
              }
            }}
            className="flex cursor-pointer items-center justify-center h-16 w-16"
          >
            <i
              ref={ref11}
              className="fa-solid text-2xl fa-minus text-white"
            ></i>
          </div>
        </div>
        <div
          ref={ref1}
          className="w-[95vw] sm:w-11/12 sm:px-0 px-3 pb-2 hidden text-slate-300 text-base sm:text-xl"
        >
          Weblocker is a secure password manager that helps you store, manage,
          and organize all your passwords in one place. By encrypting your
          passwords, Weblocker ensures they are kept safe, and you can access
          them anytime with a master password.
        </div>
      </div>
      <div className="select-none q min-h-20 flex-col gap-3 w-[95vw] sm:w-4/5 flex items-center justify-center border border-neutral-700 sm:px-0 px-3">
        <div className="flex items-center justify-between min-h-20 w-full sm:w-11/12">
          <h1 className="text-white text-lg sm:text-2xl">
            2. How secure is Weblocker for storing my passwords?
          </h1>
          <div
            onClick={() => {
              ref2.current.classList.toggle("hidden");
              if (ref22.current.classList.contains("fa-plus")) {
                ref22.current.classList.remove("fa-plus");
                ref22.current.classList.add("fa-minus");
              } else {
                ref22.current.classList.remove("fa-minus");
                ref22.current.classList.add("fa-plus");
              }
            }}
            className="flex cursor-pointer items-center justify-center h-16 w-16"
          >
            <i
              ref={ref22}
              className="fa-solid text-2xl fa-minus text-white"
            ></i>
          </div>
        </div>
        <div
          ref={ref2}
          className="w-[95vw] sm:px-0 px-3 sm:w-11/12 pb-2 hidden text-slate-300 text-base sm:text-xl"
        >
          Weblocker uses advanced encryption techniques, ensuring that only you
          can access your stored passwords. All data is encrypted end-to-end,
          meaning even Weblocker cannot read your passwords. We also recommend
          using a strong master password for added security.
        </div>
      </div>
      <div className="select-none q min-h-20 flex-col gap-3 w-[95vw] sm:w-4/5 flex items-center justify-center border border-neutral-700 sm:px-0 px-3">
        <div className="flex items-center justify-between min-h-20 w-full sm:w-11/12">
          <h1 className="text-white text-lg sm:text-2xl">
            3. What happens if I forget my master password?
          </h1>
          <div
            onClick={() => {
              ref3.current.classList.toggle("hidden");
              if (ref33.current.classList.contains("fa-plus")) {
                ref33.current.classList.remove("fa-plus");
                ref33.current.classList.add("fa-minus");
              } else {
                ref33.current.classList.remove("fa-minus");
                ref33.current.classList.add("fa-plus");
              }
            }}
            className="cursor-pointer flex items-center justify-center h-16 w-16"
          >
            <i
              ref={ref33}
              className="fa-solid text-2xl fa-minus text-white"
            ></i>
          </div>
        </div>
        <div
          ref={ref3}
          className="w-[95vw] sm:px-0 px-3 sm:w-11/12 pb-2 hidden text-slate-300 text-base sm:text-xl"
        >
          For security reasons, Weblocker does not store or recover your master
          password. If you forget it, you won’t be able to access your stored
          passwords. However, you can reset your account, but this will delete
          all previously stored passwords for privacy and safety reasons.
        </div>
      </div>
      <div className="select-none q min-h-20 flex-col gap-3 w-[95vw] sm:w-4/5 flex items-center justify-center border border-neutral-700 sm:px-0 px-3">
        <div className="flex items-center justify-between min-h-20 w-full sm:w-11/12">
          <h1 className="text-white text-lg sm:text-2xl">
            4. Can I access Weblocker on multiple devices?
          </h1>
          <div
            onClick={() => {
              ref4.current.classList.toggle("hidden");
              if (ref44.current.classList.contains("fa-plus")) {
                ref44.current.classList.remove("fa-plus");
                ref44.current.classList.add("fa-minus");
              } else {
                ref44.current.classList.remove("fa-minus");
                ref44.current.classList.add("fa-plus");
              }
            }}
            className="flex cursor-pointer items-center justify-center h-16 w-16"
          >
            <i
              ref={ref44}
              className="fa-solid text-2xl fa-minus text-white"
            ></i>
          </div>
        </div>
        <div
          ref={ref4}
          className="w-[95vw] sm:px-0 px-3 sm:w-11/12 pb-2 hidden text-slate-300 text-base sm:text-xl"
        >
          Yes, Weblocker is accessible on multiple devices. Simply log in to
          your account from any device, and you will be able to securely access
          your stored passwords anytime, anywhere.
        </div>
      </div>
      <div className="select-none q min-h-20 flex-col gap-3 w-[95vw] sm:w-4/5 flex items-center justify-center border border-neutral-700 sm:px-0 px-3">
        <div className="flex items-center justify-between min-h-20 w-full sm:w-11/12">
          <h1 className="text-white text-lg sm:text-2xl">
            5. Does Weblocker store any personal data besides passwords?
          </h1>
          <div
            onClick={() => {
              ref5.current.classList.toggle("hidden");
              if (ref55.current.classList.contains("fa-plus")) {
                ref55.current.classList.remove("fa-plus");
                ref55.current.classList.add("fa-minus");
              } else {
                ref55.current.classList.remove("fa-minus");
                ref55.current.classList.add("fa-plus");
              }
            }}
            className="flex cursor-pointer items-center justify-center h-16 w-16"
          >
            <i
              ref={ref55}
              className="fa-solid text-2xl fa-minus text-white"
            ></i>
          </div>
        </div>
        <div
          ref={ref5}
          className="w-[95vw] sm:px-0 px-3 sm:w-11/12 pb-2 hidden text-slate-300 text-base sm:text-xl"
        >
          No, Weblocker only stores the information necessary to manage your
          passwords, such as usernames and login details. We prioritize user
          privacy and do not collect or store personal information beyond what
          is needed for password management.
        </div>
      </div>
    </div>
  );
}

export default Part4;
