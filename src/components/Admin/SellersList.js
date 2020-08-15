import React, { Component } from 'react'

import axios from 'axios'
import { Card ,Table ,Container} from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getAdmin} from "../../store/actions/admin"



class sellerlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sellers: [],
            
            isLoading: false,
        }
    }
    static propTypes = {
      isAdmin: PropTypes.bool,
      isAuthenticated: PropTypes.bool,
      getAdmin:PropTypes.func.isRequired }

      

    componentDidMount = async () => {
      const {isAdmin,isAuthenticated}=this.props;
        this.setState({ isLoading: true })

        await axios.get("/admin/get-sellerlist").then(sellers => {
            this.setState({
                sellers: sellers.data.data,
                isLoading: false,
            })
        })
    }
  
    render() {
        const { sellers, isLoading } = this.state
        const {isAdmin,isAuthenticated}=this.props;
        console.log('TCL: MoviesList -> render -> movies', sellers)
     

        return (
            <Container fluid >
            <div>
            <div>
              <hr />
              <h4>
                <strong>
                  <font color="#40afbf">&nbsp;&nbsp;&nbsp;Sellers of Online Shopping</font>
                </strong>
              </h4>
              <hr />
            </div>
            <div>
              <Table striped bordered hover size="sm" style={{ marginTop: "2%" ,marginBottom:"2%" ,marginLeft:"2%",marginRight:"2%"}}>
                <tr>
                  <th>
                    <font color="lightseagreen">Name</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Address</font>
                  </th>
                  <th>
                    <font color="lightseagreen">City</font>
                  </th>
                  <th>
                    <font color="lightseagreen">State</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Zip Code</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Country</font>
                  </th>
                 
                  
                </tr>
    
                <tbody>
                {sellers.map((newseller) => {
                if (newseller._id != "") {
                    return (
                    <tr>
                    <td>{newseller.name}</td>
                    <td>{newseller.address}</td>
                    <td>{newseller.city}</td>
                    <td>{newseller.state}</td>
                    <td>{newseller.zip}</td>
                    <td>{newseller.country}</td>
                    
                    </tr>
                    );
         
        
                }
            }
            )}
                </tbody>
                </Table>
                </div>
                </div>
                </Container>
        );
        }}
        const mapStateToProps = (state) => ({
          isAuthenticated: state.auth.isAuthenticated,
          isAdmin:state.admin.isAdmin
          
        });
        
export default connect(mapStateToProps,{getAdmin})(sellerlist);