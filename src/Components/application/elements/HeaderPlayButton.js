import React from "react";
import { Play } from "../../../utils/icons";

const HeaderPlayButton = () => {
  return (
    <div className="flex gap-1 text-black bg-white rounded-md items-center justify-center px-5 py-2 cursor-pointer">
      <Play size={25} />
      <p className="text-sm font-bold">Play</p>
    </div>
  );
};

export default HeaderPlayButton;
