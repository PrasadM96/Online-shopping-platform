import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Navigation/Layout";

// import SignInHandler from "./containers/SignInHandler";
import SearchBarHandler from "./containers/Navigation/SearchHandler";
// import ShippingDetailsHandler from "./containers/ShippingDetailsHandler";
import Modal from "./components/UI/Modal";
import Carousel from "./components/Carousel";

class App extends Component {
  render() {
    return (
      <Layout>
        <SearchBarHandler />

        <Carousel />
      </Layout>
    );
  }
}

export default App;
