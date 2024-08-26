import React from "react";

const SignInButton = () => {
  return (
    <div className=" relative float-right">
      <button className=" h-full flex justify-center items-center px-3 py-1 border-2 rounded-lg text-white font-bold bg-red-700">
        <a href="./signin">Sign in</a>
      </button>
    </div>
  );
};

export default SignInButton;
