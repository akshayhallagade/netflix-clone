import React from "react";
import Header from "../Components/application/sections/Header";
import Navbar from "../Components/application/sections/Navbar";
import Content from "../Components/application/sections/Content";
// import Collection from "../Components/application/sections/Collection";

const Browse = () => {
  // Layer 1 -> -10 (HeaderImage, Background Color Black)
  // Layer 2 ->  0  (HeaderContent, Movie List)
  // Layer 3 ->  10 (Navbar)

  return (
    <div className="relative">
      <Navbar />
      <Header />
      <Content />
    </div>
  );
};

export default Browse;
