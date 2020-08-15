import React, { Component } from "react";
import MyItem from "../../components/Selling/MyItems";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Spinner, Alert } from "react-bootstrap";
import WitherrorHandler from "../../hoc/WitherrorHandler";
import axios from "axios";

class MyItemHandler extends Component {
  state = {};

  componentDidMount() {
    this.props.onGetSellingProducts();
    if (this.props.editItem) {
      this.props.history.push("/selling/add-item");
    }
  }

  deleteHandler = (index) => {
    const prod = this.props.items[index];
    this.props.ondeleteSellingItem(prod._id);
  };

  editHandler = (id) => {
    this.props.history.push("/selling/edit-item/" + id);
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

    if (this.props.items.length > 0 && !this.props.error) {
      ItemArr = this.props.items.map((item, index) => {
        return (
          <MyItem
            key={index}
            id={item._id}
            index={index}
            image={item.imageUrls[0]}
            title={item.title}
            price={item.price}
            shippingFee={item.shippingFee}
            deleteHandler={this.deleteHandler}
            editHandler={this.editHandler}
            loading={this.props.loading}
          />
        );
      });
    } else {
      if (!this.props.loading && !this.props.error) {
        ItemArr = (
          <h5 style={{ margin: "5% auto", textAlign: "center" }}>
            No Items Found!
          </h5>
        );
      }
    }

    var errorTxt = null;
    if (this.props.error) {
      errorTxt = (
        <Alert
          style={{ margin: "auto", textAlign: "center", width: "60%" }}
          variant="danger"
        >
          {this.props.error.message}
        </Alert>
      );
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
    // ondeleteSellingItem: (index) => dispatch(actions.deleteSellingItem(index)),
    onGetSellingProducts: () => dispatch(actions.getSellingProduct()),
    // onEditItemHandler: (id) => dispatch(actions.getEditProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyItemHandler);

//(WitherrorHandler(MyItemHandler, axios))
