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
import LayoutHandler from "./containers/Navigation/LayoutHandler"
import BuyitNowHandler from "./containers/BuyitNow/BuyitNowHandler";
import SearchResults from "./containers/Navigation/ResultsDisplay";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register, login } from "./store/actions/authActions";
import { clearErrors } from "./store/actions/errorActions";
import { modalstate } from "./store/actions/modalActions";
import { authCheckState } from "./store/actions/authActions";
import RegisterSelling from "./containers/Selling/registerSellingHandler";
import HomePageHandler from "./containers/HomePage/HomePageHandler";
import FooterHandler from "./containers/Footer/FooterHandler";
import UsersList from "./components/Admin/UsersList";
import ProductList from "./components/Admin/ProductList";
import SellersList from "./components/Admin/SellersList";
import OrderList from "./components/Admin/OrderList";
import { Card, Table, Container,Spinner } from "react-bootstrap";



import axios from "axios";

class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    modalstate: PropTypes.func.isRequired,
    authCheckState: PropTypes.func.isRequired,
    modal: PropTypes.bool,
   getAdmin:PropTypes.func.isRequired,
  };


  //}
  componentDidMount() {
    this.props.onAuthCheckState();
    //this.props.onGetAdmin();
    console.log(this.props.auth.isAdmin);
    
  
  }

  toggle = () => {
    //clear errors
    const { modal } = this.props;
    this.props.onModatState();
  };

  getAdmin = () => {
    this.props.onGetAdmin();
  };

  render() {
    const { isAuthenticated, user, isRegister,isAdmin } = this.props.auth;
    
    const sellerStatus = localStorage.getItem("sellerStatus");
  
    return (
      
      <div>
          <Layout
      isAuthenticated={isAuthenticated}
      user={user}
      isRegister={isRegister}
      toggle={this.toggle}
      sellerStatus={this.sellerStatus}
      isAdmin={isAdmin}
     
    >
          <SearchBarHandler />
          <RegisterModal />
          <Switch>
            <Route path="/" exact component={HomePageHandler} />

            <Route path="/selling/:section" component={TabItems} />
            <Route path="/selling" component={RegisterSelling} />
            <Route path="/profile" component={ProfileHandler} />
            <Route path="/admin/products" component={ProductList} />
            <Route path="/orders" component={OrderList} />
            <Route path="/admin/customers" component={UsersList} />
            <Route path="/admin/sellers" component={SellersList} />
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
          <FooterHandler />
        </Layout>
      </div>
    );
    
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  modalstate: state.modalstate,
  admin: state.admin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState()),
    onModatState: () => dispatch(actions.modalstate()),
    onGetAdmin:() => dispatch(actions.getAdmin()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
