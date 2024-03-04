import React from "react";
import background from "../../../img/movieimg/movie.webp";

const Header = () => {
  return (
    <div className="w-screen bg-white -z-10">
      <img className="w-full" src={background} alt="img" />
    </div>
  );
};

export default Header;
