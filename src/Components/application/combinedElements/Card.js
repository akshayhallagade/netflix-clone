import React from "react";
import { Play, Add, Like, Down, Dot } from "../../../utils/icons";

const Card = (props) => {
  return (
    <div className="w-52 group relative z-0 hover:z-30 transition">
      <img
        className="w-52 opacity-100 hover:opacity-0"
        src={props.img}
        alt="img"
      />

      <div className="absolute w-full pb-2 top-0 opacity-0 transition hover:duration-200 scale-0 group-hover:scale-125 hover:opacity-100 bg-gray-800 hover:rounded-md z-30 cardtemplate">
        <img
          className="w-52 group-hover:rounded-md"
          src={props.img}
          alt="img"
        />
        <div className="p-2">
          <ul className="text-white overflow-hidden">
            <li className="float-left w-5 h-5 border-2 border-white hover:border-gray-400 rounded-full flex items-center justify-center bg-white hover:bg-gray-400 text-black">
              <Play size={15} />
            </li>
            <li className="float-left w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center ml-1">
              <Add size={15} />
            </li>
            <li className="float-left w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center ml-1">
              <Like size={15} />
            </li>
            <li className="float-right w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center">
              <Down size={15} />
            </li>
          </ul>
          <p className="text-green-500 text-xs font-bold py-1">98% Match</p>
          <div className="inline gap-2 text-white cardgenres">
            <p className="float-left flex items-center">
              <Dot />
              Captivating
            </p>
            <p className="float-left flex items-center">
              <Dot />
              Imaginative
            </p>
            <p className="float-left flex items-center">
              <Dot />
              Dramaa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
