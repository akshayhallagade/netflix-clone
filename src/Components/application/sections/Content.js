import React, { useState } from "react";
// import HeaderImage from "../../../img/movieimg/spidermanLogo.webp";
import HeaderPlayButton from "../elements/HeaderPlayButton";
import HeaderInfoButton from "../elements/HeaderInfoButton";
import { Cross, Like, Add } from "../../../utils/icons";

import Collection from "./Collection";
import Footer from "./Footer";

const Content = (props) => {
  const [ShowDetailes, setShowDetailes] = useState(false);
  const { title, overview } = { ...props.movieData };

  return (
    <div className="absolute top-24 left-6 w-96">
      <div className="py-10">
        <p className="text-6xl text-gray-200 font-bold">{title}</p>
        <p className="text-xs text-white mt-5">{overview}</p>
        <div className="flex items-center gap-2 mt-3">
          <HeaderPlayButton />
          <div onClick={() => setShowDetailes(!ShowDetailes)}>
            <HeaderInfoButton />
          </div>
        </div>
      </div>
      <div className="w-screen">
        <Collection />
      </div>
      <Footer />
      {ShowDetailes ? (
        <div className="fixed w-screen inset-0 h-screen bg-gray-800 bg-opacity-50 z-40 top-0 right-0 flex justify-center items-center overflow-y-scroll">
          <div className="w-4/6 relative bg-gray-900 text-white mt-36 rounded-2xl">
            <div
              className="absolute top-8 right-8 z-50 p-1 border-2 rounded-xl border-white"
              onClick={() => setShowDetailes(!ShowDetailes)}
            >
              <Cross size={20} color="white" />
            </div>
            <div className="relative h-fit rounded-xl">
              <img
                className="w-full rounded-xl"
                src={`https://image.tmdb.org/t/p/w500${props.movieData.backdrop_path}`}
                alt="img"
              />
              <div className="absolute top-0 w-full h-full detailesPanelOverlay">
                <div className="absolute bottom-10 left-10 text-white ">
                  <p className="text-3xl">{title}</p>
                  <div className="flex gap-4 mt-4">
                    <HeaderPlayButton />
                    <div className="rounded-full border-2 p-2 flex items-center justify-center">
                      <Like size={25} />
                    </div>
                    <div className="rounded-full border-2 p-2 flex items-center justify-center">
                      <Add size={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-8 px-8">
              <div className="w-4/6">
                <div className="flex gap-2">
                  <p className="text-green-400 font-bold">
                    {Math.round(props.movieData.vote_average * 10)}% Match
                  </p>
                  <p className="text-gray-400">
                    {props.movieData.release_date.split("-")[0]}
                  </p>
                  <p className="text-gray-400">2h 34m</p>
                </div>
                <p className="mt-4" style={{ fontSize: 14 }}>
                  Three friends on an adventurous road trip/bachelor party in
                  Spain learn some Iessons about themselves and each other that
                  will change them forever.
                </p>
              </div>
              <div className="w-2/6">
                <div className="flex justify-center items-center flex-col gap-2">
                  <p style={{ fontSize: 14.5 }}>
                    <span className="text-gray-500">Cast : </span>Hrithik
                    Roshan, Abhay Deol, Farhan Akhtar, more
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <span className="text-gray-500">Genres : </span>
                    Hindi-Langugae Movies, Bollywood Movies, Romantic Comedies
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <span className="text-gray-500">This movie is : </span>
                    Charming, witty, Feel-Good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Content;
