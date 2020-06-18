import React, { Component } from "react";
import DetailPage from "../../components/DisplayItem/DetailPage";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class DetailPageHandler extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props.items);
  }

  buyitNowHandler = (id) => {
    this.props.history.push("/checkout/" + this.props.match.params.id);
  };

  addtoCartHandler = (id) => {
    this.props.history.push("/cart");
    this.props.addToCart(id);
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
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.shop.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(actions.addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPageHandler);
