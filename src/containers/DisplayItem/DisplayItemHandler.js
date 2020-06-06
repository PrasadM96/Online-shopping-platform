import React, { Component } from "react";
import DisplayItem from "../../components/DisplayItem/DisplayItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Spinner } from "react-bootstrap";

class DisplayItemHandler extends Component {
  state = {};

  componentWillMount() {
    const path = this.props.location.pathname.split("/")[2];
    this.props.ongetAllItems(path);
  }

  render() {
    console.log(this.props.items);
    var itemArr = null;
    if (this.props.items.length > 0) {
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
      if (!this.props.loading || this.props.error) {
        itemArr = (
          <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
            <h3>No items found</h3>
          </div>
        );
      }
    }

    var err = null;
    if (this.props.error) {
      err = <p>{this.props.error.message}</p>;
    }

    var loading = null;

    if (this.props.loading) {
      loading = (
        <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />;
        </div>
      );
    }

    return (
      <div>
        {loading}
        {err}
        {itemArr}
      </div>
    );
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
