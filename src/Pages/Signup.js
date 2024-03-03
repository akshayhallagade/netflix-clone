import React from "react";
import Navbar from "../Components/webpage/sections/Navbar";
import Footer from "../Components/webpage/sections/Footer";
import Breakers from "../Components/webpage/elements/Breakers";
import SectionComponent from "../Components/webpage/sections/SectionComponent";
import SignUpElement from "../Components/webpage/combinedElements/SignUpElement";
import QuestionsSection from "../Components/webpage/sections/QuestionsSection";
const Signup = () => {
  return (
    <>
      {/* /* // Section1  */}
      <header className="signup w-screen py-56 flex justify-center items-center ">
        <Navbar />
        <div className="w-4/5 h-full flex items-center justify-center  flex-col text-white gap-6">
          <h1 className="text-5xl font-extrabold text-center">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-2xl font-semibold">
            Watch anywhere. Cancel anytime
          </p>
          <p className="text-xl font-semibold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <SignUpElement />
        </div>
      </header>
      <Breakers />
      {/* // Section2, Section3 Section4  :: Because this sections are similar*/}
      <SectionComponent />
      {/* // Section 5 */}
      <QuestionsSection />
      <Breakers />
      <Footer />
    </>
  );
};

export default Signup;
