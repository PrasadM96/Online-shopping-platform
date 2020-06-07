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
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />s
            <Route path="/signin" component={SignInHandler} />
            <Route path="/selling" component={TabItems} />
            <Route path="/cart" component={Cart} />
            <Route component={Default}/>
          </Switch>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
