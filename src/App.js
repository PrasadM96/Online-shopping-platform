import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Button } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import details from "./components/details";

import SearchBarHandler from "./containers/SearchHandler";
import ShippingDetailsHandler from "./containers/ShippingDetailsHandler";


class App extends Component {
  render() {
    return (

      /*<Layout>
        <SearchBar />
        <h1>Online shopping..</h1>
      </Layout>*/
      // <SignUp />
       <Signup/>
      // <Layout>
      //   <SearchBar />
      //   <h1>Online shopping..</h1>
      // </Layout>
     // <ShippingDetailsHandler />

    );
  }
}

export default App;
