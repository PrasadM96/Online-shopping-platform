import React from "react";
import Carousel from "../Carousel";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

const homepage = props => {
  return (
    <div>
      <Carousel />
      <Container fluid>
        <Row>
          <Col xl>
            <h1 style={{ marginTop: "2%" }}>Popular Categories</h1>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/fashion">
                <Image
                  src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  roundedCircle
                />
                <p>Fashion</p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/fashion">
                <Image
                  src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  roundedCircle
                />
                <p>Fashion</p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/fashion">
                <Image
                  src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  roundedCircle
                />
                <p>Fashion</p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/fashion">
                <Image
                  src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  roundedCircle
                />
                <p>Fashion</p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/fashion">
                <Image
                  src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  roundedCircle
                />
                <p>Fashion</p>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default homepage;
