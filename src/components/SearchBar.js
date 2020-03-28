import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const searchBar = props => {
  return (
    <Container>
      <div style={{ marginTop: "2%" }}></div>
      <Row>
        <Col sm={10}>
          <input
            style={{
              width: "100%",
              alignItems: "left",
              height: "100%",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px"
            }}
            placeholder="Search items"
            value={props.item}
          ></input>
        </Col>
        <Col sm={2}>
          <Button variant="outline-primary"> Search</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default searchBar;
