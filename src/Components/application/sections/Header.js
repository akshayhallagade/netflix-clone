import React from "react";

const Header = (props) => {
  return (
    <div className="w-screen bg-white -z-10 relative">
      <img
        className="w-full"
        src={`https://image.tmdb.org/t/p/w500${props.movieImg}`}
        alt="img"
      />
      <div className="imgoverlay w-screen h-full absolute z-0 top-0"></div>
    </div>
  );
};

export default Header;
