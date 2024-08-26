import React, { useState } from "react";
import Profile from "../../../img/profiles/profile1.png";
import { ArrowDown } from "../../../utils/icons";
import { useCurrentUser } from "../../../hooks/query/user";

const LogOutButton = () => {
  const [showButton, setShowButton] = useState(false);

  const { user, isLoading } = useCurrentUser();

  const logoutbutton = () => {
    localStorage.removeItem("token");
  };

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
        className={`absolute flex items-center justify-center flex-col bg-gray-900 top-10 shadow-md bg-opacity-50 shadow-indigo-200 right-0 py-2 px-5 ${
          showButton ? "visible" : "invisible"
        }`}
      >
        {isLoading && <p>isLoading</p>}
        {user && (
          <div>
            <p className="text-sm text-white hover:text-red-400 text-center">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-center">{user.email}</p>
            <p className="text-center">age : {user.age}</p>
          </div>
        )}
        <a
          href="/"
          onClick={logoutbutton}
          className="w-fit p-1 text-white text-nowrap hover:underline hover:text-red-400 mt-4"
        >
          Sign out of Netflix
        </a>
      </div>
    </div>
  );
};

export default LogOutButton;
