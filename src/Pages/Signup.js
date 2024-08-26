import React from "react";
import SignInNavbar from "../Components/webpage/sections/SignInNavbar";
import Footer from "../Components/webpage/sections/Footer";
import SignUpForm from "../Components/webpage/sections/SignUpForm";

const Signup = () => {
  return (
    <>
      <div className="w-screen signin">
        <SignInNavbar />
        <div className="w-screen flex items-center justify-center py-20">
          <SignUpForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
