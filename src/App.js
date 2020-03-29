import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Button } from "react-bootstrap";
import SignInHandler from "./containers/SignInHandler";
import SearchBarHandler from "./containers/SearchHandler";
import ShippingDetailsHandler from "./containers/ShippingDetailsHandler";

class App extends Component {
  render() {
    return (
      // <Layout>
      //   <SearchBar />
      //   <h1>Online shopping..</h1>
      // </Layout>
      <SignInHandler />
    );
  }
}

export default App;
