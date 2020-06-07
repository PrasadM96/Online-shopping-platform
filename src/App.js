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
import BuyitNow from "./containers/BuyitNow/BuyitNow";
import SearchResults from "./containers/Navigation/ResultsDisplay";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signin" component={SignInHandler} />
            <Route path="/signup" component={SignUpHandler} />
            <Route path="/selling" component={TabItems} />
<<<<<<< HEAD
            <Route path="/cart" component={Cart} />
            <Route component={Default}/>
=======
            <Route path="/profile" component={ProfileHandler} />
            <Route path="/category/:type/:id" component={DetailPageHandler} />
            <Route
              path="/category/:type"
              exact
              component={DisplayItemHandler}
            />
            <Route path="/addtocart" component={AddtoCart} />
            />
            <Route path="/buyitnow" component={BuyitNow} />
            <Route path="/search-results/:item" component={SearchResults} />
>>>>>>> 07ed92c6171385a08d2fafaa859fefaa32f4b7f9
          </Switch>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
