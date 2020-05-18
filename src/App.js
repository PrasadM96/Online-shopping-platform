import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Navigation/Layout";
import { Route, Switch } from "react-router-dom";

import SignInHandler from "./containers/Authentication/SignInHandler";
import SearchBarHandler from "./containers/Navigation/SearchHandler";
// import ShippingDetailsHandler from "./containers/ShippingDetailsHandler";

import HomePage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import SellingPage from "./components/Selling/SellingPage";
import TabItems from "./components/Selling/TabItems";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SearchBarHandler />

          <Switch>
            <Route path="/" exact component={HomePage} />s
            <Route path="/signin" component={SignInHandler} />
            <Route path="/selling" component={TabItems} />
          </Switch>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
