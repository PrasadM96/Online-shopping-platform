import React, { Component } from "react";

import axios from "axios";
import { Card, Table, Container } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAdmin } from "../../store/actions/admin";

class productlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],

      isLoading: false,
    };
  }

  getParsedDate = (strDate) => {
    var strSplitDate = String(strDate).split(" ");
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
  };
  static propTypes = {
    isAdmin: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    getAdmin: PropTypes.func.isRequired,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      this.props.getAdmin();
    }

    const token = localStorage.getItem("token");

    if (!this.props.isAdmin) {
      await axios
        .get("/admin/get-orders", {
          headers: {
            "x-auth-token": token,
          },
        })
        .then((orders) => {
          this.setState({
            orders: orders.data.data,
            isLoading: false,
          });
        });
    } else {
      await axios
        .get("/user/get-orders", {
          headers: {
            "x-auth-token": token,
          },
        })
        .then((orders) => {
          this.setState({
            orders: orders.data.data,
            isLoading: false,
          });
        });
    }
  };

  render() {
    const { orders, isLoading } = this.state;
    const { isAdmin } = this.props;
    const { isAuthenticated } = this.props;

    return (
      <Container fluid>
        <div>
          <div>
            <hr />
            <h4>
              <strong>
                <font color="#40afbf">
                  &nbsp;&nbsp;&nbsp;Orders of Online Shopping
                </font>
              </strong>
            </h4>
            <hr />
          </div>
          <div>
            <Table
              striped
              bordered
              hover
              size="sm"
              style={{
                marginTop: "2%",
                marginBottom: "2%",
                marginLeft: "2%",
                marginRight: "2%",
              }}
            >
              <tr>
                <th>
                  <font color="lightseagreen">Date</font>
                </th>
                <th>
                  <font color="lightseagreen">First Name</font>
                </th>
                <th>
                  <font color="lightseagreen">Last Name</font>
                </th>
                <th>
                  <font color="lightseagreen">Country</font>
                </th>
                <th>
                  <font color="lightseagreen">Province</font>
                </th>
                <th>
                  <font color="lightseagreen">Zip Code</font>
                </th>
                <th>
                  <font color="lightseagreen">Telephone</font>
                </th>
                <th>
                  <font color="lightseagreen">Item ID</font>
                </th>
                <th>
                  <font color="lightseagreen">Quantity</font>
                </th>
                <th>
                  <font color="lightseagreen">Total Price</font>
                </th>
              </tr>

              <tbody>
                {orders.map((newproduct) => {
                  if (newproduct._id != "") {
                    const items = [];
                    const quantity = [];
                    newproduct.items.forEach((item) =>
                      items.push(<div>{item.productId}</div>)
                    );
                    newproduct.items.forEach((item) =>
                      quantity.push(<div>{item.quantity}</div>)
                    );
                    return (
                      <tr>
                        <td>{this.getParsedDate(newproduct.updatedAt)}</td>
                        <td>{newproduct.user.details.firstname}</td>
                        <td>{newproduct.user.details.lastname}</td>
                        <td>{newproduct.user.details.country}</td>
                        <td>{newproduct.user.details.province}</td>
                        <td>{newproduct.user.details.zipCode}</td>
                        <td>{newproduct.user.details.teleNumber}</td>
                        <td>{items}</td>
                        <td>{quantity}</td>
                        <td>
                          <span>{`$` + newproduct.totalPrice}</span>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.admin.isAdmin,
  //modalstate: state.modalstate,
});
export default connect(mapStateToProps, { getAdmin })(productlist);
