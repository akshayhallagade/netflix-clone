import React from "react";
import { RightSide } from "../../../utils/icons";

const SignUpButton = () => {
  return (
    <button className="w-fit bg-red-700 hover:bg-red-600 p-4 h-full text-2xl text-white font-bold rounded-md flex items-center justify-center gap-2">
      <a href="./signup">Create Account Now </a>
      <RightSide />
    </button>
  );
};

export default SignUpButton;
