import React from "react";
import { ArrowUp } from "../../../utils/icons";

const SignInButton = () => {
  return (
    <div className=" relative float-right">
      <button className=" h-full flex justify-center items-center px-3 py-1 border-2 rounded-lg text-white font-bold bg-red-700">
        <a href="./signin">Sign in</a>
      </button>
      <div className="absolute z-30 text-white -bottom-10 left-0 p-2 text-nowrap rounded-md">
        <div className="flex items-center">
          <ArrowUp />
          click here
        </div>
      </div>
    </div>
  );
};

export default SignInButton;
