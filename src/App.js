import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Navigation/Layout";
import { Route, Switch } from "react-router-dom";
import * as actions from "./store/actions/index";
import SearchBarHandler from "./containers/Navigation/SearchHandler";
import ProfileHandler from "./containers/Forms/ProfileHandler";
//import Profile from "./components/Pro/ProfileHandler";

// import ShippingDetailsHandler from "./containers/ShippingDetailsHandler";

import HomePage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import SellingPage from "./components/Selling/SellingPage";
import TabItems from "./components/Selling/TabItems";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import RegisterModal from "./components/Authentication/RegisterModal";

import Profile from "./components/Profile/Profile";

import DisplayItemHandler from "./containers/DisplayItem/DisplayItemHandler";
import DetailPageHandler from "./containers/DisplayItem/DetailPageHandler";
import AddtoCart from "./containers/AddtoCart/AddtoCart";
import BuyitNowHandler from "./containers/BuyitNow/BuyitNowHandler";
import SearchResults from "./containers/Navigation/ResultsDisplay";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register, login } from "./store/actions/authActions";
import { clearErrors } from "./store/actions/errorActions";
import { modalstate } from "./store/actions/modalActions";
import { authCheckState } from "./store/actions/authActions";
import RegisterSelling from "./containers/Selling/registerSellingHandler";
import axios from "axios";

class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    modalstate: PropTypes.func.isRequired,
    authCheckState: PropTypes.func.isRequired,
    modal: PropTypes.bool,
  };

  componentDidMount() {
    this.props.onAuthCheckState();
  }

  toggle = () => {
    //clear errors
    const { modal } = this.props;
    console.log(modal);
    this.props.onModatState();
    console.log(modal);
  };

  render() {
    const { isAuthenticated, user, isRegister } = this.props.auth;
    const sellerStatus = localStorage.getItem("sellerStatus");
    console.log("seller", sellerStatus);

    console.log(isAuthenticated);
    return (
      <div>
        <Layout
          isAuthenticated={isAuthenticated}
          user={user}
          isRegister={isRegister}
          toggle={this.toggle}
          sellerStatus={this.sellerStatus}
        >
          <SearchBarHandler />
          <RegisterModal />
          <Switch>
            <Route path="/" exact component={HomePage} />

            <Route path="/selling/:section" component={TabItems} />
            <Route path="/selling" component={RegisterSelling} />
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
  modalstate: state.modalstate,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState()),
    onModatState: () => dispatch(actions.modalstate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
