import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Container, Col, Row, Image, Spinner, Alert } from "react-bootstrap";
import EditItem from "../../components/Selling/EditItem";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Redirect, withRouter } from "react-router-dom";
import WithErrorHandler from "../../hoc/WitherrorHandler";
import axios from "axios";
import Modal from "../../components/UI/Modal";
import * as BackendUrl from "../../Shared/BackendUrl";

class EditItemHandler extends Component {
  state = {
    title: null,
    category: null,
    subCategory: null,
    condition: null,
    fileUrls: null,
    file: [],
    description: null,
    sellingArea: null,
    price: null,
    shippingFee: null,
    quantity: null,
    id: null,
    imagePreviewUrl: null,
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
    editError: null,
    editLoading: false,
  };

  componentWillMount() {
    const id = this.props.match.params.id;

    const token = localStorage.getItem("token");
    this.setState({ editLoading: true });
    axios
      .get("/shop/get-single-product", {
        params: {
          id: id,
        },
        headers: {
          "x-auth-token": token,
        },
      })
      .then((item) => {
        const tempItem = item.data[0];
        this.setState({
          title: tempItem.title,
          category: tempItem.category,
          subCategory: tempItem.subCategory,
          condition: tempItem.condition,
          fileUrls: tempItem.imageUrls,
          file: [],
          description: tempItem.description,
          sellingArea: tempItem.sellingArea,
          price: tempItem.price,
          shippingFee: tempItem.shippingFee,
          quantity: tempItem.quantity,
          id: tempItem._id,
        });
        this.props.ongetEditItem(item.data);

        this.setState({ editLoading: false, editError: null });
      })
      .catch((err) => {
        this.setState({ editError: err.message, editLoading: false });
      });
    if (this.props.succeeded) {
      this.clearDetails();
    }
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = () => {
    // event.preventDefault();

    this.props.onUpdateItem({
      id: this.state.id,
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
      fileUrls: this.state.fileUrls,
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
      quantity: null,
      price: null,
      shippingFee: null,
      file: [],
    });
    this.props.onSetSuccess();
    this.props.history.goBack();
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
    console.log(" remove", index);

    if (this.state.file.length - 1 >= index) {
      console.log("if remove");
      var files = [...this.state.file];
      files.splice(index, 1);
      this.setState({ file: files });
    } else {
      console.log("else remove");
      var files = [...this.state.fileUrls];
      files.splice(index - this.state.file.length, 1);
      this.setState({ fileUrls: files });
    }
  };

  render() {
    console.log(this.state);

    var imageArray = [];
    var remove = null;

    if (this.state.file.length > 0) {
      remove = (
        <strong style={{ fontSize: "15px", color: "green" }}>
          To remove click the image
        </strong>
      );
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
    }

    var preIndex = 0;
    if (this.state.file.length !== 0) {
      preIndex = this.state.file.length;
    }

    if (this.state.fileUrls) {
      this.state.fileUrls.map((i, index) => {
        imageArray.push(
          <Col sm>
            <Image
              className="img-responsive "
              style={{ maxHeight: "200px", maxWidth: "250px" }}
              onClick={() => this.removeImage(preIndex + index)}
              src={BackendUrl.getBUrl() + (i.name || i)}
              rounded
            />
          </Col>
        );
        console.log("render", preIndex);
      });
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

    var editItem = null;
    if (this.props.editProd) {
      editItem = this.props.editProd[0];
    }

    var form = null;
    if (this.state.title) {
      form = (
        <EditItem
          onChangeHandler={this.onChangeHandler}
          item={this.state}
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
        </EditItem>
      );
    }
    var loading = null;
    if (this.state.editLoading) {
      loading = (
        <div style={{ width: "100%", margin: "10% 0", textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />;
        </div>
      );
    }
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

    return (
      <div>
        <h2>Selling item Edit Form</h2>
        {loading}
        {err}
        {form}
        {modal}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.updateLoading,
    succeeded: state.products.updatedItem,
    editProd: state.products.editProd,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ongetEditItem: (item) => dispatch(actions.getEditProductSuccess(item)),
    onSetSuccess: () => dispatch(actions.setPostSuccess()),
    onUpdateItem: (item) => dispatch(actions.updateItem(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(withRouter(EditItemHandler), axios));
