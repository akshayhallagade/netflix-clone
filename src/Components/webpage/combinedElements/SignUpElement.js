import React from "react";
import SignUpButton from "../elements/SignUpButton";
import SignUpInput from "../elements/SignUpInput";

const SignUpElement = () => {
  return (
    <div className="flex items-center gap-2 h-16 mt-7">
      <SignUpInput />
      <div>
        <SignUpButton />
      </div>
    </div>
  );
};

export default SignUpElement;
