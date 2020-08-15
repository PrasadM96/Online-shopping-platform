import React, { Component } from 'react'

import axios from 'axios'
import { Card ,Table ,Container} from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getAdmin} from "../../store/actions/admin"



class productlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            
            isLoading: false,
        }
    }

    static propTypes = {
      isAdmin: PropTypes.bool,
      isAuthenticated: PropTypes.bool,
      getAdmin:PropTypes.func.isRequired }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        const {isAuthenticated}=this.props;
        if(isAuthenticated){
          this.props.getAdmin();
    
        }

      await  axios.get("/admin/get-productlist").then(products => {
            this.setState({
                products: products.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { products, isLoading } = this.state
        const {isAdmin}=this.props;
        console.log(isAdmin);
        console.log('TCL: MoviesList -> render -> movies', products)
        const {isAuthenticated}=this.props;
        


        return (
            <Container fluid >
            <div>
            <div>
              <hr />
              <h4>
                <strong>
                  <font color="#40afbf">&nbsp;&nbsp;&nbsp;Products of Online Shopping</font>
                </strong>
              </h4>
              <hr />
            </div>
            <div>
              <Table striped bordered hover size="sm" style={{ marginTop: "2%" ,marginBottom:"2%" ,marginLeft:"2%",marginRight:"2%"}}>
                <tr>
                  <th>
                    <font color="lightseagreen">Title</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Category</font>
                  </th>
                  <th>
                    <font color="lightseagreen">SubCategory</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Description</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Selling Area</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Quantity</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Price</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Shpping Fee</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Condition</font>
                  </th>
                  
                </tr>
    
                <tbody>
                {products.map((newproduct) => {
                if (newproduct._id != "") {
                    return (
                    <tr>
                    <td>{newproduct.title}</td>
                    <td>{newproduct.category}</td>
                    <td>{newproduct.subCategory}</td>
                    <td>{newproduct.description}</td>
                    <td>{newproduct.sellingArea}</td>
                    <td>{newproduct.quantity}</td>
                    <td>{newproduct.price}</td>
                    <td>{newproduct.shppingFee}</td>
                    <td>{newproduct.condition}</td>
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
          //modalstate: state.modalstate,
        });
export default connect(mapStateToProps,{getAdmin})(productlist);