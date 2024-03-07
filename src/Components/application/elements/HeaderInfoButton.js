import React from "react";
import { Info } from "../../../utils/icons";

const HeaderInfoButton = () => {
  return (
    <div className="flex gap-1 text-white bg-gray-600 rounded-md items-center justify-center px-5 py-2 cursor-pointer">
      <Info size={25} />
      <p className="text-sm font-bold">More Info</p>
    </div>
  );
};

export default HeaderInfoButton;
