import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import birthdayPicture from "./birthday.jpg";
import balloons from "./balloons.jpg";

function App() {
  const message1 = useRef();
  const message2 = useRef();
  const message3 = useRef();
  const message4 = useRef();
  const message5 = useRef();
  const [activeIndex, updateActiveIndex] = useState(0);
  useEffect(() => {
    const arrayOfRefs = [message1, message2, message3, message4, message5];

    setTimeout(() => {
      arrayOfRefs[activeIndex].current.classList.remove("active");
      let theValue = activeIndex === 4 ? 0 : activeIndex + 1;
      updateActiveIndex(theValue);
      arrayOfRefs[theValue].current.classList.add("active");
    }, 5000);
  }, [activeIndex]);

  return (
    <div className="main-content my-3 mx-3">
      <div className="title">Happy Birthday Mom!</div>

      <div className="message-inner">
        <div className="message-item active" ref={message1}>
          <img src={birthdayPicture} className="fluid" alt=""></img>
        </div>
        <div className="message-item" ref={message2}>
          <div className="message">
            <span className="red">&#9829;</span> I love you{" "}
            <span className="red">&#9829;</span>
          </div>
        </div>
        <div className="message-item" ref={message3}>
          <div className="message">You are a amazing mom</div>
        </div>
        <div className="message-item" ref={message4}>
          <div className="message">Thank you for everything</div>
        </div>
        <div className="message-item" ref={message5}>
          <img src={balloons} className="fluid" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
