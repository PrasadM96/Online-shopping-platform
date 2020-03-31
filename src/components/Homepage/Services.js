import React from "react";
import { Container, Jumbotron, Col, Row, Image } from "react-bootstrap";

const services = props => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <h2>Why our site?</h2>
        </Row>
        <Row>
          <Col sm>
            {/* <Image
              src="https://image.freepik.com/free-vector/start_53876-25533.jpg"
              rounded
            /> */}

            <p>image</p>
          </Col>
          <Col sm>
            <p>image</p>
          </Col>
          <Col sm>
            <p>image</p>
          </Col>
          <Col sm>
            <p>image</p>
          </Col>
          <Col sm>
            <p>image</p>
          </Col>
          <Col sm>
            <p>image</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default services;
