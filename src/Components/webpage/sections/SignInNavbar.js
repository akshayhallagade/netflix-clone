import React from "react";
import logo from "../../../img/webpage/logo.png";

const SignInNavbar = () => {
  return (
    <nav className="w-screen  flex p-2 py-4 justify-center absolute z-10 top-0">
      <div className="w-4/5  ">
        <div className="float-left h-full ">
          <a href="./">
            <img className="float-left h-20" src={logo} alt="img" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SignInNavbar;
