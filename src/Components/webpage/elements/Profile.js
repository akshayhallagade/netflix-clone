import React from "react";

const Profile = (props) => {
  return (
    <div className="p-5 ">
      <a href="/browse">
        <img
          src={props.image}
          className="w-40 h-40 border-8 border-black hover:border-8 hover:border-white rounded-md "
          alt="img"
        />
      </a>
      <p className="text-gray-400 text-center text-base  py-2">{props.name}</p>
    </div>
  );
};

export default Profile;
