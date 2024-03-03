import React, { useState } from "react";

const SingleDropdown = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const answers = props.ans.split("----");

  return (
    <>
      <div
        className="w-full mt-4 text-white bg-slate-800 text-2xl relative cursor-pointer"
        onClick={
          openDropdown
            ? () => setOpenDropdown(false)
            : () => setOpenDropdown(true)
        }
      >
        <h1 className="p-6">{props.que}</h1>
        <div className=" absolute right-5 top-5 w-fit text-5xl font-extralight text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-white w-10 h-10 ${
              openDropdown ? "rotate-45" : "rotate-0"
            }`}
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </div>
      </div>
      <div
        className={`w-full flex flex-col gap-6 text-2xl text-white bg-slate-800 p-6 border-t-2 border-black ${
          openDropdown ? "flex" : "hidden"
        }`}
      >
        {answers.map((items) => (
          <p>{items}</p>
        ))}
      </div>
    </>
  );
};

const Dropdown = () => {
  const questionsData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices ----You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.----You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.---- Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
  ];

  return (
    <div className="w-full p-6">
      {questionsData.map((item) => {
        return <SingleDropdown que={item.question} ans={item.answer} />;
      })}
    </div>
  );
};

export default Dropdown;
