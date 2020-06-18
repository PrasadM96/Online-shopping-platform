import React, { Component } from "react";
import axios from "axios";
import BuyitNow from "../../components/BuyItNow/ButItNow";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Spinner, Alert } from "react-bootstrap";
import ReModal from "../../components/UI/ReusableModal";
import ShippingDetails from "../../components/Forms/ShippingDetails";

class BuyitNowHandler extends Component {
  state = {
    firstName: null,
    lastName: null,
    address: null,
    country: null,
    zipCode: null,
    teleNumber: null,
    buyingQuantity: 1,
    updateModalShow: false,
  };

  componentWillMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    this.setState({
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      address: localStorage.getItem("address"),
      country: localStorage.getItem("country"),
      zipCode: localStorage.getItem("zipCode"),
      teleNumber: localStorage.getItem("teleNumber"),
    });
    this.props.ongetItem(id);
  }

  buyingQuantityHandler = (e) => {
    this.setState({
      buyingQuantity: e.target.value,
    });
    console.log(this.state.buyingQuantity);
  };

  updateHandler = () => {
    console.log("update");
    this.setState({
      updateModalShow: true,
    });
  };

  orderHandler = () => {
    console.log("order");
  };

  click = () => {
    this.setState({
      updateModalShow: false,
    });
  };
  render() {
    var modal = null;
    if (this.state.updateModalShow) {
      modal = (
        <ReModal
          title="Shipping Details"
          status={this.state.updateModalShow}
          click={this.click}
        >
          <ShippingDetails />
        </ReModal>
      );
    }

    var loading = null;
    if (this.props.loading) {
      loading = (
        <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />;
        </div>
      );
    }

    var error = null;
    if (this.props.error) {
      error = (
        <Alert
          style={{ margin: "5% auto", textAlign: "center", width: "60%" }}
          variant="danger"
        >
          {this.props.error}
        </Alert>
      );
    }

    var detail = null;

    if (this.props.item) {
      const item = { ...this.props.item[0] };
      var { title, price, shippingFee, shippingArea, quantity } = item;

      detail = (
        <BuyitNow
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          address={this.state.address}
          country={this.state.country}
          zipCode={this.state.zipCode}
          teleNumber={this.state.teleNumber}
          title={title}
          price={price}
          shippingArea={shippingArea}
          shippingFee={shippingFee}
          quantity={quantity}
          buyingQuantity={this.state.buyingQuantity}
          buyingQuantityHandler={this.buyingQuantityHandler}
          updateHandler={this.updateHandler}
          orderHandler={this.orderHandler}
        />
      );
    }

    return (
      <div>
        {modal}
        {loading}
        {error}
        {detail}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.shop.checkoutLoading,
    item: state.shop.checkoutItem,
    error: state.shop.checkoutErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ongetItem: (id) => dispatch(actions.getSingleItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyitNowHandler);
