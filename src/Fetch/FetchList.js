import React from "react";

const FetchList = () => {
  // TMDB API .........
  // API KEy ---> 66da3d7d02515244f65a84cfb6cd4c72
  // Read Access Token ---> eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmRhM2Q3ZDAyNTE1MjQ0ZjY1YTg0Y2ZiNmNkNGM3MiIsInN1YiI6IjY1ZGEyMTcwNjA5NzUwMDE2NGE2M2U3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yP7LlKw2lGJUvmDQ3gHRrAZFs0yhSHGK0d3zPSkk24M
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmRhM2Q3ZDAyNTE1MjQ0ZjY1YTg0Y2ZiNmNkNGM3MiIsInN1YiI6IjY1ZGEyMTcwNjA5NzUwMDE2NGE2M2U3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yP7LlKw2lGJUvmDQ3gHRrAZFs0yhSHGK0d3zPSkk24M",
    },
  };
  const endpoint = `https://api.themoviedb.org/3/movie/popular`;

  fetch(endpoint, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div>FetchList</div>;
};

export default FetchList;
