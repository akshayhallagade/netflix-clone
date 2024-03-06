import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import React from "react";

const Header = (props) => {
  const headerVideo = props.movieData;
  console.log(headerVideo);
  const [videoData, setVideoData] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmRhM2Q3ZDAyNTE1MjQ0ZjY1YTg0Y2ZiNmNkNGM3MiIsInN1YiI6IjY1ZGEyMTcwNjA5NzUwMDE2NGE2M2U3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yP7LlKw2lGJUvmDQ3gHRrAZFs0yhSHGK0d3zPSkk24M",
    },
  };

  useEffect(() => {
    const fetchData = () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${headerVideo.id}/videos`,
        options
      )
        .then((response) => response.json())
        .then((response) => setVideoData(response))
        .catch((err) => console.error(err));
    fetchData();
  }, []);
  console.log(videoData);

  // const videoKey = "hUbIsfzOjk4";
  return (
    <div className="w-screen h-screen bg-white -z-10">
      {(
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoData.results[1].key}`}
          playing={true}
          width="100%"
          height="100%"
        />
      ) || (
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${props.movieImg}`}
          alt="img"
        />
      )}
    </div>
  );
};

export default Header;
