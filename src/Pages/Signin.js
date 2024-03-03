import React from "react";
import SignInFooter from "../Components/webpage/sections/SignInFooter";
import SignInNavbar from "../Components/webpage/sections/SignInNavbar";
import SignInForm from "../Components/webpage/sections/SignInForm";

const Signin = () => {
  return (
    <>
      <div className="w-screen signin">
        <SignInNavbar />
        <div className="w-screen h-screen flex items-center justify-center">
          <SignInForm />
        </div>
        <SignInFooter />
      </div>
    </>
  );
};

export default Signin;
