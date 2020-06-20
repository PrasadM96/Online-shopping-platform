import React from "react";
import CartItem from "./CartItem";

export default function CartList(props) {
  const { cart, cartItemCount } = props;

  return (
    <div className="container-fluid">
      {cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            count={cartItemCount.items[index].quantity}
            increment={props.increment}
            decrement={props.decrement}
            removeItem={props.removeItem}
          />
        );
      })}
    </div>
  );
}
