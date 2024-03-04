import React from "react";
import SignUpElement from "../combinedElements/SignUpElement";
import Navbar from "./Navbar";

const SignUpHeader = () => {
  return (
    <header className="signup w-screen py-56 flex justify-center items-center ">
      <Navbar />
      <div className="w-4/5 h-full flex items-center justify-center  flex-col text-white gap-6">
        <h1 className="text-5xl font-extrabold text-center">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-2xl font-semibold">Watch anywhere. Cancel anytime</p>
        <p className="text-xl font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <SignUpElement />
      </div>
    </header>
  );
};

export default SignUpHeader;
