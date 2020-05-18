import React, { Component } from "react";
import SellingPage from "./SellingPage";
import { Route, Switch } from "react-router-dom";
import AddItemHandler from "../../containers/Selling/AddItemHandler";
import Overview from "./Overview";
import MyItems from "../../containers/Selling/MyitemHandler";

const temp = () => {
  return (
    <SellingPage>
      <Switch>
        <Route
          exact
          path="/selling/add-item"
          component={AddItemHandler}
        ></Route>
        <Route exact path="/selling/overview" component={Overview}></Route>
        <Route exact path="/selling/my-items" component={MyItems}></Route>
      </Switch>
    </SellingPage>
  );
};

export default temp;
