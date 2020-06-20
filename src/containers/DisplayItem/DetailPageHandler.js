import React, { Component } from "react";
import DetailPage from "../../components/DisplayItem/DetailPage";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class DetailPageHandler extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props.items);
    if (this.props.addtoCartSuccess) {
      this.props.history.push("/cart");
    }
  }

  buyitNowHandler = (id) => {
    this.props.history.push("/checkout/" + this.props.match.params.id);
  };

  addtoCartHandler = (id) => {
    this.props.onAddItemToCart(id);
    this.props.history.push("/cart");
    //this.props.addToCart(id);
  };

  render() {
    const id = this.props.match.params.id;
    var item = null;
    if (id) {
      item = this.props.items.filter((item) => {
        return id === item._id;
      });
    }
    item = { ...item[0] };
    return (
      <DetailPage
        imageUrls={item.imageUrls}
        title={item.title}
        condition={item.condition}
        quantity={item.quantity}
        price={item.price}
        shippingFee={item.shippingFee}
        seller={"email"}
        id={item._id}
        description={item.description}
        inCart={item.inCart}
        buyitNowHandler={this.buyitNowHandler}
        addtoCartHandler={this.addtoCartHandler}
        cart={this.props.cart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.shop.items,
    cart: state.shop.cart,
    addtoCartSuccess: state.shop.addtoCartSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(actions.addToCart(id)),
    onAddItemToCart: (id) => dispatch(actions.addItemToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPageHandler);
