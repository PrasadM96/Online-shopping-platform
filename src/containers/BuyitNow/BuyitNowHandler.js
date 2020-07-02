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
    firstname: null,
    lastname: null,
    address1: null,
    address2: null,
    country: null,
    zipCode: null,
    province: null,
    buyingQuantity: 1,
    cartItemsCount: 0,
    updateModalShow: false,
    toggle: false,
  };

  componentWillMount() {
    if (this.props.cart.length > 0) {
      var total = 0;
      this.props.cart.forEach((item, index) => {
        total = total + item.itemCount;
      });
      console.log("total", total);
      this.setState({
        ...this.state,
        cartItemsCount: total,
      });
    }
    const id = this.props.match.params.id;
    if (id) {
      this.props.ongetItem(id);
    }

    this.setState({
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      address1: localStorage.getItem("address"),
      country: localStorage.getItem("country"),
      zipCode: localStorage.getItem("zipCode"),
      province: localStorage.getItem("teleNumber"),
    });
  }

  firstnameHandler = (event) => {
    this.setState({ firstname: event.target.value });
  };

  lastnameHandler = (event) => {
    this.setState({ lastname: event.target.value });
  };
  address1Handler = (event) => {
    this.setState({ address1: event.target.value });
  };
  address2Handler = (event) => {
    this.setState({ address2: event.target.value });
  };
  countryHandler = (event) => {
    this.setState({ country: event.target.value });
  };
  provinceHandler = (event) => {
    this.setState({ province: event.target.value });
  };
  zipCodeHandler = (event) => {
    this.setState({ zipCode: event.target.value });
  };

  submitHandler = (e) => {
    console.log("inside");

    if (
      this.state.firstname !== null &&
      this.state.lastname !== null &&
      (this.state.address1 !== null || this.state.address2 !== null) &&
      this.state.country !== null &&
      this.state.province !== null &&
      this.state.zipCode !== null
    ) {
      console.log("right");
    }
  };

  buyingQuantityHandler = (e) => {
    this.setState({
      buyingQuantity: e.target.value,
    });
  };

  updateHandler = () => {
    console.log("update");
    this.setState({
      updateModalShow: true,
    });
  };

  orderHandler = (totalPrice) => {
    console.log("order");
    const items = [];
    items.push(this.props.item[0]);
    this.props.cart.forEach((item) => {
      items.push(item);
    });
    console.log(this.props.user.id, items,totalPrice);
  };

  click = () => {
    this.setState({
      updateModalShow: false,
    });
  };

  toggleHandler = (e) => {
    const toggleVal = this.state.toggle;
    this.setState({
      toggle: !toggleVal,
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
          <ShippingDetails
            firstnameHandler={this.firstnameHandler}
            lastnameHandler={this.lastnameHandler}
            address1Handler={this.address1Handler}
            address2Handler={this.address2Handler}
            countryHandler={this.countryHandler}
            provinceHandler={this.provinceHandler}
            zipCodeHandler={this.zipCodeHandler}
            click={this.submitHandler}
          />
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
    var cartItems = this.props.cart;

    // if (this.props.item) {
    //   const id = this.props.item[0]._id;
    //   var temp = cartItems.some((i) => i._id === id);
    //   if (!temp) {
    //     cartItems.push(this.props.item[0]);
    //   }
    // }

    if (cartItems.length > 0 || this.props.item) {
      // const item = { ...this.props.item[0] };
      // var { title, price, shippingFee, shippingArea, quantity } = item;

      detail = (
        <BuyitNow
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          address={this.state.address}
          country={this.state.country}
          zipCode={this.state.zipCode}
          teleNumber={this.state.teleNumber}
          cartItems={cartItems}
          cartTotal={this.props.cartTotal}
          cartSubTotal={this.props.cartSubTotal}
          cartTax={this.props.cartTax}
          currentItems={this.props.item}
          cartItemsCount={this.state.cartItemsCount}
          buyingQuantity={this.state.buyingQuantity}
          buyingQuantityHandler={this.buyingQuantityHandler}
          updateHandler={this.updateHandler}
          orderHandler={this.orderHandler}
          toggleHandler={this.toggleHandler}
          toggle={this.state.toggle}
        />
      );
    } else {
      if (!loading && !error) {
        detail = (
          <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
            <h3>No items to buy</h3>
          </div>
        );
      }
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
    cart: state.cart.cart,
    cartTotal: state.cart.cartTotal,
    cartSubTotal: state.cart.cartSubTotal,
    cartTax: state.cart.cartTax,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ongetItem: (id) => dispatch(actions.getSingleItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyitNowHandler);
