import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount } from "enzyme";
import Logout from "./Logout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

configure({ adapter: new Adapter() });

const wrapper = mount(
  <Provider store={store}>
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  </Provider>
);
let container;

describe("Logout", () => {
  beforeEach(() => {
    container = wrapper.find("div");
  });

  it("should have a <div>", () => {
    expect(container).toHaveLength(2);
  });
});
