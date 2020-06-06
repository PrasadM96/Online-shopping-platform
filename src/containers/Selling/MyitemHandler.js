import React, { Component } from "react";
import MyItem from "../../components/Selling/MyItems";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Spinner } from "react-bootstrap";
import WitherrorHandler from "../../hoc/WitherrorHandler";
import axios from "axios";

class MyItemHandler extends Component {
  componentDidMount() {
    this.props.onGetSellingProducts();
  }

  deleteHandler = (index) => {
    const prod = this.props.items[index];
    this.props.ondeleteSellingItem(prod._id);
  };

  render() {
    var loadingTemp = null;

    if (this.props.loading) {
      loadingTemp = (
        <div style={{ width: "100%", textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />;
        </div>
      );
    }
    var ItemArr = null;

    if (this.props.items.length > 0) {
      ItemArr = this.props.items.map((item, index) => {
        return (
          <MyItem
            key={index}
            index={index}
            image={item.imageUrls[0]}
            title={item.title}
            price={item.price}
            shippingFee={item.shippingFee}
            deleteHandler={this.deleteHandler}
            loading={this.props.loading}
          />
        );
      });
    }

    var errorTxt = null;
    if (this.props.error) {
      errorTxt = this.props.error.message;
    }

    return (
      <div>
        <h3 style={{ margin: "2% 5%" }}>My Selling items</h3>
        {loadingTemp}
        {errorTxt}
        {ItemArr}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.loading,
    error: state.products.error,
    items: state.products.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ondeleteSellingItem: (index) => dispatch(actions.deleteSellingItem(index)),
    onGetSellingProducts: () => dispatch(actions.getSellingProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyItemHandler);

//(WitherrorHandler(MyItemHandler, axios))
