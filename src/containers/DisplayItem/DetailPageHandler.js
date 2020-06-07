import React, { Component } from "react";
import DetailPage from "../../components/DisplayItem/DetailPage";
import { connect } from "react-redux";

class DetailPageHandler extends Component {
  state = {};

  componentDidMount() {}

  buyitNowHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/buyitnow");
  };

  addtoCartHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/addtocart");
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
        description={item.description}
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

export default connect(mapStateToProps, null)(DetailPageHandler);
