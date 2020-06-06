import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Navigation/Layout";
import { Route, Switch } from "react-router-dom";

import SignInHandler from "./containers/Authentication/SignInHandler";
import SignUpHandler from "./containers/Authentication/SignUpHandler";
import SearchBarHandler from "./containers/Navigation/SearchHandler";
import HomePage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import SellingPage from "./components/Selling/SellingPage";
import TabItems from "./components/Selling/TabItems";
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
          <SearchBarHandler />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signin" component={SignInHandler} />
            <Route path="/signup" component={SignUpHandler} />
            <Route path="/selling" component={TabItems} />
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
          </Switch>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
