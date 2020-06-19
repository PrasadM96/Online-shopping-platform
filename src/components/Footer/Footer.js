import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const footer = (props) => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm>
            <h1 className="letter">Online Shopping Logo</h1>
          </Col>
          <Col sm>
            <p className="letter">Address</p>
            <p className="letter">Tele Number</p>
          </Col>
          <Col sm>
            <p className="letter">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
