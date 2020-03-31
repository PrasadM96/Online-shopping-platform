import React from "react";
import { Navbar, NavDropdown, Nav, NavItem } from "react-bootstrap";
import Aux from "../../hoc/Auxx";
import { NavLink, Link } from "react-router-dom";

const layout = props => {
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
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/deets">More deets</Nav.Link>
            <Nav.Link as={NavLink} to="/signin" href="/signin">
              SignIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </Aux>
  );
};

export default layout;
