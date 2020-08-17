
import React, { Fragment } from "react";
import { Navbar, NavDropdown, Nav, NavItem } from "react-bootstrap";
import Aux from "../../hoc/Auxx";
import { NavLink, Link } from "react-router-dom";
import Cart from "../Cart/";
import styled from "styled-components";
import { ButtonContainer } from "../../components/Styled/Button";

import RegisterModal from "../Authentication/RegisterModal";

import Logout from "../Authentication/Logout";


const adminlayout = (props) => {
return (
    <Aux>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/" href="/">
          Online Shopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>

        <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/products" href="/products">
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} to="/customers" href="/customers">
                Customers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sellers" href="/sellers">
                Sellers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/orders" href="/orders">
                Orders
              </Nav.Link>
         </Nav>

            {props.isAuthenticated && props.isRegister ? (
            <Nav className="ml-auto">
              
                <Fragment>
                  <NavItem>
                    <Logout />
                  </NavItem>
                </Fragment> 
                </Nav>): (
            <Nav className="ml-auto">
              <Fragment>
                <Nav.Link as={NavLink} to="/cart" href="/cart">
                  My Cart
                </Nav.Link>

                <Nav.Link onClick={props.toggle} href="#">
                  Register
                </Nav.Link>
              </Fragment>
            </Nav>
            
          )}
        
      </Navbar>
      {props.children}
    </Aux>
  );
};
export default adminlayout;