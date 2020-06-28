import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/fontawesome-free-solid";

export default function CartItem(props) {
  const { _id, title, imageUrls, price, count } = props.item;
  const { increment, decrement, removeItem } = props;
  // console.log(cartItemCount);

  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={imageUrls[0]}
          style={{ width: "6rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 ma-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {`$` + price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => decrement(_id, -1, props.count)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{props.count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => increment(_id, 1, props.count)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(_id, props.count)}>
        <FontAwesomeIcon icon="trash-alt" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {price * props.count}</strong>
      </div>
    </div>
  );
}
