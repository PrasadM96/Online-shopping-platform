import React, { Component } from "react";
import "./RegisterModal.css";
import { Button, Modal, Col, Form, Nav, Alert } from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAdmin } from "../../store/actions/admin";
import { register, login } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";
import { modalstate } from "../../store/actions/modalActions";

class RegisterModal extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    msgLogin: null,
    msgRegister: null,
    //  modal:false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isRegister: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    modalstate: PropTypes.func.isRequired,
    modal: PropTypes.bool,
    getAdmin:PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated, isRegister, modal } = this.props;

    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        //check for register error
        console.log(error.msg.msg);
        this.setState({ msgRegister: error.msg.msg });
      } else if (error.id === "LOGIN_FAIL") {
        //check for register error
        this.setState({ msgLogin: error.msg.msg });
      } else {
        this.setState({ msgLogin: null });
        this.setState({ msgRegister: null });
      }
    }
    //if authenticated close the modal
    if (modal) {
      // console.log(isRegister)
      // console.log(isAuthenticated)
      if (isAuthenticated) {
        this.toggle();
      //  this.props.getAdmin();
      }
    }

    if (isRegister) {
      var element = document.getElementById("container1");
      if (element) {
        element.classList.remove("right-panel-active");
      }
    }
  }

  toggle = () => {
    //clear errors
    // console.log(this.state.modal)
    this.props.clearErrors();
    this.props.modalstate();
    // this.setState({modal :!this.state.modal});
    //console.log(this.state.modal)
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickSignUp = (e) => {
    this.props.clearErrors();
    var element = document.getElementById("container1");
    if (element) {
      element.classList.remove("right-panel-active");
    }
    //  console.log(this.state.modal)
  };

  onClickSignIn = (e) => {
    this.props.clearErrors();
    var element = document.getElementById("container1");
    if (element) {
      element.classList.add("right-panel-active");
    }
  };

  onSubmit1 = (e) => {
    e.preventDefault();

    const { first_name, last_name, email, password } = this.state;

    //create a use object
    const newUser = {
      first_name,
      last_name,
      email,
      password,
    };
    //Attempt to register
    this.props.register(newUser);
  };

  onSubmit2 = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };
    //attempt to login
    this.props.login(user);
  };

  render() {
    const { modal } = this.props;
    // console.log(modal);
    return (
      <div>
        <Modal
          show={modal}
          onHide={this.toggle}
          dialogClassName="custom-modal-style"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div class="container1" id="container1">
              <div class="form-container1 sign-up-container">
                <Form>
                  <h2>Sign Up</h2>
                  {this.state.msgRegister ? (
                    <Alert variant="danger">{this.state.msgRegister}</Alert>
                  ) : null}

                  <Form.Row>
                    <Form.Group as={Col} controlId="formfirstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="first_Name"
                        className="mb-3"
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="forlastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="last_Name"
                        className="mb-3"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formpassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Label></Form.Label>
                  </Form.Row>

                  <Button
                    variant="outline-warning"
                    size="lg"
                    style={({ marginTop: "2rem" }, { borderRadius: "20px" })}
                    block
                    onClick={(e) => {
                      this.onSubmit1(e);
                    }}
                  >
                    SIGN UP
                  </Button>
                </Form>
              </div>

              <div class="form-container1 sign-in-container">
                <Form>
                  <h2>Sign In</h2>

                  {this.state.msgLogin ? (
                    <Alert variant="danger">{this.state.msgLogin}</Alert>
                  ) : null}

                  <Form.Row>
                    <Form.Label></Form.Label>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}></Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group></Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formpassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group></Form.Group>
                  </Form.Row>

                  <Button
                    variant="outline-warning"
                    size="lg"
                    style={({ marginTop: "2rem" }, { borderRadius: "20px" })}
                    block
                    onClick={(e) => {
                      this.onSubmit2(e);
                    }}
                  >
                    SIGN IN
                  </Button>
                </Form>
              </div>

              <div class="overlay-container">
                <div class="overlay">
                  <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <Button
                      size="sm"
                      variant="outline-warning"
                      style={({ marginTop: "2rem" }, { borderRadius: "20px" })}
                      onClick={(e) => {
                        this.onClickSignIn(e);
                      }}
                    >
                      SIGN UP
                    </Button>
                  </div>
                  <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>

                    <Button
                      size="sm"
                      variant="outline-warning"
                      style={({ marginTop: "2rem" }, { borderRadius: "20px" })}
                      onClick={(e) => {
                        this.onClickSignUp(e);
                      }}
                    >
                      SIGN IN
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isRegister: state.auth.isRegister,
  error: state.error,
  modal: state.modal.modal,
});
export default connect(mapStateToProps, {
  register,
  clearErrors,
  login,
  modalstate,
  getAdmin
})(RegisterModal);
