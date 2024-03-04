import React from "react";
import Footer from "../Components/webpage/sections/Footer";
import Breakers from "../Components/webpage/elements/Breakers";
import SectionComponent from "../Components/webpage/sections/SectionComponent";
import QuestionsSection from "../Components/webpage/sections/QuestionsSection";
import SignUpHeader from "../Components/webpage/sections/SignUpHeader";
const Signup = () => {
  return (
    <>
      {/* /* // Section1  */}
      <SignUpHeader />
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
