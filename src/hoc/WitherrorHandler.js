import React, { Component } from "react";
import Modal from "../components/UI/Modal";
import Aux from "./Auxx";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      var modal = null;
      if (this.state.error) {
        modal = (
          <Modal
            //show={this.state.error}
            errorConfirmedHandler={this.errorConfirmedHandler}
            message={this.state.error.message}
            title="Error"
          ></Modal>
        );
      }

      return (
        <Aux>
          {modal}
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
