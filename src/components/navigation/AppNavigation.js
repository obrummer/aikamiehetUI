import React, { Component } from 'react';
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

class AppNavigation extends Component {
    render() {
        return (
          <Navbar bg="light" expand="lg">
          <Navbar.Brand>Pitch A Song</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item>Home</NavDropdown.Item>
                <NavDropdown.Item>Test file</NavDropdown.Item>
                <NavDropdown.Item>Test hum</NavDropdown.Item>
                <NavDropdown.Item>Test lyrics</NavDropdown.Item>
                <NavDropdown.Item>Sign up</NavDropdown.Item>
                <NavDropdown.Item>Log in</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  );
}
}


export default AppNavigation;