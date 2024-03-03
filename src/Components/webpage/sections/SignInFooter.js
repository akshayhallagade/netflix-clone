import React from "react";
import Translate from "../elements/Translate";
import Branding from "../elements/Branding";

const SignUpFooter = () => {
  const pageslinks = [
    "FAQ",
    "Help Centre",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
  ];
  return (
    <footer className="w-screen flex justify-center bg-black bg-opacity-60 text-gray-400">
      <div className="w-4/5 py-10 flex flex-col">
        <p className="text-sm">
          Questions? Call <u>000-800-919-1694</u>
        </p>

        <div className="grid grid-rows-2 grid-cols-4">
          {pageslinks.map((item) => (
            <u className="mt-4 text-xs">{item}</u>
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
        <Branding />
      </div>
    </footer>
  );
};

export default SignUpFooter;
