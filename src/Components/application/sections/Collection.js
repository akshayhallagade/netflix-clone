import React from "react";
import GenreList from "../combinedElements/GenreList";

const Collection = () => {
  const genres = [
    {
      id: 2,
      name: "Popular",
      site: "https://api.themoviedb.org/3/movie/popular",
      special: false,
      category: false,
      movie_id: 0,
    },
    {
      id: 1,
      name: "Action",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=28",
      special: false,
      category: true,
      movie_id: 28,
    },
    {
      id: 3,
      name: "Top 10 Movies in India Today",
      site: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=in",
      special: true,
      category: false,
      movie_id: 0,
    },
    {
      id: 4,
      name: "Thriller",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=53",
      special: false,
      category: true,
      movie_id: 53,
    },
    {
      id: 5,
      name: "top_rated",
      site: "https://api.themoviedb.org/3/movie/top_rated",
      special: false,
      category: false,
      movie_id: 0,
    },
    {
      id: 6,
      name: "Trending",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=80",
      special: false,
      category: false,
      movie_id: 0,
    },

    {
      id: 8,
      name: "Romance",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=10749",
      special: false,
      category: true,
      movie_id: 10749,
    },
    {
      id: 9,
      name: "Mystery",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=9648",
      special: false,
      category: true,
      movie_id: 9648,
    },
    {
      id: 10,
      name: "Music",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=10402",
      special: false,
      category: true,
      movie_id: 10402,
    },
    {
      id: 11,
      name: "Horror",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=27",
      special: false,
      category: true,
      movie_id: 27,
    },
    {
      id: 7,
      name: "Top 10 TV Shows In India",
      site: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      special: false,
      category: false,
      movie_id: 0,
    },
    {
      id: 12,
      name: "History",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=36",
      special: false,
      category: true,
      movie_id: 36,
    },
    {
      id: 13,
      name: "Fantasy",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=14",
      special: false,
      category: true,
      movie_id: 14,
    },
    {
      id: 14,
      name: "Family",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=10751",
      special: false,
      category: true,
      movie_id: 10751,
    },
    {
      id: 15,
      name: "Drama",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=18",
      special: false,
      category: true,
      movie_id: 18,
    },
    {
      id: 17,
      name: "Crime",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=80",
      special: false,
      category: true,
      movie_id: 80,
    },
    {
      id: 18,
      name: "Comedy",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=35",
      special: false,
      category: true,
      movie_id: 35,
    },
    {
      id: 19,
      name: "upcoming",
      site: "https://api.themoviedb.org/3/movie/upcoming",
      special: false,
      category: false,
      movie_id: 0,
    },
    {
      id: 20,
      name: "Animation",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=16",
      special: false,
      category: true,
      movie_id: 16,
    },
    {
      id: 21,
      name: "Adventure",
      site: "https://api.themoviedb.org/3/discover/movie?with_genres=12",
      special: false,
      category: true,
      movie_id: 12,
    },
  ];

  return (
    <div className="w-screen z-0">
      {genres.map((item) => (
        <GenreList genre={item.name} site={item.site} />
      ))}
    </div>
  );
};

export default Collection;
