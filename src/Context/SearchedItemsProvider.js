import React, { useState, createContext } from "react";

export const SearchItemsContext = createContext();
const SearchedItemsProvider = ({ children }) => {
  const [searchedData, setSearchedData] = useState("");
  return (
    <SearchItemsContext.Provider value={{ searchedData, setSearchedData }}>
      {children}
    </SearchItemsContext.Provider>
  );
};

export default SearchedItemsProvider;
