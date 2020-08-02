import React, { Component } from "react";
import Register from "../../components/Selling/registerSelling";
import { Card, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Redirect } from "react-router-dom";
import axios from "axios";

class RegisterSelling extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    teleNumber: "",
    country: "",
    loadingPage: true,
    error: null,
  };

  componentDidMount() {
    this.setState({ loadingPage: true });
    const token = localStorage.getItem("token");
    axios
      .get("/user/check", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((result) => {
        this.setState({ loadingPage: false });
        if (result.data.sellerStatus.sellerStatus) {
          this.props.history.push("/selling/overview");
        }
      })
      .catch((err) => {
        this.setState({ error: err.message, loadingPage: false });
      });
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = () => {
    console.log("submit");
    this.props.onSellingReg({
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      teleNumber: this.state.teleNumber,
      country: this.state.country,
    });
  };

  render() {
    var err = null;
    var content = (
      <Container>
        <Row md={12}>
          <Col sm={6} style={{ margin: "5% auto" }}>
            <h3 style={{ marginBottom: "2%" }}>Tell us about yourself!</h3>
            {err}
            <Register
              details={this.state}
              onChangeHandler={this.onChangeHandler}
              onSubmitHandler={this.onSubmitHandler}
              loading={this.props.loading}
            />
          </Col>
        </Row>
      </Container>
    );

    if (this.state.loadingPage) {
      content = (
        <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />;<h3>Please wait!</h3>
        </div>
      );
    }

    if (this.state.error) {
      content = (
        <Alert
          style={{ margin: " 2% auto", textAlign: "center", width: "60%" }}
          variant="danger"
        >
          {this.state.error}
        </Alert>
      );
    }

    var err = null;
    if (this.props.error) {
      err = (
        <Alert
          style={{ margin: " 2% auto", textAlign: "center", width: "100%" }}
          variant="danger"
        >
          Request Failed and Try Again
        </Alert>
      );
    }

    var redirect = null;

    if (this.props.succeeded) {
      redirect = <Redirect to="/selling/add-item" />;
    }

    return (
      <div>
        {content}
        {redirect}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.sellRegLoading,
    succeeded: state.products.sellRegData,
    error: state.products.sellRegError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSellingReg: (data) => dispatch(actions.sellingRegister(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSelling);
