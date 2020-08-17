import React from "react";
import Carousel from "./Carousel";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Table,
} from "react-bootstrap";
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
  const getParsedDate = (strDate) => {
    var strSplitDate = String(strDate).split(" ");
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
  };
  return (
    <div style={{ marginTop: "2%", marginBottom: "2%" }}>
      <Container fluid>
        <div sty>
          <Row>
            <Col>
              <div>
                <Card style={{ width: "18rem", backgroundColor: "#f3cbd5" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "18rem", height: "15rem", margin: "auto" }}
                    src={products2}
                  />
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>Products</Card.Title>
                      </Col>
                      <Col>
                        <Card.Title>
                          {props.productCount}
                        </Card.Title>
                      </Col>
                    </Row>
                    <Card.Link href="/admin/products">More Details</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card style={{ width: "18rem", backgroundColor: "#a4f2c5" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "18rem", height: "15rem", margin: "auto" }}
                    src={user}
                  />
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>Customers</Card.Title>
                      </Col>
                      <Col>
                        <Card.Title>
                          {props.userCount}
                        </Card.Title>
                      </Col>
                    </Row>
                    <Card.Link href="/admin/customers">More Details</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card style={{ width: "18rem", backgroundColor: "#f5f3f8" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "18rem", height: "15rem", margin: "auto" }}
                    src={seller}
                  />
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>Sellers</Card.Title>
                      </Col>
                      <Col>
                        <Card.Title>
                          {props.sellerCount}
                        </Card.Title>
                      </Col>
                    </Row>
                    <Card.Link href="/admin/sellers">More Details</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card style={{ width: "18rem", backgroundColor: "#bed3f3" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "18rem", height: "15rem", margin: "auto" }}
                    src={cart}
                  />
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>Orders</Card.Title>
                      </Col>
                      <Col>
                        <Card.Title>
                          {props.orderCount}
                        </Card.Title>
                      </Col>
                    </Row>
                    <Card.Link href="/orders">More Details</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container fluid style={{ marginTop: "2%", marginBottom: "2%" }}>
        <Card className="text-center" style={{ backgroundColor: "#bed3f3" }}>
          <Card.Header>Latest Users</Card.Header>
          <Card.Body>
            <Table
              striped
              bordered
              hover
              size="sm"
              style={{
                marginTop: "2%",
                marginBottom: "2%",
                backgroundColor: "white",
              }}
            >
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
                })}
              </tbody>
            </Table>
            <Card.Link href="/admin/customers">View More Users</Card.Link>
          </Card.Body>
        </Card>
      </Container>

      <Container fluid style={{ marginTop: "2%", marginBottom: "2%" }}>
        <div sty>
          <Row>
            <Col>
              <div>
                <Card
                  className="text-center"
                  style={{ backgroundColor: "#bed3f3" }}
                >
                  <Card.Header>Latest Products</Card.Header>
                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      size="sm"
                      style={{
                        marginTop: "2%",
                        marginBottom: "2%",
                        marginLeft: "2%",
                        marginRight: "2%",
                        backgroundColor: "white",
                      }}
                    >
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
                        })}
                      </tbody>
                    </Table>
                    <Card.Link href="/admin/products">View More Products</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col>
              <div>
                <Card className="text-center">
                  <Card.Header>Revenue</Card.Header>
                  <Card.Body></Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container fluid style={{ marginTop: "2%", marginBottom: "2%" }}>
        <div sty>
          <Row>
            <Col>
              <div>
                <Card
                  className="text-center"
                  style={{ backgroundColor: "#bed3f3" }}
                >
                  <Card.Header>Latest Orders</Card.Header>
                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      size="sm"
                      style={{ backgroundColor: "white" }}
                    >
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                     
                      </Table>
                      <Card.Link href="/admin/orders">View More Orders</Card.Link>
                    </Card.Body>
                  </Card>
              </div>
            </Col>

            <Col>
              <div>
                <Card
                  className="text-center"
                  style={{ backgroundColor: "#bed3f3" }}
                >
                  <Card.Header>Latest Sellers</Card.Header>
                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      size="sm"
                      style={{
                        marginTop: "2%",
                        marginBottom: "2%",
                        marginLeft: "2%",
                        marginRight: "2%",
                        backgroundColor: "white",
                      }}
                    >
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
                        })}
                      </tbody>
                    </Table>
                    <Card.Link href="/admin/sellers">View More Sellers</Card.Link>
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
