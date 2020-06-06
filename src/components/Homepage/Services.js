import React from "react";
import { Container, Jumbotron, Col, Row, Image } from "react-bootstrap";
import hundred from "../../assets/hundred.png";
import dollar from "../../assets/dollar.png";
import phone from "../../assets/phone.png";
import product from "../../assets/product.png";
import star from "../../assets/star.png";

const services = (props) => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <h2 style={{ marginLeft: "2rem" }}>Why our site?</h2>
        </Row>
        <Row>
          <Col sm>
            <Image
              style={{ width: "10rem", height: "10rem", margin: "auto" }}
              src={dollar}
              rounded
            />

            <p>MoneyBack Guarantee</p>
          </Col>
          <Col sm>
            <Image
              style={{ width: "10rem", height: "10rem", margin: "auto" }}
              src={hundred}
              rounded
            />
            <p>Best Deals</p>
          </Col>
          <Col sm>
            <Image
              style={{ width: "10rem", height: "10rem", margin: "auto" }}
              src={star}
              rounded
            />
            <p>Top Rated Sellers</p>
          </Col>
          <Col sm>
            <Image
              style={{ width: "10rem", height: "10rem", margin: "auto" }}
              src={product}
              rounded
            />
            <p>Safe delivery</p>
          </Col>
          <Col sm>
            <Image
              style={{ width: "10rem", height: "10rem", margin: " 0 auto" }}
              src={phone}
              rounded
            />
            <p>Easy access</p>
          </Col>
          <Col sm>
            <Image
              style={{ width: "10rem", height: "10rem", margin: "0 auto" }}
              src={dollar}
              rounded
            />
            <p>image</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default services;
