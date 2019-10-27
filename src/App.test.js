import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("my first test", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
  });
});
