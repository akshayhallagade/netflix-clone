import React from "react";
import { Instagram, Github, LinkedIn } from "../../../utils/icons";

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
        <LinkedIn size={25} />
        <Github size={25} />
        <Instagram size={25} />
      </div>
    </div>
  );
};

export default Branding;
