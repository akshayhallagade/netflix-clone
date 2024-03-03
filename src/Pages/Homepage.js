import React from "react";
// import video1 from "../videos/video1.m4v";
import Logo from "../img/webpage/logo.png";
import Profile1 from "../img/profiles/profile1.png";
import mainHead from "../img/movieimg/spidermanLogo.webp";
import mainImage from "../img/movieimg/movie.webp";
// import CardSection from "../Components/ui/CardSection";

const Homepage = () => {
  return (
    <>
      {/* Navbar /> */}
      <div className="w-screen bg-black">
        <nav className="fixed w-screen top-0 border-2 bg-transparent px-12 z-10 navbar-background">
          <div className="float-left border-2">
            <div className="flex items-center justify-center text-white gap-7">
              <img className="w-40 border-2" src={Logo} alt="img" />
              <p className="focus:font-semibold">Home</p>
              <p className="focus:font-semibold">TV Shows</p>
              <p className="focus:font-semibold">Movies</p>
              <p className="focus:font-semibold">New & Popular</p>
              <p className="focus:font-semibold">My List</p>
              <p className="focus:font-semibold">Browse By languages</p>
            </div>
          </div>
          <div className="float-right border-2">
            <div className="flex items-center justify-center border-2 h-16 gap-4 px-5">
              <svg
                className="w-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <p className="text-white">children</p>
              <svg
                className="w-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
              </svg>
              <div className="border-2 flex gap-4 ">
                <img className="w-10 rounded-md" src={Profile1} alt="img" />
                <svg
                  className="w-3 fill-white hover:rotate-180 delay-200 duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative">
          <img className="w-screen -z-20" src={mainImage} alt="img" />
          <div className="absolute top-0 w-full h-full homepage-background"></div>
        </div>
        <div className="-z-20 bg-black w-screen h-full"></div>
        {/* <video
          className=" w-screen -z-10 relative"
          width="{200}"
          autoPlay
          muted
          loop
        >
          <source src={video1} />
        </video> */}
        <div className="w-screen absolute top-0 text-4xl text-white z-0">
          <div className="w-5/12 flex justify-center items-start flex-col ml-12 mt-36 ">
            <img src={mainHead} alt="img" />
            <p className="text-lg pr-28">
              Peter Parker returns to routin life as a high schooler until the
              Vulture's arrival gives him the chance to prove himself as a
              Web-slinging superhero.
            </p>

            <div className="flex w-full gap-4 border-2 py-4 items-center justify-start">
              <button className="flex h-fit w-fit items-center justify-center text-black fill-black gap-4 bg-white px-7 py-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 "
                  viewBox="0 0 384 512"
                >
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
                <p className="text-xl font-bold">Play</p>
              </button>
              <button className="flex items-center justify-center gap-4 fill-white text-white border-2 py-3 px-6 rounded-md bg-gray-700">
                <svg className="w-8" viewBox="0 0 24 24">
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"></path>
                </svg>
                <p className="text-xl font-bold"> More Info</p>
              </button>
            </div>
          </div>
          <div className="contentholder mt-28 px-6">
            {/* <CardSection /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
