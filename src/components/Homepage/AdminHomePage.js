import React from "react";
import Carousel from "./Carousel";
import { Container, Row, Col, Image ,Card,Button ,Table} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Services from "./Services";
import "./Homepage.css";
import cart from "../../assets/cart3.jpg";
import user from "../../assets/customer3.jpeg";
import seller from "../../assets/seller2.jpg";
import producticon from "../../assets/producticon.png";
import products2 from "../../assets/products2.png";
//import "./Card.css";

const adminhomepage = (props) => {
   
 

    
    return (

        <div style={{ marginTop: "2%" ,marginBottom:"2%"}}>
        <Container fluid >
          <div sty>
            <Row>
              <Col>
                <div >
                <Card style={{ width: '18rem' ,backgroundColor:"#f3cbd5"}}>
                    <Card.Img variant="top" style={{ width: "18rem", height: "15rem",margin:"auto"}} src={products2} />
                    <Card.Body>
                        <Row>
                            <Col><Card.Title>Products</Card.Title></Col>
                            <Col><Card.Title>{localStorage.getItem("product_count")}</Card.Title></Col>
                        </Row>
                        <Card.Link href="/products">More Details</Card.Link>
                        
                    </Card.Body>
                    </Card>
                </div>
              </Col>
              <Col>
                <div>
                <Card style={{ width: '18rem' ,backgroundColor:"#a4f2c5" }}>
                    <Card.Img variant="top" style={{ width: "18rem", height: "15rem",margin:"auto"}} src={user} />
                    <Card.Body>
                        <Row>
                        <Col><Card.Title>Customers</Card.Title></Col>
                        <Col><Card.Title>{localStorage.getItem("user_count")}</Card.Title></Col>
                        
                        </Row>
                        <Card.Link href="/customers">More Details</Card.Link>
                    </Card.Body>
                    </Card>
                </div>
              </Col>
              <Col>
                <div>
                <Card style={{ width: '18rem' ,backgroundColor:"#f5f3f8" }}>
                    <Card.Img variant="top" style={{ width: "18rem", height: "15rem", margin: "auto" }} src={seller} />
                    <Card.Body>
                    <Row>
                        <Col><Card.Title>Sellers</Card.Title></Col>
                        <Col><Card.Title>{localStorage.getItem("seller_count")}</Card.Title></Col>
                    </Row>
                        <Card.Link href="/sellers">More Details</Card.Link>
                        
                    </Card.Body>
                    </Card>
                </div>
              </Col>
              <Col>
                <div>
                <Card style={{ width: '18rem' ,backgroundColor:"#bed3f3" }}>
                    <Card.Img variant="top" style={{ width: "18rem", height: "15rem", margin: "auto" }} src={cart} />
                    <Card.Body>
                        <Card.Title>Orders</Card.Title>
                        
                        <Card.Link href="#">More Details</Card.Link>
                        
                    </Card.Body>
                    </Card>
                </div>
              </Col>
            </Row>
          </div>
          </Container>


          <Container fluid style={{ marginTop: "2%" ,marginBottom:"2%" }}>
          
           
                <Card className="text-center" style={{ backgroundColor:"#bed3f3"}}>
                    <Card.Header>Latest Users</Card.Header>
                    <Card.Body>
                    <Table striped bordered hover size="sm" style={{ marginTop: "2%" ,marginBottom:"2%",backgroundColor:"white" }}>
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
                {props.users2.map((newuser) => {
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
                <Card.Link href="/customers">View More Users</Card.Link>
            </Card.Body>
         </Card>
        </Container>

        <Container fluid style={{ marginTop: "2%" ,marginBottom:"2%" }}>
          
        <div sty>
            <Row>
              <Col>
                <div>
                <Card className="text-center" style={{backgroundColor:"#bed3f3"}}>
                    <Card.Header>Latest Products</Card.Header>
                    <Card.Body>
                    <Table striped bordered hover size="sm" style={{ marginTop: "2%" ,marginBottom:"2%" ,marginLeft:"2%",marginRight:"2%",backgroundColor:"white"}}>
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
                    <font color="lightseagreen">Quantity</font>
                  </th>
                  
                </tr>
    
                <tbody>
                {props.products2.map((newproduct) => {
                if (newproduct._id != "") {
                    return (
                    <tr>
                    <td>{newproduct.title}</td>
                    <td>{newproduct.category}</td>
                    <td>{newproduct.subCategory}</td>
                    <td>{newproduct.quantity}</td>
                    </tr>
                    );
         
        
                }
                 }
                 )}
                </tbody>
                </Table>
                <Card.Link href="/products">View More Products</Card.Link>
                </Card.Body>

                </Card>
                </div>
                </Col>

                <Col>
                    <div>
                    <Card className="text-center">
                        <Card.Header>Revenue</Card.Header>
                        <Card.Body>

                        </Card.Body>

                    </Card>
                    </div>
                </Col>
            </Row>
        </div>

        </Container>


        <Container fluid style={{ marginTop: "2%" ,marginBottom:"2%" }}>
          
          <div sty>
              <Row>
                <Col>
                  <div>
                  <Card className="text-center" style={{backgroundColor:"#bed3f3" }}>
                      <Card.Header>Latest Orders</Card.Header>
                      <Card.Body>
                      <Table striped bordered hover size="sm" style={{backgroundColor:"white"}}>
                              <thead>
                                  <tr>
                                  <th>#</th>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Username</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                  <td>1</td>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                  </tr>
                                  <tr>
                                  <td>2</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                  </tr>
                                  <tr>
                                  <td>3</td>
                                  <td colSpan="2">Larry the Bird</td>
                                  <td>@twitter</td>
                                  </tr>
                              </tbody>
                              </Table>
                              
                      </Card.Body>
  
                  </Card>
                  </div>
                  </Col>
  
                  <Col>
                      <div>
                      <Card className="text-center" style={{ backgroundColor:"#bed3f3" }}>
                          <Card.Header>Latest Sellers</Card.Header>
                          <Card.Body>
                          <Table striped bordered hover size="sm" style={{ marginTop: "2%" ,marginBottom:"2%" ,marginLeft:"2%",marginRight:"2%",backgroundColor:"white"}}>
                            <tr>
                            <th>
                                <font color="lightseagreen">Name</font>
                            </th>
                            <th>
                                <font color="lightseagreen">Address</font>
                            </th>
                            <th>
                                <font color="lightseagreen">Country</font>
                            </th>
                            
                            
                            </tr>
                
                            <tbody>
                            {props.sellers2.map((newseller) => {
                            if (newseller._id != "") {
                                return (
                                <tr>
                                <td>{newseller.name}</td>
                                <td>{newseller.address}</td>
                                <td>{newseller.country}</td>
                                
                                </tr>
                                );
                    
                    
                            }
                        }
                        )}
                            </tbody>
                        </Table>
                        <Card.Link href="/sellers">View More Sellers</Card.Link>
  
                          </Card.Body>
  
                      </Card>
                      </div>
                  </Col>
              </Row>
          </div>
  
          </Container>

        
        </div>
    );

};

export default adminhomepage;