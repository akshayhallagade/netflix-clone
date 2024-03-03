import React from "react";
import Breakers from "../../../Components/webpage/elements/Breakers";
import Sect1Img from "../../../img/webpage/Sect1Img.png";
import Sect2Img from "../../../img/webpage/Sect2Img.jpg";
import Sect3Img from "../../../img/webpage/Sect3img.png";
import Sect4Img from "../../../img/webpage/Sect4img.png";
import Video2 from "../../../videos/video2.m4v";
import Video1 from "../../../videos/video1.m4v";

const SectionComponent = () => {
  const sectionData = [
    {
      id: 1,
      img: Sect1Img,
      video: Video2,
      videoWidth: "470",
      topDistance: "top-17",
      heading: "Enjoy on your TV",
      content:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      id: 2,
      img: Sect2Img,
      video: "",
      videoWidth: "470",
      topDistance: "",
      heading: "Download your shows to watch offline",
      content:
        "Save your favourites easily and always have something to watch.",
    },
    {
      id: 3,
      img: Sect3Img,
      video: Video1,
      videoWidth: "410",
      topDistance: "top-8",
      heading: "Watch everywhere",
      content:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.,",
    },
    {
      id: 4,
      img: Sect4Img,
      video: "",
      videoWidth: "470",
      topDistance: "",
      heading: "Create profiles for kids",
      content:
        "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    },
  ];

  return (
    <>
      {sectionData.map((item) => {
        return (
          <>
            <section className="bg-black flex justify-center text-white">
              <div
                className={`w-4/5 py-20 flex ${
                  item.id % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2 flex justify-center flex-col">
                  <h1 className="text-5xl e font-extrabold">{item.heading}</h1>
                  <p className="mt-10 text-2xl font-semibold">{item.content}</p>
                </div>
                <div className="w-1/2 relative flex items-center justify-center">
                  <img className="z-10" src={`${item.img}`} alt="img" />
                  <video
                    className={`absolute ${item.topDistance}`}
                    width={`${item.videoWidth}`}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={`${item.video}`} type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
            <Breakers />
          </>
        );
      })}
    </>
  );
};

export default SectionComponent;
