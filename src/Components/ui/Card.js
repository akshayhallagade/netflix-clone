import React from "react";
import { Play, Add, CaretDown, Like } from "../../utils/icons";
import movie1 from "../../img/movieimg/movie2.jpg";
// import movie2 from "../../img/movieimg/movie2.jpg";
// import movie3 from "../../img/movieimg/movie3.jpg";
// import movie4 from "../../img/movieimg/movie4.jpg";
// import movie5 from "../../img/movieimg/movie5.jpg";
// import movie6 from "../../img/movieimg/movie6.jpg";
// import movie7 from "../../img/movieimg/movie7.jpg";
// import movie8 from "../../img/movieimg/movie8.jpg";
// import movie9 from "../../img/movieimg/movie9.jpg";
// import movie10 from "../../img/movieimg/movie10.jpg";

const Card = (props) => {
  const Rating = [
    {
      certification: "U",
      meaning:
        "Unrestricted Public Exhibition throughout India, suitable for all age groups. Films under this category should not upset children over 4. Such films may contain educational, social or family-oriented themes. Films under this category may also contain fantasy violence and/or mild bad language.",
      order: 1,
    },
    {
      certification: "U/A 7+",
      meaning: "Viewable for 7 and above years old.",
      order: 2,
    },
    {
      certification: "UA",
      meaning:
        "All ages admitted, but it is advised that children below 12 be accompanied by a parent as the theme or content may be considered intense or inappropriate for young children. Films under this category may contain mature themes, sexual references, mild sex scenes, violence with brief gory images and/or infrequent use of crude language.",
      order: 3,
    },
    {
      certification: "U/A 13+",
      meaning: "Viewable for 13 and above years old.",
      order: 4,
    },
    {
      certification: "U/A 16+",
      meaning: "Viewable for 16 and above years old.",
      order: 5,
    },
    {
      certification: "A",
      meaning:
        "Restricted to adult audiences (18 years or over). Nobody below the age of 18 may buy/rent an A-rated DVD, VHS, UMD or watch a film in the cinema with this rating. Films under this category may contain adult/disturbing themes, frequent crude language, brutal violence with blood and gore, strong sex scenes and/or scenes of drug abuse which is considered unsuitable for minors.",
      order: 6,
    },
    {
      certification: "S",
      meaning: "Restricted to any special class of persons.",
      order: 7,
    },
  ];

  return (
    <div className="card max-w-fit z-10 bg-gray-900">
      <img className="w-72" src={movie1} alt="img" />
      <div className="p-3 h-auto w-72 z-50">
        <h1 className="text-3xl text-white font-bold z-50">{props.title}</h1>
        <ul className="text-white overflow-hidden py-2">
          <li className="float-left">
            <div className="rounded-full w-10 h-10 p-1 text-center flex items-center justify-center border-2 border-gray-500 hover:border-white">
              <Play />
            </div>
          </li>
          <li className="float-left ml-3">
            <div className="rounded-full w-10 h-10 p-1 text-center flex items-center justify-center border-2 border-gray-500 hover:border-white ">
              <Add />
            </div>
          </li>
          <li className="float-left ml-3">
            <div className="rounded-full w-10 h-10 p-1 text-center flex items-center justify-center border-2 border-gray-500 hover:border-white ">
              <Like />
            </div>
          </li>
          <li className="float-right">
            <div className="rounded-full w-10 h-10 p-1 text-center flex items-center justify-center border-2 border-gray-500 hover:border-white">
              <CaretDown />
            </div>
          </li>
        </ul>
        <div className="text-green-600 font-bold text-2xl">98% Match</div>
        <ul className="flex text-white gap-2 text-base">
          <li>Comedy</li>
          <li>Romatice</li>
          <li>Captivating</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
