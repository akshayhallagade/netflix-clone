import React, { useState, useContext } from "react";
import {
  Play,
  Add,
  Like,
  Down,
  Dot,
  MostLiked,
  Added,
} from "../../../utils/icons";
import { WatchListContext } from "../../../Context/WatchListProvider";

const Card = (props) => {
  const [addCardToWatch, setAddCardToWatch] = useState(false);

  const addToWatchListContext = useContext(WatchListContext);
  const { watchlistMovies, addNewWatchListMovies } = addToWatchListContext;
  const { watchlistTV, addNewWatchlistTV } = addToWatchListContext;

  const addNewItem = () => {
    const tempList =
      props.mediaType === "TV" ? [...watchlistTV] : [...watchlistMovies];
    tempList.push(props.id);
    props.mediaType === "TV"
      ? addNewWatchlistTV(tempList)
      : addNewWatchListMovies(tempList);
    console.log(watchlistMovies, watchlistTV);
  };

  // watchlistMovies.includes(props.id) || watchlistTV.includes(props.id)
  //   ? setAddCardToWatch(true)
  //   : setAddCardToWatch(false);

  return (
    <div className="w-fit group relative z-0 hover:z-30 transition">
      <img
        className="min-w-52 opacity-100 hover:opacity-0"
        src={props.img}
        alt="img"
      />

      <div className="absolute w-full pb-2 top-0 opacity-0 transition hover:duration-200 scale-0 group-hover:scale-125 hover:opacity-100 bg-gray-800 hover:rounded-md z-30 cardtemplate">
        <img
          className="w-fit group-hover:rounded-md"
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

          <p className="text-xl text-white font-medium py-1">{props.title}</p>
          <ul className="text-white overflow-hidden">
            <li className="float-left w-5 h-5 border-2 border-white hover:border-gray-400 rounded-full flex items-center justify-center bg-white hover:bg-gray-400 text-black">
              <Play size={15} />
            </li>
            <li
              className="float-left w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center ml-1"
              onClick={() => {
                addNewItem();
                setAddCardToWatch(() => !addCardToWatch);
              }}
            >
              {addCardToWatch ? <Added size={15} /> : <Add size={15} />}
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

export default Card;
