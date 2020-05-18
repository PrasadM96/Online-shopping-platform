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

const overview = () => {
  return (
    <div style={{ margin: "2% 4%" }}>
      <Jumbotron>
        <Container>
          <Row>
            <Col sm={true}>
              <div style={{ textAlign: "center" }}>
                <h3>Active</h3>
                <p>450</p>
              </div>
            </Col>
            <Col sm={true}>
              <div style={{ textAlign: "center" }}>
                <h3>Sold</h3>
                <p>450</p>
              </div>
            </Col>
            <Col sm={true}>
              <div style={{ textAlign: "center" }}>
                <h3>unsold</h3>
                <p>450</p>
              </div>
            </Col>
            <Col xl={6}>
              <div style={{ textAlign: "center" }}>
                <h1>$0.00</h1>
                <h5>Total Earnings</h5>
                <p>Last 30 days</p>
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
        </tbody>
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
