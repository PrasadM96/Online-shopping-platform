import React from "react";

export default function CartItem(props) {
  const { _id, title, imageUrls, price, total, count } = props.item;
  const { increment, decrement, removeItem } = props;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={imageUrls}
          style={{ width: "5rem", height: "5rem" }}
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
            <span className="btn btn-black mx-1" onClick={() => decrement(_id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(_id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(_id)}>
          <i className="fas fa-trash>"></i>delete
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {total}</strong>
      </div>
    </div>
  );
}
