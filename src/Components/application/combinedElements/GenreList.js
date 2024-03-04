import React from "react";
import Card from "./Card";
import movie1 from "../../../img/movieimg/movie1.jpg";
import movie2 from "../../../img/movieimg/movie2.jpg";
import movie3 from "../../../img/movieimg/movie3.jpg";
import movie4 from "../../../img/movieimg/movie4.jpg";
import movie5 from "../../../img/movieimg/movie5.jpg";
import movie6 from "../../../img/movieimg/movie6.jpg";
import movie7 from "../../../img/movieimg/movie7.jpg";

const GenreList = (props) => {
  const cardList = [
    { id: 1, title: "", img: movie1 },
    { id: 2, title: "", img: movie2 },
    { id: 3, title: "", img: movie3 },
    { id: 4, title: "", img: movie4 },
    { id: 5, title: "", img: movie5 },
    { id: 6, title: "", img: movie6 },
    { id: 7, title: "", img: movie7 },
    { id: 7, title: "", img: movie7 },
    { id: 7, title: "", img: movie7 },
  ];

  return (
    <div className="py-2 w-screen mt-5">
      <h1 className="text-white">{props.genre}</h1>
      <div className=" grid  grid-flow-col gap-2 z-0 mt-2">
        {cardList.map((item) => (
          <Card key={item.id} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
