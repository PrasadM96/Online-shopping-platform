import React ,{Component,Fragment} from 'react';
import {logout} from  '../../store/actions/authActions';
import {connect} from 'react-redux';
import {Nav} from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
} from "@fortawesome/fontawesome-free-solid";
import PropTypes from 'prop-types';


export class Logout extends Component{

    static propTypes = {
        logout : PropTypes.func.isRequired
    }
    render(){
        return(
            <div>
                 <Nav.Item>
              <Nav.Link onClick={this.props.logout} href="#">
              <FontAwesomeIcon icon="sign-out-alt" />
                <span> </span>
                  Logout
              </Nav.Link>
              </Nav.Item>
                 

            </div>
        )

    }
}

export default connect(
    null,
    {logout}
)(Logout);