import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Container, Col, Row, Image, Form, FormControl } from "react-bootstrap";
import AddItem from "../../components/Selling/AddItem.js";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Redirect, withRouter } from "react-router-dom";
import WithErrorHandler from "../../hoc/WitherrorHandler";
import axios from "axios";
import Modal from "../../components/UI/Modal";

class AddItemHandler extends Component {
  state = {
    title: null,
    category: null,
    subCategory: null,
    condition: null,
    description: null,
    sellingArea: null,
    price: null,
    shippingFee: null,
    file: null,

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
    },
  };

  componentDidMount() {
    if (this.props.succeeded) {
      this.clearDetails();
      console.log("falgggg");
    }
  }

  titleHandler = (event) => {
    this.setState({ title: event.target.value });
  };
  categoryHandler = (event) => {
    console.log(event.target.value);

    this.setState({ category: event.target.value });
  };
  subCategoryHandler = (event) => {
    console.log(event.target.value);
    this.setState({ subCategory: event.target.value });
  };
  conditionHandler = (event) => {
    console.log(event.target.value);
    this.setState({ condition: event.target.value });
  };
  descriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };
  sellingAreaHandler = (event) => {
    console.log(event.target.value);
    this.setState({ sellingArea: event.target.value });
  };
  priceHandler = (event) => {
    this.setState({ price: event.target.value });
  };
  shippingFeeHandler = (event) => {
    this.setState({ shippingFee: event.target.value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit------------------");
    console.log(this.state.file);
    console.log(this.state);
    this.props.onPostItem({
      title: this.state.title,
      category: this.state.category,
      subCategory: this.state.subCategory,
      condition: this.state.condition,
      description: this.state.description,
      sellingArea: this.state.sellingArea,
      price: this.state.price,
      shippingFee: this.state.shippingFee,
      files: this.state.file,
    });
  };

  clearDetails = () => {
    this.setState({
      title: null,
      category: null,
      subCategory: null,
      condition: null,
      description: null,
      sellingArea: null,
      price: null,
      shippingFee: null,
      file: [],
    });
  };

  // onDrop = (acceptedFiles) => {
  //   var temp = [];
  //   acceptedFiles.map((val) => {
  //     temp.push(val.path);
  //   });
  //   console.log(acceptedFiles);

  //   var updatedfiles = [this.state.files, temp];
  //   // console.log(updatedfiles);

  //   this.setState({ files: updatedfiles });
  // };

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
    var imageArray;
    var remove;

    // if (this.props.succeeded) {
    //   this.clearDetails();
    // }

    if (this.state.file) {
      remove = <p>To remove click the image</p>;
      imageArray = this.state.file.map((i, index) => {
        return (
          <Col sm>
            <Image
              style={{ width: "300px", height: "200px" }}
              onClick={() => this.removeImage(index)}
              src={i.name}
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
          errorConfirmedHandler={this.props.onSetSuccess}
        ></Modal>
      );
    }

    console.log(this.state.file);

    return (
      <div>
        <AddItem
          price={this.state.price}
          loading={this.props.loading}
          subCateArr={subCateArr}
          titleHandler={this.titleHandler}
          categoryHandler={this.categoryHandler}
          subCategoryHandler={this.subCategoryHandler}
          descriptionHandler={this.descriptionHandler}
          conditionHandler={this.conditionHandler}
          sellingAreaHandler={this.sellingAreaHandler}
          priceHandler={this.priceHandler}
          shippingFeeHandler={this.shippingFeeHandler}
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
    error: state.products.error,
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
