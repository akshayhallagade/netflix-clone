import React from "react";
import CardList from "./CardList";

const CardSection = () => {
  const sections = [
    { id: 1, genre: "Popular on Netflix", cardtype: "" },
    { id: 2, genre: "Horror Movies", cardtype: "" },
    { id: 3, genre: "Only on Netflix", cardtype: "Only on Netflix" },
    { id: 4, genre: "Trending Now", cardtype: "" },
    { id: 5, genre: "Comedies", cardtype: "" },
    { id: 6, genre: "Top 10 in US Today", cardtype: "List" },
    { id: 7, genre: "Action", cardtype: "" },
    { id: 8, genre: "TV-Sci-Fi And Horror", cardtype: "" },
    { id: 9, genre: "Mystery Movies", cardtype: "" },
    { id: 10, genre: "Animation", cardtype: "" },
    { id: 11, genre: "Drama", cardtype: "" },
  ];
  return (
    <div>
      {sections.map((item) => (
        <CardList genres={item.genre} />
      ))}
    </div>
  );
};

export default CardSection;
