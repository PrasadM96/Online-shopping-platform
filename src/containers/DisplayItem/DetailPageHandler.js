import React, { Component } from "react";
import DetailPage from "../../components/DisplayItem/DetailPage";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Spinner, Alert } from "react-bootstrap";
import axios from "axios";

class DetailPageHandler extends Component {
  state = {
    loading: false,
    error: null,
  };

  componentDidMount() {
    // console.log(this.props.items);
    // if (this.props.addtoCartSuccess) {
    //   this.props.history.push("/cart");
    // }
    const id = this.props.match.params.id;
    this.props.onGetDetailItem(id);
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
    console.log(this.props.detailItem);
    var item = null;

    // item = { ...item[0] };
    var err = null;
    if (this.props.error) {
      err = (
        <Alert
          style={{ margin: " 2% auto", textAlign: "center", width: "60%" }}
          variant="danger"
        >
          {this.props.error}
        </Alert>
      );
    }

    var loading = null;

    if (this.props.loading) {
      loading = (
        <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />;
        </div>
      );
    }

    var detailPage = null;
    if (this.props.detailItem) {
      item = this.props.detailItem[0];
      detailPage = (
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

    return (
      <div>
        {loading}
        {err}
        {detailPage}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailItem: state.shop.detailItem,
    loading: state.shop.detailItemLoading,
    error: state.shop.detailItemError,
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
    onGetDetailItem: (id) => dispatch(actions.getDetailSingleItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPageHandler);
