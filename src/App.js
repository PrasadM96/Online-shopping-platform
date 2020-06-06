import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Navigation/Layout";
import { Route, Switch } from "react-router-dom";

import SignInHandler from "./containers/Authentication/SignInHandler";
import SignUpHandler from "./containers/Authentication/SignUpHandler";
import SearchBarHandler from "./containers/Navigation/SearchHandler";
import ProfileHandler from "./containers/Forms/ProfileHandler";

// import ShippingDetailsHandler from "./containers/ShippingDetailsHandler";

import HomePage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import SellingPage from "./components/Selling/SellingPage";
import TabItems from "./components/Selling/TabItems";

import Profile from "./components/Forms/Profile";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SearchBarHandler />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signin" component={SignInHandler} />
            <Route path="/signup" component={SignUpHandler} />
            <Route path="/selling" component={TabItems} />
            <Route path="/profile" component={ProfileHandler} />
            
          </Switch>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
