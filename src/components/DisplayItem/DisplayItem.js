import React from "react";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const displayItem = (props) => {
  let url = "/category/" + props.path + "/" + props.id;
  console.log(props.image);
  return (
    <Card style={{ margin: "2% 5%" }}>
      <Card.Body>
        <Container>
          <Row>
            <Col
              style={{
                textAlign: "-webkit-center",
              }}
              md={4}
            >
              <Image
                style={{ height: "200px", width: "auto" }}
                src={props.image}
                rounded
              />
            </Col>
            <Col md={6}>
              <NavLink to={url}>
                <h3 style={{ margin: "0 5%" }}>{props.title}</h3>
              </NavLink>
              <h5
                style={{
                  fontSize: "15px",
                  color: "#8e8e8e",
                  margin: "0 5%",
                }}
              >
                {props.condition}
              </h5>
              <h4 style={{ margin: "2% 5%" }}>{props.price} USD</h4>
              <h5
                style={{
                  fontSize: "15px",
                  color: "#8e8e8e",
                  margin: "0 5%",
                }}
              >
                {props.shippingFee} USD Shipping
              </h5>
              <h5 style={{ fontSize: "18px", margin: "0 5%" }}>
                {props.itemCount} Items
              </h5>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default displayItem;
