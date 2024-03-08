import React, { useEffect, useState } from "react";
import Card from "./Card";
import NumberCard from "./NumberCard";
// import movie1 from "../../../img/movieimg/movie1.jpg";
// import movie2 from "../../../img/movieimg/movie2.jpg";
// import movie3 from "../../../img/movieimg/movie3.jpg";
// import movie4 from "../../../img/movieimg/movie4.jpg";
// import movie5 from "../../../img/movieimg/movie5.jpg";
// import movie6 from "../../../img/movieimg/movie6.jpg";
// import movie7 from "../../../img/movieimg/movie7.jpg";
// import FetchList from "../../../Fetch/FetchList";

const GenreList = (props) => {
  const genrenames = {
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    28: "Action",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmRhM2Q3ZDAyNTE1MjQ0ZjY1YTg0Y2ZiNmNkNGM3MiIsInN1YiI6IjY1ZGEyMTcwNjA5NzUwMDE2NGE2M2U3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yP7LlKw2lGJUvmDQ3gHRrAZFs0yhSHGK0d3zPSkk24M",
      },
    };

    const fetchData = async () =>
      await fetch(props.site, options)
        .then((response) => response.json())
        .then((response) => setData(response.results))
        .catch((err) => console.error(err));

    fetchData();
  }, [props.site]);

  // url to get images
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="py-2 w-screen mt-5">
      <h1 className="text-white">{props.genre}</h1>
      {/* Header Content  */}
      {/* <FetchList /> */}
      <div className=" grid  grid-flow-col gap-2 z-0 mt-2">
        {data.map((item, index) =>
          props.genre.startsWith("Top 10") ? (
            <NumberCard
              key={index}
              id={item.id}
              number={index}
              title={item.title}
              img={`${baseURL}${item.poster_path}`}
              genrenameslist={item.genre_ids.map((genre) => {
                return genrenames[genre];
              })}
              watch_rate={Math.round(item.vote_average * 10)}
              isMostLiked={item.vote_count}
              mediaType={"movie"}
            />
          ) : (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              img={`${baseURL}${item.backdrop_path}`}
              genrenameslist={item.genre_ids.map((genre) => {
                return genrenames[genre];
              })}
              watch_rate={Math.round(item.vote_average * 10)}
              isMostLiked={item.vote_count}
              mediaType={"movie"}
              isWatchList={false}
              releaseYear={item.release_date.split("-")[0]}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GenreList;
