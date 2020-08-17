import { Cart } from "./Cart";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EmptyCart from "./EmptyCart";

configure({ adapter: new Adapter() });

describe("<Cart/>", () => {
  let wrapper = shallow(
    <Cart
      ongetCartItems={() => {}}
      state={{ loading: false, error: null, cart: [] }}
    />
  );
  it("Should render  <EmptyCart/> when cart lenght = 0 and no Error", () => {
    expect(wrapper.find(EmptyCart)).toHaveLength(1);
  });
});
