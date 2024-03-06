import React from "react";

const Header = (props) => {
  return (
    <div className="w-screen h-screen bg-white -z-10">
      <img
        className="w-full"
        src={`https://image.tmdb.org/t/p/w500${props.movieImg}`}
        alt="img"
      />
    </div>
  );
};

export default Header;
