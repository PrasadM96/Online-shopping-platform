import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import CartTotals from "./CartTotals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

configure({ adapter: new Adapter() });

const clearSpy = jest.fn();
const clear = clearSpy;

const wrapper = mount(
  <Provider store={store}>
    <BrowserRouter>
      <CartTotals clear={clearSpy} />
    </BrowserRouter>
  </Provider>
);
let button;
describe("CartTotals", () => {
  beforeEach(() => {
    button = wrapper.find('button[type="button"]');
  });
  it("should call clearCart", () => {
    expect(clearSpy).not.toHaveBeenCalled();
  });
});
