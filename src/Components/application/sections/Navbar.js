import React from "react";
import logo from "../../../img/webpage/logo.png";
import Profile from "../../../img/profiles/profile1.png";
import { Search, Notification, ArrowDown } from "../../../utils/icons";

const Navbar = () => {
  return (
    <nav className="w-screen text-white  px-5 flex justify-between fixed top-0 navbar-effect z-10">
      <ul className="flex gap-2 w-fit text-xs  items-center float-left">
        <li className=" pr-4">
          <img className="w-28" src={logo} alt="" />
        </li>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse</li>
        <li>Browse by Language</li>
      </ul>
      <ul className="flex gap-2 w-fit text-xs  items-center float-right">
        <li className=" ">
          <Search size={25} />
        </li>
        <li className="">Children</li>
        <li className=" relative">
          <Notification size={25} />
        </li>
        <li className="flex items-center gap-1">
          <img className="rounded-md w-7" src={Profile} alt="img" />
          <ArrowDown className="hover:rotate-180 duration-300" size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
