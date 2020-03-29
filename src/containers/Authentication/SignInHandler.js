import React, { Component } from "react";
import SignIn from "../../components/Authentication/SignIn";

class SignInHandler extends Component {
  state = {
    email: null,
    password: null
  };

  emailHandler = event => {
    this.setState({ email: event.target.value });
  };

  passwordHandler = event => {
    this.setState({ password: event.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.email !== null && this.state.password !== null) {
      console.log("submit sigin ", this.state.email, this.state.password);
    }
  };

  render() {
    return (
      <SignIn
        emailHandler={this.emailHandler}
        passwordHandler={this.passwordHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

export default SignInHandler;
