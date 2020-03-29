import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const searchBar = props => {
  return (
    <Container>
      <div style={{ marginTop: "2%", marginBottom: "10px" }}></div>
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
            onChange={props.itemHandler}
          ></input>
        </Col>
        <Col sm={2}>
          <Button
            onClick={e => props.submitHandler(e)}
            variant="outline-primary"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default searchBar;
