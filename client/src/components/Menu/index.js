import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Menu() {

  return (
    <Navbar>
      <Navbar.Brand >
        <Link to="/">
          BALIPRODUCT
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex align-items-center">

          <Link to='/cart'>
            <li className="logo">
              <i className="fas fa-shopping-cart fa-2x"></i>
            </li>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
}
