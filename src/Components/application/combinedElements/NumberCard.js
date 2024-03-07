import React from "react";
import { Play, Add, Like, Down, Dot, MostLiked } from "../../../utils/icons";

const NumberCard = (props) => {
  return (
    <div className="w-52 group relative z-0 hover:z-30 transition">
      <div className="flex">
        <div className="text-9xl font-extrabold text-white top10ListNumber">
          {props.number + 1}
        </div>
        <div className="object-cover w-40 -ml-4">
          <img
            className="opacity-100 hover:opacity-0"
            src={props.img}
            alt="img"
            width="120px"
          />
        </div>
      </div>

      <div className="absolute w-full pb-2 top-0 opacity-0 transition hover:duration-200 scale-0 group-hover:scale-125 hover:opacity-100 bg-gray-800 hover:rounded-md z-30 cardtemplate">
        <img
          className="w-52 group-hover:rounded-md"
          src={props.img}
          alt="img"
        />
        <div className="p-2">
          {props.isMostLiked > 1000 ? (
            <div className="flex gap-1 text-white font-bold py-1">
              <div className="bg-red-600 rounded-sm  flex justify-center items-center p-0.5">
                <MostLiked size={13} color="white" />
              </div>
              Most Liked
            </div>
          ) : null}
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
          <p className="text-green-500 text-xs font-bold py-1">
            {props.watch_rate}% Match
          </p>
          <div className="inline gap-2 text-white cardgenres">
            {props.genrenameslist.map((item) => {
              return (
                <p className="float-left flex items-center">
                  <Dot />
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCard;
