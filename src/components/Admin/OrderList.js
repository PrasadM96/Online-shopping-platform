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

    await axios.get("/admin/get-orders").then((orders) => {
      this.setState({
        orders: orders.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { orders, isLoading } = this.state;
    const { isAdmin } = this.props;
    console.log(isAdmin);
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
                  <font color="lightseagreen">Items</font>
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
                      items.push(<td>{item.productId}</td>)
                    );
                    newproduct.items.forEach((item) =>
                      items.push(<td>{item.quantity}</td>)
                    );
                    return (
                      <tr>
                        <td>{newproduct.updatedAt}</td>
                        <td>{newproduct.user.details.firstname}</td>
                        <td>{newproduct.user.details.lastname}</td>
                        <td>{newproduct.user.details.country}</td>
                        <td>{newproduct.user.details.province}</td>
                        <td>{newproduct.user.details.zipCode}</td>
                        <td>{newproduct.user.details.teleNumber}</td>
                        {items}
                        {quantity}
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
