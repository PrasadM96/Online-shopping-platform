import React from "react";
import { Navbar, NavDropdown, Nav, NavItem } from "react-bootstrap";
import Aux from "../../hoc/Auxx";
import { NavLink, Link } from "react-router-dom";

const layout = (props) => {
  return (
    <Aux>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/" href="/">
          Online Shopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/features" href="/features">
              Features
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/selling/overview"
              href="/selling/overview"
            >
              Sell
            </Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/category/health"
                href="/category/health"
              >
                Health
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/electronics"
                href="/category/electronics"
              >
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/fashion"
                href="/category/fashion"
              >
                Fashion
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/sports"
                href="/category/sports"
              >
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/stationary"
                href="/category/stationary"
              >
                Stationary
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/home-appliances"
                href="/category/home-appliances"
              >
                Home Appliances
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/signin" href="/signin">
              SignIn
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup" href="/signup">
              SignUp
            </Nav.Link>
            <NavDropdown title="Username" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/profile" href="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/orders" href="/orders">
                Orders
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/logout" href="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </Aux>
  );
};

export default layout;
