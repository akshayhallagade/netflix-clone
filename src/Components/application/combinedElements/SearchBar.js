import React, { useState, useContext } from "react";
import { Search } from "../../../utils/icons";
import { SearchItemsContext } from "../../../Context/SearchedItemsProvider";

const SearchBar = () => {
  const [width, updatedWidth] = useState(false);

  const searchDataContext = useContext(SearchItemsContext);
  const { setSearchedData } = searchDataContext;

  const debouncing = () => {
    let timeoutref;
    return function (e) {
      clearTimeout(timeoutref);
      timeoutref = setTimeout(() => {
        setSearchedData(e.target.value);
      }, 1000);
    };
  };

  return (
    <>
      <div
        className={`relative px-1 ${
          width ? "border-2 bg-black bg-opacity-80" : "border-0"
        }`}
      >
        <div className="flex">
          <div className="p-0.5">
            <Search size={25} onClick={() => updatedWidth(!width)} />
          </div>
          <input
            type="text"
            onKeyUp={debouncing()}
            className={`bg-transparent outline-none transition-transform duration delay-200 placeholder:text-xs placeholder:text-gray-400 ${
              width ? "w-36" : "w-0"
            }`}
            placeholder="Movie, TV Shows"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
