import React from "react";
// import HeaderImage from "../../../img/movieimg/spidermanLogo.webp";
import HeaderPlayButton from "../elements/HeaderPlayButton";
import HeaderInfoButton from "../elements/HeaderInfoButton";

import Collection from "./Collection";
import Footer from "./Footer";

const Content = (props) => {
  const { title, overview } = { ...props.movieData };

  return (
    <div className="absolute top-24 left-6 w-96">
      <div className="py-10">
        <p className="text-6xl text-gray-200 font-bold">{title}</p>
        <p className="text-xs text-white mt-5">{overview}</p>
        <div className="flex items-center gap-2 mt-3">
          <HeaderPlayButton />
          <HeaderInfoButton />
        </div>
      </div>
      <div className="w-screen">
        <Collection />
      </div>
      <Footer />
    </div>
  );
};

export default Content;
