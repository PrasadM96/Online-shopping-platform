import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import AddItemHandler from "../../containers/Selling/AddItemHandler";

const sellingPage = () => {
  return (
    <Tabs
      style={{ margin: "2% 2%" }}
      defaultActiveKey="My Items"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="My Items" title="My Items">
        <p>dsadjgasuyd</p>
      </Tab>
      <Tab eventKey="Add Selling Item" title="Add Item">
        <AddItemHandler />
      </Tab>
      <Tab eventKey="Selling Overview" title="Overview">
        <p>sdfsdfsdfsdfsf</p>
      </Tab>
    </Tabs>
  );
};

export default sellingPage;
