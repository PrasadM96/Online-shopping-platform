import React from "react";
import { Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import * as BackendUrl from "../../Shared/BackendUrl";

const buyItNow = (props) => {
  var totalPrice = props.cartTotal;
  console.log(props.cartItems);

  if (props.currentItems) {
    var price = +props.currentItems[0].price;
    var buyingQuantity = +props.buyingQuantity;
    var withoutShipping = price * buyingQuantity;
    var totalShippingFee = props.currentItems[0].shippingFee;
    totalPrice = totalPrice + withoutShipping + totalShippingFee;
  }
  if (props.toggle) {
    totalPrice = totalPrice - props.cartTotal;
  }

  var details = <div className="text-left">Update your shipping details</div>;
  if (
    props.name != null &&
    props.country != null &&
    props.address != null &&
    props.teleNumber != null
  ) {
    details = (
      <div>
        <div className="text-left">{props.name}</div>
        <div className="text-left">{props.address}</div>
        <div className="text-left">{props.country}</div>
        <div className="text-left">{props.teleNumber}</div>
      </div>
    );
  }

  console.log("buy it noe", props.cartItems);

  var cartitemArr = <div className="text-left ">No cart items</div>;
  if (props.cartItems.length > 0) {
    cartitemArr = props.cartItems.map((item, index) => {
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
                  defaultValue={1}
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
                <div class="float-left">items ({props.buyingQuantity})</div>

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
                  <h4> {totalPrice}</h4>
                </div>
                <br></br>
                <br></br>
                <Button style={{ width: "100%" }} onClick={props.orderHandler}>
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default buyItNow;
