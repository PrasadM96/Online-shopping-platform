import React from "react";
import {
  Card,
  Button,
  Image,
  Container,
  Col,
  Row,
  Spinner,
} from "react-bootstrap";

const myItem = (props) => {
  return (
    <Card style={{ margin: "2% 5%" }}>
      <Card.Body>
        <Container>
          <Row>
            <Col sm={4}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={props.image}
                rounded
              />
            </Col>
            <Col sm={8}>
              <h4>{props.title}</h4>
              <h5 style={{ color: "#8e8e8e" }}>${props.price}</h5>
              <h5 style={{ fontSize: "15px", color: "#8e8e8e" }}>
                ${props.shippingFee} Shipping
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                onClick={() => props.deleteHandler(props.index)}
                style={{ right: 0, bottom: 0, position: "absolute" }}
                variant="primary"
              >
                Delete Item
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default myItem;
