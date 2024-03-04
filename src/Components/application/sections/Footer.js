import React from "react";
import Branding from "../../../Components/webpage/elements/Branding";

const Footer = () => {
  const pagesLinks = [
    "Audio Description",
    "Investor Relations",
    "Legal Notices",
    "Help Centre",
    "Jobs",
    "Cookie Preferences",
    "Gift Cards",
    "Terms of Use",
    "Corporate Information",
    "Media Centre",
    "Privacy",
    "Contact Us",
  ];
  return (
    <footer className="w-screen p-10 px-20">
      {/* //icons //PagesLinks //Branding */}
      <div className="grid grid-cols-4 grid-rows-4 gap-2 text-gray-400 text-xs">
        {pagesLinks.map((item) => (
          <p className="hover:underline">{item}</p>
        ))}
      </div>
      <Branding />
    </footer>
  );
};

export default Footer;
