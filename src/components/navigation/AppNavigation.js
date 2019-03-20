import React, { Component } from 'react';
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';

class AppNavigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Pitch A Song</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <Nav.Item>
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item>Test file</Nav.Item>
                            <Nav.Item>Test hum</Nav.Item>
                            <Nav.Item>Test lyrics</Nav.Item>
                            <Nav.Item>Sign up</Nav.Item>
                            <Nav.Item>Log in</Nav.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNavigation;
