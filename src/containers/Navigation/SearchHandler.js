import SearchBar from "../../components/Navigation/SearchBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";

class SearchHandler extends Component {
  state = {
    item: null,
  };

  itemHandler = (event) => {
    this.setState({ item: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.item !== null) {
      console.log(this.state.item);
      this.props.ongetSearchItems(this.state.item);
      this.props.history.push("/search-results/" + this.state.item);
    }
  };

  render() {
    console.log(this.props.items);

    return (
      <SearchBar
        itemHandler={this.itemHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.shop.loading,
    items: state.shop.searchItems,
    error: state.shop.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ongetSearchItems: (keyword) => dispatch(actions.getSearchProducts(keyword)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchHandler));
