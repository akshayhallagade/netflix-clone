import React, { useState, useContext } from "react";
import HeaderPlayButton from "../elements/HeaderPlayButton";
import {
  Play,
  Add,
  Like,
  Down,
  Dot,
  MostLiked,
  Added,
  Cross,
} from "../../../utils/icons";
import { WatchListContext } from "../../../Context/WatchListProvider";
// import ItemDetailes from "./ItemDetailes";

const Card = (props) => {
  const [ShowDetailes, setShowDetailes] = useState(false);

  const [addCardToWatch, setAddCardToWatch] = useState(
    props.isWatchList ? false : true
  );

  const addToWatchListContext = useContext(WatchListContext);
  const { watchlistMovies, addNewWatchListMovies } = addToWatchListContext;
  const { watchlistTV, addNewWatchlistTV } = addToWatchListContext;

  const addNewItem = () => {
    const tempList =
      props.mediaType === "TV" ? [...watchlistTV] : [...watchlistMovies];
    tempList.push(props.id);
    props.mediaType === "TV"
      ? addNewWatchlistTV(tempList)
      : addNewWatchListMovies(tempList);
    setAddCardToWatch(false);
  };

  const removeItem = () => {
    const tempList =
      props.mediaType === "TV" ? [...watchlistTV] : [...watchlistMovies];
    const filterList = tempList.filter((item) => item !== props.id);
    props.mediaType === "TV"
      ? addNewWatchlistTV(filterList)
      : addNewWatchListMovies(filterList);
    setAddCardToWatch(true);
  };

  // watchlistMovies.includes(props.id) || watchlistTV.includes(props.id)
  //   ? setAddCardToWatch(true)
  //   : setAddCardToWatch(false);

  return (
    <>
      <div className="w-fit group relative z-0 hover:z-30 transition">
        <img
          className={`opacity-100 hover:opacity-0 ${
            props.isWatchList ? "w-fit" : "min-w-52"
          }`}
          src={props.img}
          alt="img"
        />

        <div className="absolute w-full pb-2 top-0 opacity-0 transition hover:duration-200 scale-0 group-hover:scale-125 hover:opacity-100 bg-gray-800 hover:rounded-md z-30 cardtemplate">
          <img
            className="w-fit group-hover:rounded-md"
            src={props.img}
            alt="img"
          />

          <div className="p-2">
            {props.isMostLiked > 1000 ? (
              <div className="flex gap-1 text-white font-bold py-1">
                <div className="bg-red-600 rounded-sm  flex justify-center items-center p-0.5">
                  <MostLiked size={13} color="white" />
                </div>
                Most Liked
              </div>
            ) : null}

            <p className="text-xl text-white font-medium py-1">{props.title}</p>
            <ul className="text-white overflow-hidden">
              <li className="float-left w-5 h-5 border-2 border-white hover:border-gray-400 rounded-full flex items-center justify-center bg-white hover:bg-gray-400 text-black">
                <Play size={15} />
              </li>
              <li
                className="float-left w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center ml-1"
                onClick={() => (addCardToWatch ? addNewItem() : removeItem())}
              >
                {addCardToWatch ? <Add size={15} /> : <Added size={15} />}
              </li>
              <li className="float-left w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center ml-1">
                <Like size={15} />
              </li>
              <li
                className="float-right w-5 h-5 border-2 border-gray-500 hover:border-white rounded-full flex items-center justify-center"
                onClick={() => setShowDetailes(!ShowDetailes)}
              >
                <Down size={15} />
              </li>
            </ul>

            <p className="text-green-500 text-xs font-bold py-1">
              {props.watch_rate}% Match
            </p>
            <div className="inline gap-2 text-white cardgenres">
              {props.genrenameslist.map((item) => {
                return (
                  <p className="float-left flex items-center">
                    <Dot />
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {ShowDetailes ? (
        <div className="fixed w-screen inset-0 h-screen bg-gray-800 bg-opacity-50 z-40 top-0 right-0 flex justify-center items-center overflow-y-scroll">
          <div className="w-4/6 relative bg-gray-900 text-white mt-36 rounded-2xl">
            <div
              className="absolute top-8 right-8 z-50 p-1 border-2 rounded-xl border-white"
              onClick={() => setShowDetailes(!ShowDetailes)}
            >
              <Cross size={20} color="white" />
            </div>
            <div className="relative h-fit rounded-xl">
              <img className="w-full rounded-xl" src={props.img} alt="img" />
              <div className="absolute top-0 w-full h-full detailesPanelOverlay">
                <div className="absolute bottom-10 left-10 text-white ">
                  <p className="text-3xl">{props.title}</p>
                  <div className="flex gap-4 mt-4">
                    <HeaderPlayButton />
                    <div className="rounded-full border-2 p-2 flex items-center justify-center">
                      <Like size={25} />
                    </div>
                    <div className="rounded-full border-2 p-2 flex items-center justify-center">
                      <Add size={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-8 px-8">
              <div className="w-4/6">
                <div className="flex gap-2">
                  <p className="text-green-400 font-bold">
                    {props.watch_rate}% Match
                  </p>
                  <p className="text-gray-400">{props.releaseYear}</p>
                  <p className="text-gray-400">2h 34m</p>
                </div>
                <p className="mt-4" style={{ fontSize: 14 }}>
                  Three friends on an adventurous road trip/bachelor party in
                  Spain learn some Iessons about themselves and each other that
                  will change them forever.
                </p>
              </div>
              <div className="w-2/6">
                <div className="flex justify-center items-center flex-col gap-2">
                  <p style={{ fontSize: 14.5 }}>
                    <span className="text-gray-500">Cast : </span>Hrithik
                    Roshan, Abhay Deol, Farhan Akhtar, more
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <span className="text-gray-500">Genres : </span>
                    Hindi-Langugae Movies, Bollywood Movies, Romantic Comedies
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <span className="text-gray-500">This movie is : </span>
                    Charming, witty, Feel-Good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
