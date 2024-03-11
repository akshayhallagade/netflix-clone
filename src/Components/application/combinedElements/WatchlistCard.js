import React, { useState, useEffect } from "react";
import Card from "./Card";

const WatchlistCard = (props) => {
  const [data, addData] = useState({});

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
        `https://api.themoviedb.org/3/${props.mediaType}/${props.id}?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => addData(response))
        .catch((err) => console.error(err));
    fetchData();
  }, []);

  console.log(data);

  return (
    <Card
      id={data.id}
      title={data.title}
      img={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
      genrenameslist={
        data.genres
          ? data.genres.map((genre) => {
              return genre.name;
            })
          : []
      }
      watch_rate={Math.round(data.vote_average * 10)}
      isMostLiked={data.vote_count}
      mediaType={"movie"}
      isWatchList={true}
    />
  );
};

export default WatchlistCard;
