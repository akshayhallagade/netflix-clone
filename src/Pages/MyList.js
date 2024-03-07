import React, { useContext } from "react";
import Navbar from "../Components/application/sections/Navbar";
import { WatchListContext } from "../Context/WatchListProvider";

const MyList = () => {
  const getWatchList = useContext(WatchListContext);
  const { watchlistMovies, watchlistTV } = getWatchList;

  return (
    <div className="relative h-fit">
      <Navbar />
      <div className="w-screen border-2 mt-20 p-2">
        <h1 className="text-3xl w-fit text-white font-semibold border-b-2">
          WatchList
        </h1>
        <h1 className="text-2xl text-gray-100 mt-3"> Movies</h1>
        {watchlistMovies.map((item) => {
          return <p>{item}</p>;
        })}
        <h1 className="text-2xl text-gray-100 mt-3">TV Shows</h1>
        {watchlistTV.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default MyList;
