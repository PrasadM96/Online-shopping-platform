import React, { Component } from "react";
import SellingPage from "./SellingPage";
import { Route, Switch } from "react-router-dom";
import AddItemHandler from "../../containers/Selling/AddItemHandler1";
import Overview from "./Overview";
import MyItems from "../../containers/Selling/MyitemHandler";
import { connect } from "react-redux";
import EditItemHandler from "../../containers/Selling/EditItemHandler";

class TabItem extends Component {
  render() {
    var displayEdit = false;
    if (this.props.editProd) {
      displayEdit = true;
    }
    return (
      <SellingPage displayEdit={displayEdit}>
        <Switch>
          <Route
            exact
            path="/selling/add-item"
            component={AddItemHandler}
          ></Route>
          <Route exact path="/selling/overview" component={Overview}></Route>
          <Route exact path="/selling/my-items" component={MyItems}></Route>
          <Route
            exact
            path="/selling/edit-item/:id"
            component={EditItemHandler}
          ></Route>
        </Switch>
      </SellingPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editProd: state.products.editProd,
  };
};

export default connect(mapStateToProps, null)(TabItem);
