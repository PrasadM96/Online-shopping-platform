import React, { Component } from "react";
import DetailPage from "../../components/DisplayItem/DetailPage";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import axios from "axios";

class DetailPageHandler extends Component {
  state = {
    loading: false,
    error: null,
  };

  componentDidMount() {
    console.log(this.props.items);
    if (this.props.addtoCartSuccess) {
      this.props.history.push("/cart");
    }
  }

  buyitNowHandler = (id) => {
    if (!this.props.isAuthenticated) {
      this.props.onModalState();
      console.log("solve");
    } else {
      this.props.history.push("/checkout/" + this.props.match.params.id);
    }
  };

  addtoCartHandler = (id) => {
    if (!this.props.isAuthenticated) {
      this.props.onModalState();
      console.log("solve");
    } else {
      console.log("To cart");

      //this.props.onAddItemToCart(id);
      const token = localStorage.getItem("token");
      
      this.setState({ loading: true });
      axios
        .post(
          "/shop/add-to-cart",
          { productId: id },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((results) => {
          // dispatch(addToCartSuccess(results));
          this.setState({
            loading: false,
            error: null,
          });
          this.props.history.push("/cart");
        })
        .catch((err) => {
          this.setState({
            loading: false,
            error: err.message,
          });
          // dispatch(addToCartFail(err));
        });
    }
    //this.props.addToCart(id);
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
        quantity={item.quantity}
        price={item.price}
        shippingFee={item.shippingFee}
        seller={"email"}
        id={item._id}
        description={item.description}
        loading={this.state.loading}
        error={this.state.error}
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
    addtoCartSuccess: state.shop.addtoCartSuccess,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(actions.addToCart(id)),
    onAddItemToCart: (id) => dispatch(actions.addItemToCart(id)),
    onModalState: () => dispatch(actions.modalstate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPageHandler);
