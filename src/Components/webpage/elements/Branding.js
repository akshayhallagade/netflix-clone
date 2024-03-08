import React from "react";
import { Instagram, Github, LinkedIn } from "../../../utils/icons";
import { Link } from "react-router-dom";

const Branding = () => {
  return (
    <div className="text-white w-full text-center flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-2">
        <div className="text-xs">Made By :</div>
        <div className="text-medium hover:text-red-500 duration-200 delay-200">
          Akshay Hallagade
        </div>
      </div>

      <div className="flex gap-4 py-2">
        <Link to="https://www.linkedin.com/in/akshayhallagade/" target="_blank">
          <LinkedIn size={25} />
        </Link>
        <Link to="https://github.com/akshayhallagade" target="_blank">
          <Github size={25} />
        </Link>
        <Link to="https://www.instagram.com/aksh_hallagade/" target="_blank">
          <Instagram size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Branding;
