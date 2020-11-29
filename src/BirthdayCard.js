import React, { useEffect, useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";

const BirthdayCard = ({ messagesData }) => {
  const [activeIndex, updateActiveIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      messagesData[activeIndex].ref.current.classList.remove("active");
      let theValue = activeIndex === messagesData.length - 1 ? 0 : activeIndex + 1;
      updateActiveIndex(theValue);
      messagesData[theValue].ref.current.classList.add("active");
    }, 5000);
  }, [activeIndex, messagesData]);

  const renderMessageItems = () => {
    return messagesData.map((element, index) => {
      if (index === 0)
        return (
          <div className="message-item active" ref={element.ref} key={index}>
            {renderMessageInner(element)}
          </div>
        );
      else
        return (
          <div className="message-item" ref={element.ref} key={index}>
            {renderMessageInner(element)}
          </div>
        );
    });
  };

  const renderMessageInner = (element) => {
    if (element.src)
      return <img src={element.src} className="fluid" alt=""></img>;
    return <div className="message">{element.message}</div>;
  };

  return (
    <div className="main-content my-3 mx-3">
      <div className="title">Happy Birthday Mom!</div>

      <div className="message-inner">{renderMessageItems()}</div>
    </div>
  );
};

BirthdayCard.propTypes = {
  messagesData: PropTypes.arrayOf(PropTypes.object).isRequired 
};

export default BirthdayCard;
