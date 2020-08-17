import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import Cart from "./Cart";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

configure({ adapter: new Adapter() });

const clearSpy = jest.fn();
const clear = clearSpy;

const wrapper = mount(
  <Provider store={store}>
    <BrowserRouter>
      <Cart clear={clearSpy} />
    </BrowserRouter>
  </Provider>
);
let container, Title, TitleProps, CartTotals, CartTotalsProps;
describe("Cart", () => {
  beforeEach(() => {
    container = wrapper.find("div");
    Title = wrapper.find("Title");
    TitleProps = Title.props();
    CartTotals = wrapper.find("CartTotals");
    CartTotalsProps = Title.props();
  });
  it("should have a <div>", () => {
    expect(wrapper.find("div")).toHaveLength(5);
  });
  it("should have name as prop", () => {
    expect(TitleProps.name).toEqual("your");
  });
});
