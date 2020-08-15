import React from "react";
import * as BackendUrl from "../../Shared/BackendUrl";

export default function CartItem(props) {
  const { _id, title, imageUrls, price } = props.item;
  const { increment, decrement, removeItem } = props;
  // console.log(cartItemCount);

  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={BackendUrl.getBUrl() + imageUrls[0]}
          style={{ width: "5rem", height: "5rem", margin: "auto" }}
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
              onClick={() => decrement(_id, -1)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{props.count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => increment(_id, 1)}
            >
              +
            </span>
            {props.updateCartError ? (
              <p style={{ color: "red", fontSize: "15px" }}>
                Error! You can't update!
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => props.deleteSingleItem(_id, props.count)}
        >
          <i className="fas fa-trash>"></i>
          {props.deleteSingleItemLoading ? "deleting..." : "delete"}
        </div>
        {props.deleteSingleItemError ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            Error! Try Again Later!
          </p>
        ) : null}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {price * props.count}</strong>
      </div>
    </div>
  );
}
