import React, { useEffect } from "react";
import Card from "./Card";

const CardList = (props) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmRhM2Q3ZDAyNTE1MjQ0ZjY1YTg0Y2ZiNmNkNGM3MiIsInN1YiI6IjY1ZGEyMTcwNjA5NzUwMDE2NGE2M2U3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yP7LlKw2lGJUvmDQ3gHRrAZFs0yhSHGK0d3zPSkk24M",
    },
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results[0]);
        return response.results[0];
      })
      .catch((err) => console.error(err));

    return () => {
      console.log(data);
    };
  }, []);

  return (
    <div className="mt-10">
      <h1 className="ml-5 text-3xl font-bold text-gray-100 z-10">
        {props.genres}
      </h1>
      <div className="w-screen px-5 py-6 flex items-center justify-start gap-4 overflow-scroll card-list card-container z-10">
        {data.map((item) => (
          <Card title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
