import React from "react";
import profile1 from "../img/profiles/profile1.png";
import profile2 from "../img/profiles/profile2.png";
import profile3 from "../img/profiles/profile3.png";
import profile4 from "../img/profiles/profile4.png";
import profile5 from "../img/profiles/profile5.png";
import ProfileButton from "../Components/webpage/elements/ProfileButton";
import Profile from "../Components/webpage/elements/Profile";

const Profiles = () => {
  const profileData = [
    { name: "Akshay Hallagde", image: profile1 },
    { name: "P", image: profile2 },
    { name: "R", image: profile3 },
    { name: "Aniket", image: profile4 },
    { name: "Children", image: profile5 },
  ];

  return (
    <>
      <div className="w-screen h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center">
        {/* // Heading */}
        <h1 className="text-6xl text-white font-semibold">Who's watching?</h1>
        {/* // Profiles */}
        <div className="flex p-5">
          {profileData.map((item) => (
            <Profile name={item.name} image={item.image} />
          ))}
        </div>
        {/* // ManageButton */}
        <ProfileButton />
      </div>
    </>
  );
};

export default Profiles;
