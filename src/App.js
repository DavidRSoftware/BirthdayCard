import React, { useRef } from "react";
import BirthdayCard from "./BirthdayCard";
import birthdayPicture from "./birthday.jpg";
import balloonPicture from "./balloons.jpg";

const App = () => {
  const messageTwo = (
    <>
      <span className="red">&#9829;</span>I love you{" "}
      <span className="red">&#9829;</span>
    </>
  );

  const messagesData = [
    {
      ref: useRef(),
      src: birthdayPicture,
    },
    {
      ref: useRef(),
      message: messageTwo,
    },
    {
      ref: useRef(),
      message: "You are an amazing mom",
    },
    {
      ref: useRef(),
      message: "Thank you for everything",
    },
    {
      ref: useRef(),
      src: balloonPicture,
    },
  ];

  return (
    <div>
      <BirthdayCard messagesData={messagesData}></BirthdayCard>
    </div>
  );
};

export default App;
