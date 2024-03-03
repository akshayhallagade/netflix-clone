import React from "react";
import Dropdown from "../combinedElements/Dropdown";
import SignUpElement from "../combinedElements/SignUpElement";

const QuestionsSection = () => {
  return (
    <section className="bg-black flex justify-center py-10 ">
      <div className="w-4/5 py-5 flex flex-col items-center justify-center">
        <h1 className="text-5xl py-2 font-extrabold text-white text-center">
          Frequently Asked Questions
        </h1>
        <Dropdown />
        <p className="text-white text-xl font-semibold">
          Ready to watch ? Enter your email to create or restart your
          membership.
        </p>
        <SignUpElement />
      </div>
    </section>
  );
};

export default QuestionsSection;
