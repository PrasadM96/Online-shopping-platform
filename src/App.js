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
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";

import Profile from "./components/Forms/Profile";

import DisplayItemHandler from "./containers/DisplayItem/DisplayItemHandler";
import DetailPageHandler from "./containers/DisplayItem/DetailPageHandler";
import AddtoCart from "./containers/AddtoCart/AddtoCart";
import BuyitNowHandler from "./containers/BuyitNow/BuyitNowHandler";
import SearchResults from "./containers/Navigation/ResultsDisplay";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user, isRegister } = this.props.auth;
    return (
      <div>
        <Layout>
          <SearchBarHandler />

          <Switch>
            <Route path="/" exact component={HomePage} />

            <Route path="/selling" component={TabItems} />
            <Route path="/profile" component={ProfileHandler} />
            <Route path="/category/:type/:id" component={DetailPageHandler} />
            <Route path="/cart" component={Cart} />
            <Route
              path="/category/:type"
              exact
              component={DisplayItemHandler}
            />
            <Route path="/addtocart" component={AddtoCart} />

            <Route path="/checkout/:id" exact component={BuyitNowHandler} />
            <Route path="/checkout/" component={BuyitNowHandler} />
            <Route path="/search-results/:item" component={SearchResults} />
            <Route component={Default} />
          </Switch>
          <Footer />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
