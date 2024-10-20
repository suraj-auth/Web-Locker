import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const inp1Ref = useRef();
  const inp2Ref = useRef();
  const inp3Ref = useRef();
  const inp4Ref = useRef();
  const inp5Ref = useRef();
  async function addQuery() {
    if (
      inp1Ref.current.value.trim() == "" ||
      inp2Ref.current.value.trim() == "" ||
      inp3Ref.current.value.trim() == "" ||
      inp4Ref.current.value.trim() == "" ||
      inp5Ref.current.value.trim() == ""
    )
      toast.success("some fields are missing!");
    else {
      let inpobj = {
        name: inp1Ref.current.value,
        username: inp2Ref.current.value,
        email: inp3Ref.current.value,
        phonenumber: inp4Ref.current.value,
        help: inp5Ref.current.value,
      };
      let res = await fetch("http://localhost:5000/api/v1/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inpobj),
      });
      let response = await res.text();
      inp1Ref.current.value = "";
      inp2Ref.current.value = "";
      inp3Ref.current.value = "";
      inp4Ref.current.value = "";
      inp5Ref.current.value = "";
      if (response == "true") toast.success("Feedback added successfully!");
      else toast.success("Error in adding feedback!");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-gray-800 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-12">
          <h1 className="text-3xl bg-gradient-to-r from-orange-600 to-green-600 text-transparent bg-clip-text font-bold mb-6">
            Chat to our team
          </h1>
          <p className="mb-8 text-gray-400">
            Need help with something? Want a demo? Get in touch with our
            friendly team and we’ll get in touch within 2 hours.
          </p>
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                ref={inp1Ref}
                type="text"
                placeholder="Name"
                className="p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <input
                ref={inp2Ref}
                type="text"
                placeholder="Username"
                className="p-3 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <input
                ref={inp3Ref}
                type="email"
                placeholder="Work email"
                className="p-3 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <input
                ref={inp4Ref}
                type="text"
                placeholder="Phone number"
                className="p-3 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <input
                ref={inp5Ref}
                type="text"
                placeholder="Query?"
                className="p-3 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              className="p-4 bg-blue-600 hover:bg-blue-700 rounded-md w-full text-white font-semibold"
              onClick={() => {
                addQuery();
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
        <div className="bg-gray-700 block">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <img
              className="h-full object-cover"
              src="https://imgcdn.stablediffusionweb.com/2024/9/22/3d4c8b06-da61-48c9-8067-44281972581b.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
