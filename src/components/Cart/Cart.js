import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { connect } from "react-redux";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import * as actionTypes from "../../store/actions/actionTypes";
import { tempData } from "../../assets/tempData";

class Cart extends Component {
  state = {
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount = () => {
    this.addTotals();
    this.props.setItems(tempData);
  };
  increment = (id) => {
    let tempCart = [...this.props.cart];
    const selectedItem = tempCart.find((item) => item._id === id);
    const index = tempCart.indexOf(selectedItem);
    const item = tempCart[index];
    item.count = item.count + 1;
    item.total = item.count * item.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.props.cart];
    const selectedItem = tempCart.find((item) => item._id === id);
    const index = tempCart.indexOf(selectedItem);
    const item = tempCart[index];
    item.count = item.count - 1;
    if (item.count === 0) {
      this.removeItem(index);
      console.log(index);
    } else {
      item.total = item.count * item.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (index) => {
    console.log("item removed");
    let tempItems = [...this.props.items];
    let tempCart = [...this.props.cart];

    const id = tempCart[index]._id;

    tempCart = tempCart.filter((item) => item._id !== id);
    console.log(tempCart);
    let removedItem = tempItems[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;

    this.setState({
      cart: tempCart,
      items: [...tempItems],
    });
  };
  addTotals = () => {
    let subTotal = 0;
    this.props.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    });
  };
  render() {
    if (this.props.cart.length > 0) {
      return (
        <section>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList
            cart={this.props.cart}
            increment={this.increment}
            decrement={this.decrement}
            removeItem={this.removeItem}
          />
          <CartTotals state={this.state} clearCart={this.props.clearCart} history={this.props.history}/>
        </section>
      );
    } else {
      return <EmptyCart />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.products.items,
    cart: state.products.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (items) => dispatch({ type: actionTypes.SET_ITEMS, items: items }),
    addToCart:(id)=>dispatch({type:actionTypes.ADD_TO_CART,id:id}),
    clearCart:()=>dispatch({type:actionTypes.CLEAR_CART})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
