import React, { useEffect, useState, useContext } from "react";
import Header from "../Components/application/sections/Header";
import Navbar from "../Components/application/sections/Navbar";
import Content from "../Components/application/sections/Content";
import SearchedContent from "../Components/application/combinedElements/SearchedContent";
import { SearchItemsContext } from "../Context/SearchedItemsProvider";

const Browse = () => {
  // Layer 1 -> -10 (HeaderImage, Background Color Black)
  // Layer 2 ->  0  (HeaderContent, Movie List)
  // Layer 3 ->  10 (Navbar)

  const [data, setData] = useState({});

  // getting search Result;
  const searchContext = useContext(SearchItemsContext);
  const { searchedData } = searchContext;

  // Header Data
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
      fetch("https://api.themoviedb.org/3/movie/popular", options)
        .then((response) => response.json())
        .then((response) =>
          setData(
            response.results[
              Math.round(Math.random() * response.results.length)
            ]
          )
        )
        .catch((err) => console.error(err));

    fetchData();
  }, []);

  return (
    <div className="relative h-fit">
      <Navbar />
      {/* <SearchedContent /> */}
      {searchedData ? (
        <SearchedContent />
      ) : (
        <>
          {" "}
          <Header movieData={data} movieImg={data.backdrop_path} />
          <Content movieData={data} />
        </>
      )}
    </div>
  );
};

export default Browse;
