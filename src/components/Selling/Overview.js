import React from "react";
import {
  Jumbotron,
  Row,
  Col,
  Container,
  Nav,
  Button,
  Table,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const overview = (props) => {
  var total = 0,
    earning = 0;

  const items = props.items.map((item, index) => {
    total = total + item.price;
    earning = earning + item.price * item.quantity;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.title}</td>
        <td>${item.price}</td>
        <td>{item.quantity}</td>
      </tr>
    );
  });

  return (
    <div style={{ margin: "2% 4%" }}>
      <Jumbotron>
        <Container>
          <Row>
            <Col sm={true}>
              <div style={{ textAlign: "center" }}>
                <h3>Active Products</h3>
                <p>{props.items.length}</p>
              </div>
            </Col>
            <Col sm={true}>
              <div style={{ textAlign: "center" }}>
                <h3>Sold</h3>
                <p>{total}</p>
              </div>
            </Col>
            <Col sm={true}>
              <div style={{ textAlign: "center" }}>
                <h3>unsold</h3>
                <p>{150 - total}</p>
              </div>
            </Col>
            <Col xl={6}>
              <div style={{ textAlign: "center" }}>
                <h1>${earning}</h1>
                <h5>Total Earnings</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Table style={{ marginTop: "2%" }} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>No of item sold</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>

      <div style={{ textAlign: "center" }}>
        <Nav.Link as={NavLink} to="/selling/add-item" href="/selling/add-item">
          <Button as="input" type="submit" value="Add an Item" />
        </Nav.Link>
      </div>
    </div>
  );
};

export default overview;
