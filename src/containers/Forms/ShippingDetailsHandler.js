import React, { Component } from "react";
import Shipping from "../components/ShippingDetails";

class ShippingDetailsHandler extends Component {
  state = {
    firstname: null,
    lastname: null,
    address1: null,
    address2: null,
    city: null,
    states: null,
    zip: null
  };

  firstnameHandler = event => {
    this.setState({ firstname: event.target.value });
  };

  lastnameHandler = event => {
    this.setState({ lastname: event.target.value });
  };
  address1Handler = event => {
    this.setState({ address1: event.target.value });
  };
  address2Handler = event => {
    this.setState({ address2: event.target.value });
  };
  cityHandler = event => {
    this.setState({ city: event.target.value });
  };
  statesHandler = event => {
    console.log(event.target.value);
    this.setState({ states: event.target.value });
    console.log(this.state.states);
  };
  zipHandler = event => {
    this.setState({ zip: event.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (
      this.state.firstname !== null &&
      this.state.lastname !== null &&
      this.state.lastname !== null &&
      this.state.address1 !== null &&
      this.state.city !== null &&
      this.state.states !== null &&
      this.state.zip !== null
    ) {
      console.log(
        this.state.firstname,
        this.state.lastname,
        this.state.lastname,
        this.state.address1,
        this.state.address2,
        this.state.city,
        this.state.states,
        this.state.zip
      );
    }
  };

  render() {
    return (
      <Shipping
        firstnameHandler={this.firstnameHandler}
        lastnameHandler={this.lastnameHandler}
        address1Handler={this.address1Handler}
        address2Handler={this.address2Handler}
        cityHandler={this.cityHandler}
        statesHandler={this.statesHandler}
        zipHandler={this.zipHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

export default ShippingDetailsHandler;
