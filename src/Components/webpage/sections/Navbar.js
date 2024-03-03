import React from "react";
import logo from "../../../img/webpage/logo.png";
import SignInButton from "../elements/SignInButton";
import Translate from "../elements/Translate";

const Navbar = () => {
  return (
    <nav className="w-screen  flex p-2 py-2 justify-center absolute z-10 top-0">
      <div className="w-4/5">
        <div className="float-left h-full ">
          <img
            className="float-left h-20 cursor-pointer"
            href="/"
            src={logo}
            alt="img"
          />
        </div>
        <div className="float-right h-full flex items-center justify-center ">
          <div className="flex gap-2 ">
            <Translate />
            <SignInButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
