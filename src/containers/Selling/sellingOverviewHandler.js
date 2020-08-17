import React, { Component } from "react";
import OverView from "../../components/Selling/Overview";
import axios from "axios";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class OverviewHandler extends Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.onGetSellingProducts();
    console.log(this.props.items);
    axios
      .get("/user/get-all-orders", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {});
  }

  render() {
    return (
      <OverView
        activeItems={this.props.items.length}
        items={this.props.items}
      />
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
    onGetSellingProducts: () => dispatch(actions.getSellingProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OverviewHandler);
