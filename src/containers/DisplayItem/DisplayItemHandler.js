import React, { Component } from "react";
import DisplayItem from "../../components/DisplayItem/DisplayItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class DisplayItemHandler extends Component {
  state = {};

  componentWillMount() {
    const path = this.props.location.pathname.split("/")[2];
    this.props.ongetAllItems(path);
    console.log(this.props.items);
    console.log(this.props.loading);
  }

  render() {
    var itemArr = null;
    if (this.props.items) {
      itemArr = this.props.items.map((item, index) => {
        return (
          <DisplayItem
            key={index}
            image={item.imageUrls[0].toString()}
            price={item.price}
            shippingFee={item.shippingFee}
            title={item.title}
            itemCount={500}
            condition={item.condition}
            item={item}
            path={this.props.location.pathname.split("/")[2]}
            id={item._id}
          />
        );
      });
    } else {
      itemArr = <h3>No items found</h3>;
    }

    return <div>{itemArr}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.shop.loading,
    items: state.shop.items,
    error: state.shop.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ongetAllItems: (path) => dispatch(actions.getAllProducts(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DisplayItemHandler));
