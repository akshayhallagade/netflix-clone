import React from "react";
import GenreList from "../combinedElements/GenreList";

const Collection = () => {
  const genres = [
    { id: 1, name: "Sci-fi" },
    { id: 2, name: "Popular" },
    { id: 3, name: "Horror" },
    { id: 4, name: "Trending" },
    { id: 5, name: "Comedy" },
    { id: 6, name: "Action" },
  ];

  return (
    <div className="w-screen z-0">
      {genres.map((item) => (
        <GenreList genre={item.name} />
      ))}
    </div>
  );
};

export default Collection;
