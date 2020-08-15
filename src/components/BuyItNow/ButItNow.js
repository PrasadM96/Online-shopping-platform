import React from "react";
import { Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import * as BackendUrl from "../../Shared/BackendUrl";
import StripeCheckout from "react-stripe-checkout";

const buyItNow = (props) => {
  var totalPrice = +props.cartSubTotal + props.cartTax;
  var withoutShipping = props.cartSubTotal;
  var totalShippingFee = props.cartTax;
  var totalItemCount = +props.carrTotalCount;

  if (props.currentItems) {
    var price = +props.currentItems[0].price;
    var buyingQuantity = +props.buyingQuantity;
    totalItemCount = totalItemCount + buyingQuantity;
    withoutShipping = withoutShipping + price * buyingQuantity;
    totalShippingFee =
      totalShippingFee + props.currentItems[0].shippingFee * buyingQuantity;
    totalPrice = withoutShipping + totalShippingFee;
  }

  if (props.toggle) {
    withoutShipping = withoutShipping - props.cartSubTotal;
    totalPrice = totalPrice - props.cartSubTotal - props.cartTax;
    totalItemCount = totalItemCount - props.carrTotalCount;
  }

  console.log(props);

  var details = <div className="text-left">Update your shipping details</div>;
  if (
    props.lastName != null &&
    props.firstName != null &&
    props.country != null &&
    props.address != null &&
    props.teleNumber != null &&
    props.zipCode != null &&
    props.province != null
  ) {
    details = (
      <div>
        <div className="text-left">
          {props.firstName + " " + props.lastName}
        </div>
        <div className="text-left">{props.address}</div>
        <div className="text-left">{props.province}</div>
        <div className="text-left">{props.country}</div>
        <div className="text-left">{props.zipCode}</div>
        <div className="text-left">{props.teleNumber}</div>
      </div>
    );
  }

  console.log("buy it now");

  var cartitemArr = <div className="text-left ">No cart items</div>;

  var totaltems = [];

  if (props.cartItems.length > 0) {
    cartitemArr = props.cartItems.map((item, index) => {
      var temp = null,
        count = null;
      if (props.itemsCount.length >= 0) {
        temp = props.itemsCount.filter((element) => {
          return element.productId === item._id;
        });
        count = temp[0].quantity;
      }

      return (
        <div>
          <Row>
            <Col md="3">
              <Image
                style={{ width: "100%", height: "100%" }}
                src={BackendUrl.getBUrl() + item.imageUrls[0].toString()}
                alt="image"
                rounded
              />
            </Col>
            <Col md="7">
              <h4>{item.title}</h4>
              <div className="text-left font-weight-bold">
                Price {item.price} USD
              </div>
              <span>
                <p className="text-left d-inline">Quantity</p>
                <input
                  name="buyingQuantity"
                  style={{ marginLeft: "5%" }}
                  defaultValue={count}
                  min="1"
                  max={props.quantity}
                  type="Number"
                  onChange={props.buyingQuantityHandler}
                  disabled
                ></input>
              </span>
              <div className="text-left font-weight-bold">
                Shipping {item.shippingFee} USD
              </div>
              <div className="text-left ">{item.shippingArea}</div>
            </Col>
          </Row>
          <br></br>
        </div>
      );
    });
  }

  var currentItem = <div className="text-left ">No current items</div>;
  if (props.currentItems) {
    const item = props.currentItems[0];
    currentItem = (
      <Row>
        <Col md="3">
          <Image
            style={{ width: "100%", height: "100%" }}
            src={BackendUrl.getBUrl() + item.imageUrls[0]}
            rounded
          />
        </Col>
        <Col md="7">
          <h4>{item.title}</h4>
          <div className="text-left font-weight-bold">
            Price {item.price} USD
          </div>
          <span>
            <p className="text-left d-inline">Quantity</p>
            <input
              name="buyingQuantity"
              style={{ marginLeft: "5%" }}
              defaultValue={1}
              min="1"
              max={props.quantity}
              type="Number"
              onChange={props.buyingQuantityHandler}
            ></input>
          </span>
          <div className="text-left font-weight-bold">
            Shipping {item.shippingFee} USD
          </div>
          <div className="text-left ">{item.shippingArea}</div>
        </Col>
      </Row>
    );
  }

  var currentCard = null;
  if (props.currentItems) {
    currentCard = (
      <Card style={{ margin: " 5% 0%" }}>
        <Card.Header>Review current item and shipping</Card.Header>
        <Card.Body>{currentItem}</Card.Body>
      </Card>
    );
  }

  var cartCard = null;
  if (props.cartItems.length > 0) {
    cartCard = (
      <Card style={{ margin: " 5% 0%" }}>
        <Card.Header>
          Review cart items and shipping{" "}
          <div class="custom-control custom-switch float-right ">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              onChange={props.toggleHandler}
            />
            <label class="custom-control-label" for="customSwitch1">
              Toggle to remove
            </label>
          </div>
        </Card.Header>
        <Card.Body>{cartitemArr}</Card.Body>
      </Card>
    );
  }
  return (
    <div style={{ margin: "2% 2%" }}>
      <h3 style={{ margin: "2% " }}>Checkout</h3>
      <Container>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>Ship to</Card.Header>
              <Card.Body>
                {details}
                <br></br>
                <div
                  className="text-left  btn btn-outline-primary"
                  onClick={props.updateHandler}
                >
                  Update
                </div>
              </Card.Body>
            </Card>
            {currentCard}
            {cartCard}
          </Col>

          <Col md="4">
            <Card className="sticky-top">
              <Card.Body>
                <div class="float-left">items ({totalItemCount})</div>

                <div class="float-right">{withoutShipping}</div>
                <br></br>
                <div class="float-left">Shipping</div>

                <div class="float-right">{totalShippingFee}</div>
                <br></br>

                <hr></hr>
                <div class="float-left font-weight-bold mb-0">
                  <h4> Order Total</h4>
                </div>
                <div class="float-right ont-weight-bold">
                  <h4> ${totalPrice}</h4>
                </div>
                <br></br>
                <br></br>
                {/* <Button
                  style={{ width: "100%" }}
                  onClick={(totalPrice) => props.orderHandler(totalPrice)}
                >
                  Order Now
                </Button> */}
                <StripeCheckout
                  style={{ width: "100%" }}
                  amount={totalPrice * 100}
                  token={(token) => {
                    props.totalPriceHandler(totalPrice);
                    props.orderHandler(token);
                  }}
                  stripeKey="pk_test_51HGIUnB9kGdqbOgc3PVGu5R9mNBsX2trYRJNLqzsIdZugjg1xlgjb26G3Gbdkkh7CIGKEShjlo81dgXKWfRzFJ1f00tfRUYy4G"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default buyItNow;
