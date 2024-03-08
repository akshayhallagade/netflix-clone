import React, { useContext } from "react";
import Navbar from "../Components/application/sections/Navbar";
import { WatchListContext } from "../Context/WatchListProvider";
import WatchlistCard from "../Components/application/combinedElements/WatchlistCard";
import Footer from "../Components/application/sections/Footer";

const MyList = () => {
  const getWatchList = useContext(WatchListContext);
  const { watchlistMovies, watchlistTV } = getWatchList;

  return (
    <div className="relative h-fit">
      <Navbar />
      <div className="w-screen  mt-14 p-2 px-4">
        <h1 className="text-xl w-fit text-white font-semibold border-b-2p px-4">
          WATCHLIST
        </h1>
        {/* <h1 className="text-lg text-gray-100 mt-3"> Movies</h1> */}
        <div className="w-full grid grid-cols-5 grid-flow-row gap-2 px-3 mt-2">
          {watchlistMovies.map((item, index) => {
            return <WatchlistCard key={index} id={item} mediaType={"movie"} />;
          })}
        </div>
        {/* <h1 className="text-lg text-gray-100 mt-3">TV Shows</h1> */}
        {watchlistTV.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
