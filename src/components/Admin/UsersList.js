import React, { Component } from 'react'

import axios from 'axios'
import { Card ,Table ,Container} from "react-bootstrap";




class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        
        this.setState({ isLoading: true })

        await axios.get("/admin/get-users").then(users => {
            this.setState({
                users: users.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { users, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', users)


        return (
            <Container fluid >
            <div>
            <div>
              <hr />
              <h4>
                <strong>
                  <font color="#40afbf">&nbsp;&nbsp;&nbsp;Users of Online Shopping</font>
                </strong>
              </h4>
              <hr />
            </div>
            <div>
              <Table striped bordered hover size="sm" style={{ marginTop: "2%" ,marginBottom:"2%" ,marginLeft:"2%",marginRight:"2%"}}>
                <tr>
                  <th>
                    <font color="lightseagreen">First Name</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Last Name</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Address1</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Address2</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Email</font>
                  </th>
                  <th>
                    <font color="lightseagreen">City</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Province</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Country</font>
                  </th>
                  <th>
                    <font color="lightseagreen">Zip Code</font>
                  </th>
                </tr>
    
                <tbody>
                {users.map((newuser) => {
                if (newuser._id != "") {
                    return (
                    <tr>
                    <td>{newuser.first_name}</td>
                    <td>{newuser.last_name}</td>
                    <td>{newuser.address1}</td>
                    <td>{newuser.address2}</td>
                    <td>{newuser.email}</td>
                    <td>{newuser.city}</td>
                    <td>{newuser.province}</td>
                    <td>{newuser.country}</td>
                    <td>{newuser.zip}</td>
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
export default UsersList;