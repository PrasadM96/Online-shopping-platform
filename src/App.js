import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Button } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import SignUp from "./components/Signup";

class App extends Component {
  render() {
    return (
      <Layout>
        <SearchBar />
        <h1>Online shopping..</h1>
      </Layout>
      // <SignUp />
    );
  }
}

export default App;
