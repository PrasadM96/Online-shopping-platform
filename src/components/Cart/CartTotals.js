import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "../PayPalButton";
import { Button } from "react-bootstrap";

export default function CartTotals(props) {
  const { cartSubTotal, cartTax } = props;
  const { clearCart, history } = props;
  console.log(cartTax);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartSubTotal + cartTax}</strong>
            </h5>
            {/* <PayPalButton
              // total={cartTotal}
              clearCart={clearCart}
              history={history}
            /> */}
            <Button
              style={{ margin: "2% 0" }}
              onClick={props.checkout}
              variant="primary"
            >
              Go to Checkout
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
