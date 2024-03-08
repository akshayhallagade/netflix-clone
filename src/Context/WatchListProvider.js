import React, { createContext, useState } from "react";

export const WatchListContext = createContext();
const WatchListProvider = ({ children }) => {
  const [watchlistMovies, addNewWatchListMovies] = useState([]);

  const [watchlistTV, addNewWatchlistTV] = useState([]);

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
