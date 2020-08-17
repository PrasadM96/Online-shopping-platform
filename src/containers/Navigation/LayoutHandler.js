import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAdmin } from "../../store/actions/admin";
import * as actions from "../../store/actions/index";

import AdminLayout from "../../components/Navigation/AdminLayout";
import Layout from "../../components/Navigation/Layout";


class layouthandler extends Component {
    constructor(props) {
      super(props);

    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        admin: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired,
        modalstate: PropTypes.func.isRequired,
        //authCheckState: PropTypes.func.isRequired,
        modal: PropTypes.bool,
        getAdmin: PropTypes.func.isRequired,
      };

      toggle = () => {
        //clear errors
        const { modal } = this.props;
        this.props.onModatState();
      };

      componentDidMount (){
         this.props.onGetAdmin();

      }

      render() {
        const { isAuthenticated, user, isRegister } = this.props.auth;
        const { isAdmin } = this.props.admin;
        const sellerStatus = localStorage.getItem("sellerStatus");
        return isAdmin ? (
            <AdminLayout
            isAuthenticated={isAuthenticated}
          user={user}
          isRegister={isRegister}
          toggle={this.toggle}
          sellerStatus={this.sellerStatus}
          isAdmin={isAdmin}/>
          ) : (
            <Layout
            isAuthenticated={isAuthenticated}
          user={user}
          isRegister={isRegister}
          toggle={this.toggle}
          sellerStatus={this.sellerStatus}
          isAdmin={isAdmin} />
          );
        }
        


    }
    const mapStateToProps = (state) => ({
        auth: state.auth,
        modalstate: state.modalstate,
        admin: state.admin,
      });

      const mapDispatchToProps = (dispatch) => {
        return {
         // onAuthCheckState: () => dispatch(actions.authCheckState()),
          onModatState: () => dispatch(actions.modalstate()),
          onGetAdmin: () => dispatch(actions.getAdmin()),
        };
      };
      export default connect(mapStateToProps, mapDispatchToProps)(layouthandler);

    