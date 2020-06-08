import React from "react";
import CartItem from "./CartItem";

export default function CartList(props) {
  const { cart } = props;
  return (
    <div className="container-fluid">
      {cart.map((item,index) => {
        return (
          <CartItem
            key={index}
            item={item}
            increment={props.increment}
            decrement={props.decrement}
            removeItem={props.removeItem}
            
          />
        );
      })}
    </div>
  );
}
