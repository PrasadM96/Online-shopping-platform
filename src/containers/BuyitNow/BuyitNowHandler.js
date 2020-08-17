import React, { Component } from "react";
import axios from "axios";
import BuyitNow from "../../components/BuyItNow/ButItNow";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Spinner, Alert } from "react-bootstrap";
import ReModal from "../../components/UI/ReusableModal";
import ShippingDetails from "../../components/Forms/ShippingDetails";
import details from "../../components/Forms/ShippingDetails";
import { Redirect } from "react-router-dom";

class BuyitNowHandler extends Component {
  state = {
    firstname: null,
    lastname: null,
    address1: null,
    country: null,
    zipCode: null,
    teleNumber: null,
    province: null,
    buyingQuantity: 1,
    cartItemsCount: 0,
    updateModalShow: false,
    toggle: false,
    totalPrice: null,
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
    this.props.ongetCartItems();
    this.setState({
      firstname: localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname"),
      address1: localStorage.getItem("address1"),
      country: localStorage.getItem("country"),
      zipCode: localStorage.getItem("zip"),
      province: localStorage.getItem("province"),
      teleNumber: localStorage.getItem("teleNumber"),
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
  teleNumberHandler = (event) => {
    this.setState({ teleNumber: event.target.value });
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
    console.log("inside dfsfdsfdsfdsfs");

    if (
      this.state.firstname !== null &&
      this.state.lastname !== null &&
      this.state.address1 !== null &&
      this.state.country !== null &&
      this.state.province !== null &&
      this.state.zipCode !== null &&
      this.state.teleNumber !== null
    ) {
      localStorage.setItem("firstname", this.state.firstname);
      localStorage.setItem("lastname", this.state.lastname);
      localStorage.setItem("address", this.state.address1);
      localStorage.setItem("country", this.state.country);
      localStorage.setItem("province", this.state.province);
      localStorage.setItem("zipCode", this.state.zipCode);
      localStorage.setItem("teleNumber", this.state.teleNumber);
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

  totalPriceHandler = (totalPrice) => {
    this.setState({
      totalPrice: totalPrice,
    });
  };

  orderHandler = (token) => {
    if (
      this.state.firstname !== null &&
      this.state.lastname !== null &&
      this.state.address1 !== null &&
      this.state.country !== null &&
      this.state.province !== null &&
      this.state.zipCode !== null &&
      this.state.teleNumber !== null
    ) {
      const userId = localStorage.getItem("user_id");

      var order = {
        stripeToken: token,
        userId: userId,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        province: this.state.province,
        address: this.state.address1,
        country: this.state.country,
        zipCode: this.state.zipCode,
        teleNumber: this.state.teleNumber,
        items: this.props.cartItemCount.items,
        totalPrice: this.state.totalPrice,
      };
      console.log(order);
      this.props.onPostOrder(order);
    } else {
      window.alert("Before plcae the order update your shipping details!");
    }
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
          submitHandler={this.submitHandler}
        >
          <ShippingDetails
            firstName={this.state.firstname}
            lastName={this.state.lastname}
            address={this.state.address1}
            country={this.state.country}
            zipCode={this.state.zipCode}
            province={this.state.province}
            teleNumber={this.state.teleNumber}
            firstnameHandler={this.firstnameHandler}
            lastnameHandler={this.lastnameHandler}
            address1Handler={this.address1Handler}
            countryHandler={this.countryHandler}
            provinceHandler={this.provinceHandler}
            teleNumberHandler={this.teleNumberHandler}
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
      var cartSubTotal = 0;
      var cartTax = 0;
      var carrTotalCount = 0;

      if (this.props.cartItemCount.items) {
        const cartCount = this.props.cartItemCount.items;
        var tempArr = [];
        cartCount.map((element) => {
          const temp = this.props.cart.filter(
            (x) => x._id === element.productId
          );
          if (temp) {
            const t1 = temp[0];
            t1.itemCount = element.quantity;
            cartSubTotal = cartSubTotal + t1.price * t1.itemCount;
            carrTotalCount = carrTotalCount + t1.itemCount;
            console.log(t1.shippingFee);

            cartTax = cartTax + parseFloat(t1.shippingFee) * t1.itemCount;
            tempArr.push(t1);
          }
        });
      }

      detail = (
        <BuyitNow
          firstName={this.state.firstname}
          lastName={this.state.lastname}
          address={this.state.address1}
          country={this.state.country}
          province={this.state.province}
          zipCode={this.state.zipCode}
          teleNumber={this.state.teleNumber}
          cartItems={cartItems}
          cartTotal={this.props.cartTotal}
          cartSubTotal={cartSubTotal}
          carrTotalCount={carrTotalCount}
          cartTax={cartTax}
          itemsCount={this.props.cartItemCount.items}
          currentItems={this.props.item}
          cartItemsCount={this.state.cartItemsCount}
          buyingQuantity={this.state.buyingQuantity}
          buyingQuantityHandler={this.buyingQuantityHandler}
          updateHandler={this.updateHandler}
          orderHandler={this.orderHandler}
          toggleHandler={this.toggleHandler}
          toggle={this.state.toggle}
          totalPriceHandler={this.totalPriceHandler}
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

    if (this.props.orderLoading) {
      detail = (
        <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />;
          <h3>Your Order is Processing!!</h3>
        </div>
      );
    }
    var redirect = null;
    if (this.props.orderItems) {
      redirect = <Redirect to="/orders" />;
    }

    console.log(this.state);
    return (
      <div>
        {redirect}
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
    cartItemCount: state.cart.cartItemCount,
    orderLoading: state.shop.orderLoading,
    orderItems: state.shop.orderItems,
    orderError: state.shop.orderError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ongetItem: (id) => dispatch(actions.getSingleItem(id)),
    ongetCartItems: () => dispatch(actions.getCartItem()),
    onPostOrder: (order) => dispatch(actions.postOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyitNowHandler);
