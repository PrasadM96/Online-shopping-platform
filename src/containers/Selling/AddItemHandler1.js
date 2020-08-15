import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Container, Col, Row, Image } from "react-bootstrap";
import AddItem from "../../components/Selling/AddItem1";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Redirect, withRouter } from "react-router-dom";
import WithErrorHandler from "../../hoc/WitherrorHandler";
import axios from "axios";
import Modal from "../../components/UI/Modal";

class AddItemHandler extends Component {
  state = {
    title: "",
    category: "",
    subCategory: "",
    condition: "",
    file: "",
    description: "",
    sellingArea: "",
    price: "",
    shippingFee: "",
    quantity: "",

    subcate: {
      Electronics: [
        "CellPhone & Accessories",
        "Smart Watch",
        "Computers & tablets",
        "Cameras",
      ],
      Fashion: ["Women's Clothing", "Men's Clothing", "Shoes", "Watches"],
      Health: ["Make up", "Healthcare", "Nailcare", "Haircare"],
      Sports: ["Outdoor Sporting", "Indoor Sporting", "Hunting", "Fishing"],
      Home: ["Tools", "Baby", "Kithen Dining"],
      Stationary: ["Books", "Writing Materials", "Bags", "Wrappings"],
    },
  };

  componentDidMount() {
    if (this.props.succeeded) {
      this.clearDetails();
    }
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = () => {
    // event.preventDefault();

    console.log(this.state);
    this.props.onPostItem({
      title: this.state.title,
      category: this.state.category,
      subCategory: this.state.subCategory,
      condition: this.state.condition,
      description: this.state.description,
      sellingArea: this.state.sellingArea,
      quantity: this.state.quantity,
      price: this.state.price,
      shippingFee: this.state.shippingFee,
      files: this.state.file,
    });
  };

  clearDetails = () => {
    this.setState({
      title: "",
      category: "",
      subCategory: "",
      condition: "",
      description: "",
      sellingArea: "",
      quantity: "",
      price: "",
      shippingFee: "",
      file: [],
    });
    this.props.onSetSuccess();
    this.props.history.push("/selling/my-items");
  };

  getImages = (e) => {
    var temp = e.target.files;
    var updatedfiles;
    if (!this.state.file) {
      updatedfiles = [...temp];
    } else {
      updatedfiles = [...this.state.file, ...temp];
    }
    this.setState({ file: updatedfiles });
  };

  removeImage = (index) => {
    console.log(index);
    var files = [...this.state.file];
    files.splice(index, 1);
    this.setState({ file: files });
  };

  render() {
    if (this.props.editProd) console.log(this.props.editProd[0].imageUrls);

    var imageArray;
    var remove;

    if (this.state.file) {
      remove = <p>To remove click the image</p>;
      imageArray = this.state.file.map((i, index) => {
        return (
          <Col sm>
            <Image
              className="img-responsive"
              style={{ maxHeight: "200px", maxWidth: "250px" }}
              onClick={() => this.removeImage(index)}
              src={URL.createObjectURL(i)}
              rounded
            />
          </Col>
        );
      });
    } else {
      imageArray = null;
      remove = null;
    }

    var subCateArr = [];

    if (this.state.category) {
      var categoryVal = this.state.category.toString();
      subCateArr = this.state.subcate[categoryVal];
    }

    var modal = null;
    if (this.props.succeeded) {
      modal = (
        <Modal
          message="Success"
          title="Success"
          errorConfirmedHandler={this.clearDetails}
        ></Modal>
      );
    }
    var errormsg = null;

    if (this.props.error) {
      errormsg = this.props.error;
    }

    var name = <h2>Selling Item Form</h2>;

    var editItem = null;
    if (this.props.editProd) {
      editItem = this.props.editProd[0];
    }

    return (
      <div>
        {name}
        {errormsg}

        <AddItem
          onChangeHandler={this.onChangeHandler}
          item={/*editItem ||*/ this.state}
          loading={this.props.loading}
          subCateArr={subCateArr}
          onSubmitHandler={this.onSubmitHandler}
        >
          <Container fluid>
            <div
              className="text-center mt-5"
              style={{
                border: "1px solid #eee",
                background: "#e9ecef",
              }}
            >
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    multiple
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={this.getImages}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </div>

            <Row>{imageArray}</Row>
            {remove}
          </Container>
        </AddItem>
        {modal}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.loading,
    succeeded: state.products.succeeded,

    // editProd: state.products.editProd,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostItem: (item) => dispatch(actions.postProduct(item)),
    onSetSuccess: () => dispatch(actions.setPostSuccess()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(withRouter(AddItemHandler), axios));
