import React, { Component } from "react";
import DisplayItem from "../../components/DisplayItem/DisplayItem";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
export class ResultsDisplay extends Component {
  state = {};
  render() {
    var itemArr = null;
    if (this.props.items.length > 0) {
      itemArr = this.props.items.map((item, index) => {
        return (
          <DisplayItem
            key={index}
            image={item.imageUrls[0]}
            price={item.price}
            shippingFee={item.shippingFee}
            title={item.title}
            itemCount={item.quantity}
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
    items: state.shop.searchItem,
    error: state.shop.error,
  };
};

export default connect(mapStateToProps, null)(ResultsDisplay);
