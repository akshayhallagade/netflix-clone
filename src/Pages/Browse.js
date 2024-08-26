import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/application/sections/Header";
import Navbar from "../Components/application/sections/Navbar";
import Content from "../Components/application/sections/Content";
import SearchedContent from "../Components/application/combinedElements/SearchedContent";
import { SearchItemsContext } from "../Context/SearchedItemsProvider";
import { useCurrentUser } from "../hooks/query/user";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  // Layer 1 -> -10 (HeaderImage, Background Color Black)
  // Layer 2 ->  0  (HeaderContent, Movie List)
  // Layer 3 ->  10 (Navbar)

  const navigate = useNavigate();
  //getting current user data
  const { user, isLoading } = useCurrentUser();
  const [data, setData] = useState({});

  // getting search Result;
  const searchContext = useContext(SearchItemsContext);
  const { searchedData } = searchContext;

  // Header Data
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API}`,
    },
  };

  useEffect(() => {
    if (!user && !isLoading) navigate("/signin");
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
  }, [user, isLoading]);

  return (
    <div className="relative h-fit">
      <Navbar />
      {/* <SearchedContent /> */}
      {searchedData ? (
        <SearchedContent />
      ) : (
        <>
          <Header movieData={data} movieImg={data.backdrop_path} />
          <Content movieData={data} />
        </>
      )}
    </div>
  );
};

export default Browse;
