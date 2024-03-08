import React from "react";
import logo from "../../../img/webpage/logo.png";
import SearchBar from "../combinedElements/SearchBar";
import { Link } from "react-router-dom";
import LogOutButton from "../combinedElements/LogOutButton";
const Navbar = () => {
  return (
    <nav className="w-screen text-white  px-5 flex justify-between fixed top-0 navbar-effect z-10">
      <ul className="flex gap-4 w-fit text-xs  items-center float-left">
        <li className=" pr-4">
          <Link to="/browse">
            <img className="w-28" src={logo} alt="img" />
          </Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/browse">Home</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/mylist">My List</Link>
        </li>
      </ul>
      <ul className="flex gap-4 w-fit text-xs px-4  items-center float-right">
        <li>
          <SearchBar />
        </li>
        <li>
          <LogOutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
