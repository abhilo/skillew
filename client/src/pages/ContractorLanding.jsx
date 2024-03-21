import "../App.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

// Components need to be capitalized.
const ContractorLanding = () => {
  const [goToSignup, setGoToSignup] = useState(false);
  const [goToLogin, setGoToLogin] = useState(false);

  if (goToSignup) {
    return <Navigate to="/contractorsignup" />;
  }

  if (goToLogin) {
    return <Navigate to="/contractorlogin" />;
  }

  return (
    <div className="w-screen">
      <h1 className="font-logo text-4xl p-5 h-screen"> Skillew </h1>

      <div className="w-screen" id="holder">
        <h1 className="font-logo text-2xl p-2" id="landingstarted">
          {" "}
          Get Startdffed!{" "}
        </h1>
        <div className="" id="landingbuttons">
          <button
            className="bg-violet-600 hover:bg-indigo-950 text-white inter font-inter py-2 px-4 rounded-md px-9 mx-3"
            onClick={() => {
              setGoToLogin(true);
            }}
          >
            Log in
          </button>
          <button
            className="bg-violet-600 hover:bg-indigo-950 text-white font-inter py-2 px-4 rounded-md px-9 mx-3"
            onClick={() => {
              setGoToSignup(true);
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractorLanding;
