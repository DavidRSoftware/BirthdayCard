import React from "react";
import { shallow } from "enzyme";
import BirthdayCard from "../BirthdayCard";

let wrapped;

beforeEach(() => {
  const messages = [
    {
      message: "Message 1",
    },
    {
      message: "Message 2",
    },
  ];
  const title = "Birthday Card";
  wrapped = shallow(<BirthdayCard messagesData={messages} title={title} />);
});

it("creates one message item per message object", () => {
  expect(wrapped.find(".message-item").length).toEqual(2);
});

it("shows the text for each comment", ()=>{
  expect(wrapped.render().text()).toContain("Message 1");
  expect(wrapped.render().text()).toContain("Message 2");
})
