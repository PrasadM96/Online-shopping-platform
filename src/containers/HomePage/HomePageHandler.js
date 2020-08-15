import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAdmin } from "../../store/actions/admin";

import AdminHomePage from "../../components/Homepage/AdminHomePage";
import Homepage from "../../components/Homepage/Homepage";

class homepagehandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      users2: [],
      products: [],
      products2: [],
      sellers: [],
      sellers2: [],
      orders:[],
      orders2:[],
      isLoading: false,
      //status:false
    };
  }

  static propTypes = {
    isAdmin: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    getAdmin: PropTypes.func.isRequired,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated);
    //  const {isAdmin,isAuthenticated} = this.props;

    //get users for admin page
    await axios.get("/admin/get-users").then((users) => {
      this.setState({
        users: users.data.data,
        isLoading: false,
      });
    });

    var i = 0;
    this.state.users.map((user) => {
      if (i < 3) {
        this.state.users2.push(user);
      }
      i = i + 1;
    });
    localStorage.setItem("user_count", i);
    //get products for admin home page

    await axios.get("/admin/get-productlist").then((products) => {
      this.setState({
        products: products.data.data,
      });
    });

    var i = 0;
    this.state.products.map((product) => {
      if (i < 3) {
        this.state.products2.push(product);
      }
      i = i + 1;
    });
    localStorage.setItem("product_count", i);
    //get sellers for admin home page

    await axios.get("/admin/get-sellerlist").then((sellers) => {
      this.setState({
        sellers: sellers.data.data,
      });
    });

    var i = 0;
    this.state.sellers.map((seller) => {
      if (i < 3) {
        this.state.sellers2.push(seller);
      }
      i = i + 1;
    });
    localStorage.setItem("seller_count", i);

    //get orderss for admin home page
    await axios.get("/admin/get-orders").then((orders) => {
        this.setState({
          orders: orders.data.data,
        });
      });
  
      var i = 0;
      this.state.orders.map((orders) => {
        if (i < 3) {
          this.state.orders2.push(orders);
        }
        i = i + 1;
      });
      localStorage.setItem("orders_count", i);
    
  };

  render() {
    const { isLoading, users2, products2, sellers2,orders,orders2 } = this.state;
    const { isAdmin, isAuthenticated } = this.props;
    console.log("status", isAuthenticated);
    console.log(isAdmin);

    return isAdmin ? (
      <AdminHomePage
        users2={this.state.users2}
        products2={this.state.products2}
        sellers2={this.state.sellers2}
        orders={orders}
        orders2={orders2}
      />
    ) : (
      <Homepage />
    );
  }
}
const mapStateToProps = (state) => ({
  isAdmin: state.admin.isAdmin,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getAdmin })(homepagehandler);
