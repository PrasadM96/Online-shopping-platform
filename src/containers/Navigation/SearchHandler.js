import SearchBar from "../../components/Navigation/SearchBar";
import React, { Component } from "react";

class SearchHandler extends Component {
  state = {
    item: null
  };

  itemHandler = event => {
    this.setState({ item: event.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.item !== null) {
      console.log(this.state.item);
    }
  };

  render() {
    return (
      <SearchBar
        itemHandler={this.itemHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

export default SearchHandler;
