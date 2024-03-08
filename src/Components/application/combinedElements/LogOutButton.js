import React, { useState } from "react";
import Profile from "../../../img/profiles/profile1.png";
import { ArrowDown } from "../../../utils/icons";

const LogOutButton = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div className="relative">
      <div
        className="flex items-center gap-1"
        onClick={() => setShowButton(!showButton)}
      >
        <img className="rounded-md w-7" src={Profile} alt="img" />
        <ArrowDown
          className={`duration-300 ${showButton ? "rotate-180" : "rotate-0"}`}
          size={20}
        />
      </div>
      <div
        className={`absolute bg-gray-900 top-10 shadow-md bg-opacity-50 shadow-indigo-200 right-0 py-2 px-5 ${
          showButton ? "visible" : "invisible"
        }`}
      >
        <a
          href="/"
          className="w-fit p-1 text-white text-nowrap hover:underline hover:text-red-400"
        >
          Sign out of Netflix
        </a>
      </div>
    </div>
  );
};

export default LogOutButton;
