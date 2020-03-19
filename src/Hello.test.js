import React from "react";
import { shallow } from "enzyme";
import Hello from "./Hello";

describe("Hello", () => {
  const wrapper = shallow(<Hello />);
  const wrapperWithProps = shallow(<Hello name="Carlos" />);

  it("should render Home Component", () => {
    expect(wrapper.length).toBe(1);
  });
  it("should render by default Hello World", () => {
    expect(wrapper.text()).toBe("Hello World");
  });
  it("shold render the name prop", () => {
    expect(wrapperWithProps.text()).toBe("Hello Carlos");
    ("");
  });
});
