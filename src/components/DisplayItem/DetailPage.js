import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";

const detailPage = (props) => {
  var itemArr = [];
  if (props.imageUrls) {
    itemArr = props.imageUrls;
  }
  var carouselItems = null;
  carouselItems = itemArr.map((image, index) => {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={image.toString()} alt="Image" />
      </Carousel.Item>
    );
  });

  return (
    <Card style={{ margin: "5% 5%" }}>
      <Card.Body>
        <Container>
          <Row>
            <Col style={{ height: "60%" }} sm={true}>
              <div style={{ border: "1px solid #ccc", height: "100%" }}>
                <Carousel>{carouselItems}</Carousel>
              </div>
            </Col>
            <Col sm={true}>
              <h3>{props.title}</h3>
              <hr></hr>
              <h5
                style={{
                  fontSize: "15px",
                  color: "#8e8e8e",
                  margin: "0.5rem 0",
                }}
              >
                Condition: {props.condition}
              </h5>
              <h5
                style={{
                  fontSize: "15px",
                  color: "#8e8e8e",
                  margin: "0.5rem 0",
                }}
              >
                Quantity: {props.quantity}
              </h5>

              <Row
                style={{
                  border: "1px solid #ccc",
                  background: "#eee",
                }}
              >
                <Col sm={true}>
                  <h5>Price: {props.price}USD</h5>
                </Col>
                <Col sm={true}>
                  <Button
                    onClick={props.buyitNowHandler}
                    style={{ width: "100%" }}
                    variant="primary"
                  >
                    Buy it now
                  </Button>
                  <br></br>
                  <Button
                    onClick={props.addtoCartHandler}
                    style={{ marginTop: "5%", width: "100%" }}
                    variant="primary"
                  >
                    Add to cart
                  </Button>
                </Col>
              </Row>
              <h5
                style={{
                  fontSize: "15px",
                  color: "#8e8e8e",
                  margin: "0.5rem 0",
                }}
              >
                Shipping: {props.shippingFee} USD
              </h5>
              <h5
                style={{
                  fontSize: "15px",
                  color: "#8e8e8e",
                  margin: "0.5rem 0",
                }}
              >
                Seller : {props.email}
              </h5>
            </Col>
          </Row>

          <Row
            style={{
              border: "1px solid #ccc",
              padding: "2%",
            }}
          >
            <div>
              <h5>Description</h5>

              <h5
                style={{
                  fontSize: "15px",
                  color: "#8e8e8e",
                  margin: "0 5%",
                }}
              >
                {props.description}
              </h5>
            </div>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default detailPage;
