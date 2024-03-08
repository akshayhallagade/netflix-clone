import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useContext } from "react";
import { SearchItemsContext } from "../../../Context/SearchedItemsProvider";
import Footer from "../sections/Footer";

const SearchedContent = (props) => {
  const showSearchedItems = useContext(SearchItemsContext);
  const [cardData, setCardData] = useState([]);
  const { searchedData } = showSearchedItems;

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
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
  };
  // Fetch the data for Every Card

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmRhM2Q3ZDAyNTE1MjQ0ZjY1YTg0Y2ZiNmNkNGM3MiIsInN1YiI6IjY1ZGEyMTcwNjA5NzUwMDE2NGE2M2U3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yP7LlKw2lGJUvmDQ3gHRrAZFs0yhSHGK0d3zPSkk24M",
      },
    };

    const fetchData = () =>
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchedData}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) =>
          setCardData(
            response.results.filter(
              (item) =>
                item.media_type !== "person" && item.backdrop_path != null
            )
          )
        )
        .catch((err) => console.error(err));

    fetchData();
  }, [searchedData]);

  return (
    <>
      <div className="w-screen h-fit grid grid-cols-5 gap-2 grid-flow-row p-5  mt-14">
        {console.log(searchedData)}
        {console.log(cardData)}
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              id={index}
              title={item.media_type === "tv" ? item.name : item.title}
              img={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              genrenameslist={item.genre_ids.map((genre) => {
                return genrenames[genre];
              })}
              watch_rate={Math.round(item.vote_average * 10)}
              isMostLiked={item.vote_count}
              isWatchList={true}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default SearchedContent;
