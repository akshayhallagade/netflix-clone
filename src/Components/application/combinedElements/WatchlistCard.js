import React, { useState, useEffect } from "react";
// import {
//   Play,
//   Add,
//   Like,
//   Down,
//   Dot,
//   MostLiked,
//   //   Added,
// } from "../../../utils/icons";
import Card from "./Card";

const WatchlistCard = (props) => {
  const [data, addData] = useState({});

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
      fetch(
        `https://api.themoviedb.org/3/${props.mediaType}/${props.id}?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => addData(response))
        .catch((err) => console.error(err));
    fetchData();
  }, []);

  console.log(data);

  return (
    // <div className="w-fit group relative z-0 hover:z-30 transition">
    //   <img
    //     className="w-52 opacity-100 hover:opacity-0"
    //     src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
    //     alt="img"
    //   />

    //   <div className="absolute w-full pb-2 top-0 opacity-0 transition hover:duration-200 scale-0 group-hover:scale-125 hover:opacity-100 bg-gray-800 hover:rounded-md z-30 cardtemplate">
    //     <img
    //       className="w-fit group-hover:rounded-md"
    //       src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
    //       alt="img"
    //     />

    //     <div className="p-2">
    //       {data.vote_count > 1000 ? (
    //         <div className="flex gap-1 text-white font-bold py-1">
    //           <div className="bg-red-600 rounded-sm  flex justify-center items-center p-0.5">
    //             <MostLiked size={13} color="white" />
    //           </div>
    //           Most Liked
    //         </div>
    //       ) : null}

    //       <p className="text-xl text-white font-medium py-1">{data.title}</p>
    //       <ul className="text-white overflow-hidden">
    //         <li className="float-left w-5 h-5 border-2 border-white hover:border-gray-400 rounded-full flex items-center justify-center bg-white hover:bg-gray-400 text-black">
    //           <Play size={15} />
    //         </li>
    //         <li className="float-left w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center ml-1">
    //           <Add size={15} />
    //         </li>
    //         <li className="float-left w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center ml-1">
    //           <Like size={15} />
    //         </li>
    //         <li className="float-right w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center">
    //           <Down size={15} />
    //         </li>
    //       </ul>

    //       <p className="text-green-500 text-xs font-bold py-1">
    //         {data.vote_average}% Match
    //       </p>
    //       <div className="inline gap-2 text-white cardgenres">
    //         {data.genres ? (
    //           data.genres.map((item, index) => {
    //             return (
    //               <p key={index} className="float-left flex items-center">
    //                 <Dot />
    //                 {item.name}
    //               </p>
    //             );
    //           })
    //         ) : (
    //           <></>
    //         )}
    //         {console.log(data.genres)}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Card
      id={data.id}
      title={data.title}
      img={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
      genrenameslist={
        data.genres
          ? data.genres.map((genre) => {
              return genre.name;
            })
          : []
      }
      watch_rate={Math.round(data.vote_average * 10)}
      isMostLiked={data.vote_count}
      mediaType={"movie"}
      isWatchList={true}
    />
  );
};

export default WatchlistCard;
