import React, { createContext, useState } from "react";

export const WatchListContext = createContext();
const WatchListProvider = ({ children }) => {
  const [watchlistMovies, addNewWatchListMovies] = useState([1232]);

  const [watchlistTV, addNewWatchlistTV] = useState([1312312]);

  return (
    <WatchListContext.Provider
      value={{
        watchlistMovies,
        addNewWatchListMovies,
        watchlistTV,
        addNewWatchlistTV,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;
