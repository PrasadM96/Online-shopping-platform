import React, { Fragment } from "react";
import { Navbar, NavDropdown, Nav, NavItem } from "react-bootstrap";
import Aux from "../../hoc/Auxx";
import { NavLink, Link } from "react-router-dom";
import Cart from "../Cart/";
import styled from "styled-components";
import { ButtonContainer } from "../../components/Styled/Button";

import RegisterModal from "../Authentication/RegisterModal";

import Logout from "../Authentication/Logout";

const layout = (props) => {
  
  return (
    <Aux>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/" href="/">
          Online Shopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {!props.isAdmin ? (
          <Nav className="mr-auto">
          
            <Nav.Link as={NavLink} to="/features" href="/features">
              Features
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/selling"
              href="/selling"
              onClick={props.checkState}
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
          </Nav>)
          : (
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
        </Nav> 
        )}
        {props.isAuthenticated && props.isRegister ? (
          <Nav className="ml-auto">
            
                {props.isAdmin ? 
                   ( <Fragment>
                    <NavItem>
                   <Logout />
                 </NavItem>
                 </Fragment>
                 
                   
                 
               ):(
              <Fragment>
              
                <NavItem>
                  <span className="navbar-text mr-3">
                    <strong>
                      {props.user ? `Welcome ${props.user.first_name}` : ""}
                    </strong>
                  </span>
                </NavItem>
                <Nav.Link as={NavLink} to="/cart" href="/cart">
                  My Cart
                </Nav.Link>

                <Nav.Link as={NavLink} to="/profile" href="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={NavLink} to="/orders" href="/orders">
                  Orders
                </Nav.Link>
                <NavItem>
                  <Logout />
                </NavItem>
               
              </Fragment>
               )  }
               </Nav>
               ): (
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
         
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </Aux>
  );
};

export default layout;
