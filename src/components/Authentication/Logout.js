import React ,{Component,Fragment} from 'react';
import {logout} from  '../../store/actions/authActions';
import {connect} from 'react-redux';
import {Nav} from 'react-bootstrap';

import PropTypes from 'prop-types';


export class Logout extends Component{

    static propTypes = {
        logout : PropTypes.func.isRequired
    }
    render(){
        return(
            <div>
                 <Nav.Item>
              <Nav.Link onClick={this.props.logout} href="/">
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