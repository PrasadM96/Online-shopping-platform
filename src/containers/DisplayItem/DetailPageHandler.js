import React, { Component } from "react";
import DetailPage from "../../components/DisplayItem/DetailPage";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class DetailPageHandler extends Component {
  state = {};

  componentDidMount() {}

  buyitNowHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/buyitnow");
  };

  addtoCartHandler = (id) => {
    //e.preventDefault();
    if(this.props.islog){
      this.props.addToCart(id);
      this.props.history.push("/cart");
    }else{
      this.props.history.push("/signin")
    }
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
        quantity={500}
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
    islog:state.auth.islog
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(actions.addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPageHandler);
