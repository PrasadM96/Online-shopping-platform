import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../store/actions/index";
import * as BackendUrl from "../../Shared/BackendUrl";
import {
  Card,
  Button,
  Image,
  Container,
  Col,
  Row,
  Spinner,
} from "react-bootstrap";

class MyItem extends Component {
  state = {
    editError: null,
    editLoading: false,
    deleteError: null,
    deleteLoading: false,
  };

  render() {
    var error = null;
    if (this.editError) {
      error = <p>{this.editError}</p>;
    }

    var dError = null;
    if (this.props.deleteError) {
      dError = <p>Try again later!</p>;
    }
    return (
      <Card style={{ margin: "2% 5%" }}>
        <Card.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <Image
                  class="img-responsive"
                  style={{ maxHeight: "200px" }}
                  src={BackendUrl.getBUrl() + this.props.image}
                  rounded
                />
              </Col>
              <Col sm={8}>
                <h4>{this.props.title}</h4>
                <h5 style={{ color: "#8e8e8e" }}>${this.props.price}</h5>
                <h5 style={{ fontSize: "15px", color: "#8e8e8e" }}>
                  ${this.props.shippingFee} Shipping
                </h5>
                <hr></hr>
                <Button
                  style={{ marginLeft: "2%" }}
                  onClick={() => this.props.editHandler(this.props.id)}
                  variant="outline-warning"
                  // disabled={this.state.editLoading}
                >
                  Edit Item
                  {/* {this.state.editLoading ? "Loading.." : "Edit Item"} */}
                </Button>
                <Button
                  style={{ margin: "2% " }}
                  onClick={() => this.props.ondeleteSellingItem(this.props.id)}
                  variant="outline-danger"
                  disabled={this.props.deleteLoading}
                >
                  {this.props.deleteLoading ? "Deleting.." : "Delete Item"}
                </Button>
                {dError}
              </Col>
            </Row>

            {/* <Row>
            <Col>
              <div style={{ right: 0, bottom: 0, position: "absolute" }}></div>
            </Col>
          </Row> */}
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deleteLoading: state.products.deleteLoading,
    deleteError: state.products.deleteError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ondeleteSellingItem: (index) => dispatch(actions.deleteSellingItem(index)),
    ongetEditProductSuccess: (item) =>
      dispatch(actions.getEditProductSuccess(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyItem);
