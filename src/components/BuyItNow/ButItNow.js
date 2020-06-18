import React from "react";
import { Button, Container, Row, Col, Card, Image } from "react-bootstrap";

const buyItNow = (props) => {
  var price = +props.price;
  var buyingQuantity = +props.buyingQuantity;
  var totalPrice = price * buyingQuantity;
  console.log(totalPrice);

  var details = <div className="text-left">Update your shipping details</div>;
  if (
    props.name != null &&
    props.country != null &&
    props.address != null &&
    props.teleNumber != null
  ) {
    console.log(props.name);

    details = (
      <div>
        <div className="text-left">{props.name}</div>
        <div className="text-left">{props.address}</div>
        <div className="text-left">{props.country}</div>
        <div className="text-left">{props.teleNumber}</div>
      </div>
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
            <Card style={{ margin: " 5% 0%" }}>
              <Card.Header>Review items and shipping</Card.Header>
              <Card.Body>
                <Row>
                  <Col md="3">
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      src="https://image.freepik.com/free-psd/two-smartphones-mockups_58466-10341.jpg"
                      rounded
                    />
                  </Col>
                  <Col md="7">
                    <h4>{props.title}</h4>
                    <div className="text-left font-weight-bold">
                      Price {props.price} USD
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
                      Shipping {props.shippingFee} USD
                    </div>
                    <div className="text-left ">{props.shippingArea}</div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Body>
                <div class="float-left">items ({props.buyingQuantity})</div>

                <div class="float-right">{totalPrice}</div>
                <br></br>
                <div class="float-left">Shipping</div>

                <div class="float-right">{props.shippingFee}</div>
                <br></br>

                <hr></hr>
                <div class="float-left font-weight-bold mb-0">
                  <h4> Order Total</h4>
                </div>
                <div class="float-right ont-weight-bold">
                  <h4> {totalPrice + parseFloat(props.shippingFee)}</h4>
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
