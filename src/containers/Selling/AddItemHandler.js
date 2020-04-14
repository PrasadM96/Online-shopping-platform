import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Container, Col, Row, Image } from "react-bootstrap";
import AddItem from "../../components/Selling/AddItem.js";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Redirect } from "react-router-dom";

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
    files: [
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
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
      this.props.history("/");
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
      files: this.state.files,
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
      files: [
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    });
  };

  onDrop = (acceptedFiles) => {
    var temp = [];
    acceptedFiles.map((val) => {
      temp.push(val.path);
    });
    console.log(temp);

    var updatedfiles = [...this.state.files, ...temp];
    // console.log(updatedfiles);

    this.setState({ files: updatedfiles });
  };

  removeImage = (index) => {
    console.log(index);
    var files = [...this.state.files];
    files.splice(index, 1);
    this.setState({ files: files });
  };

  render() {
    var imageArray;
    var remove;

    // if (this.props.succeeded) {
    //   this.clearDetails();
    // }

    if (this.state.files.length > 0) {
      remove = <p>To remove click the image</p>;
      imageArray = this.state.files.map((i, index) => {
        return (
          <Col sm>
            <Image
              style={{ width: "300px", height: "200px" }}
              onClick={() => this.removeImage(index)}
              src={i}
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

    const maxSize = 1048576;

    return (
      <div>
        <AddItem
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
                height: "5rem",
                background: "#e9ecef",
              }}
            >
              <Dropzone
                onDrop={this.onDrop}
                accept="image/png ,image/jpeg, image/jpg"
                minSize={0}
                maxSize={maxSize}
                multiple
              >
                {({
                  getRootProps,
                  getInputProps,
                  isDragActive,
                  isDragReject,
                  rejectedFiles,
                }) => {
                  const isFileTooLarge =
                    rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
                  return (
                    <div style={{ height: "100%" }} {...getRootProps()}>
                      <input {...getInputProps()} />
                      {!isDragActive && "Click here or drop a file to upload!"}
                      {isDragActive &&
                        !isDragReject &&
                        "Drop it like it's hot!"}
                      {isDragReject && "File type not accepted, sorry!"}
                      {isFileTooLarge && (
                        <div className="text-danger mt-2">
                          File is too large.
                        </div>
                      )}
                    </div>
                  );
                }}
              </Dropzone>
            </div>

            <Row>{imageArray}</Row>
            {remove}
          </Container>
        </AddItem>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.loading,
    succeeded: state.products.succeeded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostItem: (item) => dispatch(actions.postProduct(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemHandler);
