import React, { useEffect, useState} from "react";
import PropTypes from "prop-types";

const BirthdayCard = ({ messagesData, title }) => {
  const [activeIndex, updateActiveIndex] = useState(0);
  //this function causes the message to change every 5 seconds
  useEffect(() => {
    setTimeout(() => {
      //this makes the previous message inactive in order that only one message displays at a time
      messagesData[activeIndex].ref.current.classList.remove("active");
      //these lines allows the program to loop through the messages one by one and if the last message is active then to makes the first message active 
      let theValue = activeIndex === messagesData.length - 1 ? 0 : activeIndex + 1;
      updateActiveIndex(theValue);
      messagesData[theValue].ref.current.classList.add("active");
    }, 5000);
  }, [activeIndex, messagesData]);

  //this function call allows the app to only display one message at a time by giving only the first message the class of active
  const renderMessageItems = () => {
    return messagesData.map((element, index) => {
      element.ref = React.createRef();
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

  //this function detects if the message is a image or a text message and displays each message appropriately
  const renderMessageInner = (element) => {
    if (element.src)
      return <img src={element.src} className="fluid" alt=""></img>;
    return <div className="message">{element.message}</div>;
  };

  return (
    <div className="main-content my-3 mx-3">
      <div className="title">{title}</div>

      <div className="message-inner">{renderMessageItems()}</div>
    </div>
  );
};

BirthdayCard.propTypes = {
  messagesData: PropTypes.arrayOf(PropTypes.object).isRequired, 
  title: PropTypes.string.isRequired
};

export default BirthdayCard;
