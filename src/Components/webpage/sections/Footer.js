import React from "react";
import Translate from "../elements/Translate";

const Footer = () => {
  const pageslinks = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  return (
    <footer className="w-screen flex justify-center bg-black text-gray-400">
      <div className="w-4/5 py-10 flex flex-col">
        <p>
          Questions? Call <u>000-800-919-1694</u>
        </p>

        <div className="grid grid-rows-4 grid-cols-4">
          {pageslinks.map((item) => (
            <u className="mt-4">{item}</u>
          ))}
        </div>
        <div className="mt-5">
          <div className="w-fit">
            <Translate />
          </div>
        </div>
        <div className="mt-5">
          <p>Netflix India</p>
        </div>

        <div className="text-white w-full text-center flex flex-col justify-center items-center">
          <p>Created By :</p>
          <p className="text-xl hover:text-red-500 duration-200 delay-200">
            Akshay Hallagade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
