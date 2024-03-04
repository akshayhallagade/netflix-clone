import React from "react";
import HeaderImage from "../../../img/movieimg/spidermanLogo.webp";
import HeaderPlayButton from "../elements/HeaderPlayButton";
import HeaderInfoButton from "../elements/HeaderInfoButton";
import Collection from "./Collection";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className="absolute top-24 left-6 w-96">
      <img src={HeaderImage} alt="" />
      <p className="text-xs text-white mt-5">
        A mother with a heart of gold navigates the cutthroat world of private
        education when her daughter tries to join a celebrity math instructor's
        class.
      </p>
      <div className="flex items-center gap-2 mt-3">
        <HeaderPlayButton />
        <HeaderInfoButton />
      </div>
      <div className="w-screen">
        <Collection />
      </div>
      <Footer />
    </div>
  );
};

export default Content;
