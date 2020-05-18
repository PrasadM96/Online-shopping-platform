import React from "react";
import { Tabs, Tab, TabLink } from "react-bootstrap";
import AddItemHandler from "../../containers/Selling/AddItemHandler";
import { Nav, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const sellingPage = (props) => {
  return (
    <Card style={{ margin: "2% 2%" }}>
      <Card.Header>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/selling/overview"
              href="/selling/overview"
            >
              Overview
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/selling/add-item"
              href="/selling/add-item"
            >
              Add-Item
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/selling/my-items"
              href="/selling/my-items"
            >
              Myitems
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
    // <Tabs
    //   style={{ margin: "2% 2%" }}
    //   defaultActiveKey="My Items"
    //   id="uncontrolled-tab-example"
    // >

    //   <Tab eventKey="My Items" title="My Items">
    //     <p>dsadjgasuyd</p>
    //   </Tab>
    //   <Tab eventKey="Add Selling Item" title="Add Item">
    //     <AddItemHandler />
    //   </Tab>
    //   <Tab eventKey="Selling Overview" title="Overview">
    //     <p>sdfsdfsdfsdfsf</p>
    //   </Tab>
    // </Tabs>
  );
};

export default sellingPage;
