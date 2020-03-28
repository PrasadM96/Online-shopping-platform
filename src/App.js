import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Button } from "react-bootstrap";
// import Carousel from "./components/Carousel";

class App extends Component {
  render() {
    const mystyle = {
      padding: "2px 10px",
      width: "80%",
      height: "100%",
      border: "1px solid black",
      borderRadius: "7px",
      marginRight: "8px"
    };
    return (
      <Layout>
        <div
          style={{
            textAlign: "center",
            margin: "8px auto",
            width: "60%",
            height: "40px"
          }}
        >
          <input style={mystyle} placeholder="Search items"></input>
          <Button style={{ verticalAlign: "center" }} variant="outline-primary">
            Search
          </Button>
        </div>
        <h1>Online shopping..</h1>
      </Layout>
    );
  }
}

export default App;
