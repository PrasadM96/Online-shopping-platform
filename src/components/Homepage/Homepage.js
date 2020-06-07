import React from "react";
import Carousel from "./Carousel";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Services from "./Services";
import "./Homepage.css";
import SearchBarHandler from "../../containers/Navigation/SearchHandler";

const homepage = (props) => {
  return (
    <div style={{ marginTop: "2%" }}>
      <Container fluid>
        <div sty>
          <Row>
            <Col>
              <div>
                <Carousel />
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xl>
            <h2 style={{ marginTop: "2%", marginLeft: "2%" }}>
              Explore Popular Categories
            </h2>
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
<<<<<<< HEAD
=======
              <NavLink to="/category/stationary">
                <Image
                  src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=338&ext=jpg"
                  roundedCircle
                />
                <p>Stationary</p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
>>>>>>> 07ed92c6171385a08d2fafaa859fefaa32f4b7f9
              <NavLink to="/category/health">
                <Image
                  src="https://images.pexels.com/photos/33355/capsule-pill-health-medicine.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  roundedCircle
                />
                <p>Health</p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/electronics">
                <Image
                  src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  roundedCircle
                />
                <p>Electronics</p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/sports">
                <Image
                  src="data:image/jpeg;base64,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"
                  roundedCircle
                />
                <p>Sports </p>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <div className="pic">
              <NavLink to="/category/home-appliances">
                <Image
                  src="data:image/jpeg;base64,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"
                  roundedCircle
                />
                <p>Home</p>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="services">
        <Services />
      </div>
    </div>
  );
};

export default homepage;
