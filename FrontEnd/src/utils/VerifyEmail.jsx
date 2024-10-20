import { useLocation, useNavigate } from "react-router-dom";
import Rloader from "./Ringloader";
import { useState } from "react";
const VerifyEmail = () => {
  const [isloading, setIsloading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getTokenFromURL = () => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const userId = params.get("userId");
    return { token, userId };
  };
  const handleVerification = async () => {
    setIsloading(true);
    const { token, userId } = getTokenFromURL();
    if (!token || !userId) {
      console.error("Credentials not found");
    }
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/verifyAccount?tid=${token}&uid=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.stat) {
        navigate("/login");
      } else {
        alert("Verification failed");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  };

  return (
    <div className="verification-page h-screen flex items-center justify-center flex-col w-screen bg-black text-white">
      <h1 className="text-3xl">Email Verification</h1>
      {isloading ? (
        <Rloader />
      ) : (
        <button
          onClick={handleVerification}
          className="border-2 rounded-full border-white h-10 w-40 mt-10"
        >
          Verify Email
        </button>
      )}
    </div>
  );
};
export default VerifyEmail;
