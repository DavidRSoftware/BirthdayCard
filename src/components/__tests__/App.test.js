import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import BirthdayCard from "../BirthdayCard";

it("shows a birthday card", () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(BirthdayCard).length).toEqual(1);
})