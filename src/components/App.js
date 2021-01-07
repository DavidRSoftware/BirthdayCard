import React from "react";
import BirthdayCard from "./BirthdayCard";
import birthdayPicture from "./birthday.jpg";
import balloonPicture from "./balloons.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
//this setup of having the messages passed in as props allow the user to customize or add to the messages sent to the birthday card in a easy manner
const App = () => {
  const messageTwo = (
    <>
      <span className="red">&#9829;</span>I love you{" "}
      <span className="red">&#9829;</span>
    </>
  );

  const messagesData = [
    {
      src: birthdayPicture,
    },
    {
      message: messageTwo,
    },
    {
      message: "You are an amazing mom",
    },
    {
      message: "Thank you for everything",
    },
    {
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
